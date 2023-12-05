import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.definitions) {
    return (
      <div className="Results">
        <section>
          <div className="word-name">{props.definitions.word} </div>
          <div className="word-phonetic mt-3">
            "{props.definitions.phonetic}"
          </div>
        </section>

        {props.definitions.meanings.map(function (meaning, index) {
          if (index < 3) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
  return null;
}
