
// const fs = require('fs');
// const newUtil = require('util');

// const viewFileAsync = newUtil.promisify(fs.readFile);

// const createFileAsync = newUtil.promisify(fs.writeFile);

// // This is the package I downloaded from https://www.npmjs.com/package/uuid
// const uuidverison1 = require('uuid/verison1');



// class backlog {
//     async read() {
//         return viewFileAsync('db/db.json', 'utf-8');
//     }

//     async write(note) {
//         return createFileAsync('db/db.json', JSON.stringify(note));
//     }

//     async getNotes() {
//         const notes = await this.read();
//         let parsedNotes;

//     }

//     async getNotes() {
//         try {
//             const notes = await this.read();
//             return JSON.parse(notes) || [];
//           } catch (error) {
//             return [];
//         }
//     };
// };

// createNote(note) {
//     const {caption, text} = note;

//     if (!caption || !text) {
//       throw new Error("Note 'caption' and 'text' cannot be blank");
//     }

//     // Creating a unique id to the notes using uuid version package
// const brandNewNote = { caption, text, id: uuidverison1() };

// return this.getNotes() {
//     .then((notes) => [...notes, createNote])
//     .then((updatedNotes) => this.write(updatedNotes))
//     .then(() => newNote);
//     // const notes = await this.getNotes();
//     // const updatedNotes = [...notes, newNote];
//     // await this.write(updatedNotes);
//     // return brandNewNote;
//   }

// };