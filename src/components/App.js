import React from "react";
import Note from "./Note";
import Notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";

//   function createNote(noteItem) {
//     return (
//       <Note
//         key={noteItem.id}
//         title={noteItem.title}
//         content={noteItem.content}
//       />
//     );
//   }

function App() {
  return (
    <div>
      <Header />
      {Notes.map((noteItem) => (
        <Note
          key={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
