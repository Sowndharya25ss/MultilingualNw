import {Component} from 'react'

import './index.css'

class Tabs extends Component {
  onClickChangeLang = () => {
    const {changeLang, language} = this.props
    changeLang(language)
  }

  render() {
    const {language, active} = this.props

    const classTab = language === active ? 'active-tab' : 'normal-tab'

    return (
      <li>
        <button
          className={classTab}
          type="button"
          onClick={this.onClickChangeLang}
        >
          {language}
        </button>
      </li>
    )
  }
}

export default Tabs
