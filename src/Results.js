import Meaning from "./Meaning";

export default function Results(props) {
  if (props.definitions) {
    return (
      <div className="Results">
        <h3 className="fw-bold mt-5">{props.definitions.word}:</h3>
        {props.definitions.meanings.map(function (meaning, index) {
          if (index < 3) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
  return null;
}
