import "./App.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms my-3">
        <div className="me-2 similar">Similar:</div>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index} className="me-3">
              {synonym}
            </span>
          );
        })}
      </div>
    );
  }
  return null;
}
