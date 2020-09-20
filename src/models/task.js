/*  

*/

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const taskSchema = new schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
  datefinal: Date,
  status: {
    type: Boolean,
    default: false,
  },
});

// Establecemos un campo virtual
taskSchema
  .virtual("fecha_final")
  .set(function (fecha) {
    // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo datefinal de nuestro documento
    this.datefinal = new Date(fecha);
  })
  .get(function () {
    // el valor devuelto será un string en formato 'yyyy-mm-dd'
    return this.datefinal.toISOString().substring(0, 10);
  });

module.exports = mongoose.model("tasks", taskSchema);
