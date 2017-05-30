import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
import SearchBarComponent from "../components/search_bar";

class SearchBar extends SearchBarComponent{
    onFormSubmit(event){
        super.onFormSubmit(event);
        this.props.fetchWeather(this.state.term);
        this.setState({term: ""});
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);