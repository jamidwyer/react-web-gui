import { connect } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import { addItem } from "../actions";

export default connect(null, { addItem })(SectionTitle);
