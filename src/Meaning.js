import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5> {props.meaning.partOfSpeech}</h5>
      <p>{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}

// {props.meaning.definitions.map(function (definition, index) {
//   return <div key={index}>{definition}</div>;
// })}

//<p>{props.meaning.synonyms}</p>

// {props.meaning.synonyms.map(function (synonym, index) {
//   return (
//     <span key={index} className="me-4">
//       {synonym}
//     </span>
//   );
