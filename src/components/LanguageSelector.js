import React from "react";
import LanguageContext from "../contexts/LanguageContext";
// import LanguageSelector

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context)
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("deutch")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
