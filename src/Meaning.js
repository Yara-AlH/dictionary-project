import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      <p className="word-definition">{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
