import React from 'react';
import SuggestionsList from 'components/suggestionsList';
import AddSuggestion from 'components/addSuggestion';
import Filter from 'components/filter';
import DeleteModal from 'components/deleteModal';
import PropTypes from 'prop-types';
import { getColorClass } from '../../sharedFunctions';

class Main extends React.Component {
  static propTypes = {
    suggestions: PropTypes.array,
    categories: PropTypes.array
  };

  state = {
    suggestions: this.props.suggestions,
    categories: this.props.categories,
    filters: []
  };

  render() {
    const addSuggestion = suggestion => {
      let suggestions = [...this.state.suggestions];

      suggestions.unshift(suggestion);
      this.setState({ suggestions: suggestions });
    };

    const filteredSuggestions = (category, suggestion) =>
      category === suggestion.category;

    const updateFilters = category => {
      let filters = [...this.state.filters];

      if (filters.includes(category)) {
        let index = filters.indexOf(category);
        filters.splice(index, 1);
      } else {
        filters.push(category);
      }
      this.setState({ filters: filters });
    };

    const resetFilters = () => {
      this.setState({ filters: [] });
    };

    const setDeleteSuggestion = suggestion => {
      this.setState({ suggestionToBeDeleted: suggestion });
    };

    const cancelDelete = () => {
      this.setState({ suggestionToBeDeleted: undefined });
    };

    const deleteSuggestion = () => {
      let suggestions = [...this.state.suggestions];
      let updatedList = suggestions.filter(
        item => item.id !== this.state.suggestionToBeDeleted.id
      );
      this.setState({
        suggestions: updatedList,
        suggestionToBeDeleted: undefined
      });
    };

    const likeSuggestion = (suggestion, liked) => {
      let suggestions = [...this.state.suggestions];
      let index = suggestions.indexOf(suggestion);
      let likes = suggestions[index].likes;

      suggestions[index].likes = liked === true ? likes + 1 : likes - 1;

      this.setState({ suggestions: suggestions });
    };

    return (
      <div className="main">
        <h1 className="main-title">Creuna Forslagskasse</h1>
        <AddSuggestion
          addSuggestion={addSuggestion}
          categories={this.state.categories}
        />
        <Filter
          filterOptions={this.state.categories}
          activeFilters={this.state.filters}
          updateFilters={updateFilters}
          resetFilters={resetFilters}
        />
        <div className="suggestion-lists-container">
          {this.props.categories.map(
            (category, index) =>
              (this.state.filters.includes(category) ||
                this.state.filters.length === 0) && (
                <SuggestionsList
                  key={category}
                  category={category}
                  color={getColorClass(index)}
                  suggestions={this.state.suggestions.filter(
                    filteredSuggestions.bind(this, category)
                  )}
                  deleteSuggestion={setDeleteSuggestion}
                  likeSuggestion={likeSuggestion}
                />
              )
          )}
        </div>
        {this.state.suggestionToBeDeleted && (
          <DeleteModal
            suggestion={this.state.suggestionToBeDeleted}
            cancel={cancelDelete}
            confirm={deleteSuggestion}
          />
        )}
      </div>
    );
  }
}

export default Main;
