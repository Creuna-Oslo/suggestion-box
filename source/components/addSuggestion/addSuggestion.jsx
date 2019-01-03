import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Addsuggestion extends React.Component {
  static propTypes = {
    updateSuggestions: PropTypes.func,
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

  setCategory = e => this.setState({ category: e.target.value });

  addSuggestion = () => {
    let suggestion = { ...this.state };
    suggestion.id = shortid.generate();
    suggestion.likes = 0;
    suggestion.date = new Date();

    this.props.updateSuggestions(suggestion);
    this.setState({ title: '', text: '' });
  };

  render() {
    return (
      <React.Fragment>
        <div className="add-suggestion">
          <select onChange={this.setCategory} value={this.state.category}>
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
          <button
            disabled={!this.state.category | !this.state.title}
            onClick={this.addSuggestion}
          >
            Legg i forslagskasse {'\u2709'}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Addsuggestion;
