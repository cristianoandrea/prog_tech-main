const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cognome: {
    type: String,
    required: true,
  },
  animale:
    {
      type: String,
    },
  nascita: {
    type: String,
    required: true,
  },
  sesso: {
    type: String,
    required: true,
  },
  prodotti: [
    {
      numId: String,
      quantità: Number,
      dataAcquisto: String
    },
  ],
  servizi: [
    {
      numId: String,
      datainiz: String,
      datafin: String,
      tipo: String,
      dataAcquisto: String
    },
  ],
});

// static signup method
userSchema.statics.signup = async function (
  email,
  password,
  name,
  cognome,
  sesso,
  dataNascita,
  favoriteAnimal
) {
  // validation
  if (
    !email ||
    !password ||
    !name ||
    !cognome ||
    !sesso ||
    !dataNascita ||
    !favoriteAnimal
  ) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const nascita = new Date(dataNascita);

  const user = await this.create({
    email,
    password: hash,
    name,
    cognome,
    sesso,
    nascita,
   animale:favoriteAnimal,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
