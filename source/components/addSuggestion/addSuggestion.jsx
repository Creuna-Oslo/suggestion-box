import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Button from 'components/button';

class Addsuggestion extends React.Component {
  static propTypes = {
    addSuggestion: PropTypes.func,
    categories: PropTypes.array
  };

  state = {
    category: '',
    title: '',
    text: ''
  };

  updateTextField = e => {
    let name = e.target.dataset.name;
    this.setState({ [name]: e.target.value });
  };

  selectCategory = e => this.setState({ category: e.target.value });

  createSuggestion = () => {
    let suggestion = { ...this.state };
    suggestion.id = shortid.generate();
    suggestion.likes = 0;
    suggestion.date = new Date();

    this.props.addSuggestion(suggestion);
    this.setState({ title: '', text: '' });
  };

  render() {
    return (
      <React.Fragment>
        <div className="add-suggestion">
          <select onChange={this.selectCategory} value={this.state.category}>
            <option defaultValue="" disabled={!!this.state.category}>
              -- Velg kategori --
            </option>
            {this.props.categories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            placeholder="tittel"
            value={this.state.title}
            onChange={e => this.updateTextField(e)}
            data-name="title"
          />
          <textarea
            placeholder="utfyllende tekst"
            value={this.state.text}
            onChange={e => this.updateTextField(e)}
            data-name="text"
          />
          <Button
            disabled={!this.state.category || !this.state.title}
            onClick={this.createSuggestion}
            text={`Legg i forslagskasse \u2709`}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Addsuggestion;
