<template>
  <div>
    <form @submit.prevent="submit" class="grid md:grid-cols-2 gap-6 md:p-auto" novalidate="true">
      <div class="md:col-span-2 grid gap-2">
        <div v-show="errors.length">
          <ul class="grid gap-2">
            <li v-for="error in errors" v-bind:key="error" class="bg-[#DA5759] text-[#000000] w-72 md:w-96 mx-auto font-bold p-2 px-2 py-1 rounded duration-200">{{ error }}</li>
          </ul>
        </div>
        <div v-if="messageSend">
          <p class="bg-emerald-500 px-2 py-1 rounded duration-200">Message envoyé avec succès</p>
        </div>
      </div>
      <div class="relative z-0 mb-6 w-0 md:mx-10 ml-10">
        <input type="text" id="name" name="name" autocomplete="name" v-model="name" class="block sm:mx-auto py-2.5 w-72 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#333333] appearance-none focus:outline-none focus:ring-0 focus:border-[#DA5759] peer" placeholder=" " required />
        <label for="name" class="absolute ml-0 text font-bold text-[#333333] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DA5759] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom</label>
      </div>
      <div class="relative z-0 mb-6 w-0 md:mx-10 ml-10">
        <input type="text" id="surname" name="surname" autocomplete="surname" v-model="surname" class="block py-2.5 px-0 w-72 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#333333] appearance-none focus:outline-none focus:ring-0 focus:border-[#DA5759] peer" placeholder=" " required />
        <label for="surname" class="absolute text font-bold text-[#333333] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DA5759] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prénom</label>
      </div>
      <div class="relative z-0 mb-6 w-0 md:mx-10 ml-10">
        <input type="text" id="object" name="object" autocomplete="objet" v-model="object" class="block py-2.5 px-0 w-72 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#333333] appearance-none focus:outline-none focus:ring-0 focus:border-[#DA5759] peer" placeholder=" " required />
        <label for="object" class="absolute text font-bold text-[#333333] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DA5759] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Objet</label>
      </div>
      <div class="relative z-0 mb-6 w-0 md:mx-10 ml-10">
        <input type="text" id="email" name="email" autocomplete="email" v-model="email" class="block py-2.5 px-0 w-72 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#333333] appearance-none focus:outline-none focus:ring-0 focus:border-[#DA5759] peer" placeholder=" " required />
        <label for="email" class="absolute text font-bold text-[#333333] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DA5759] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mail</label>
      </div>
      <div class="relative z-0 mb-6 w-0 md:mx-10 ml-10">
        <textarea name="message" id="message" cols="40" rows="10" v-model="message" class="block py-2.5 px-0 w-72 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#333333] appearance-none focus:outline-none focus:ring-0 focus:border-[#DA5759] peer" placeholder=" " required />
        <label for="message" class="absolute text font-bold text-[#333333] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DA5759] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
      </div>
      <input class="md:col-span-2 mx-auto cursor-pointer mt-5 px-5 py-2 bg-[#DA5759] transition duration-200 text-[#000000] font-bold rounded-xl flex items-center w-fit" value="Envoyer" type="submit" name="" id="">
    </form>
  </div>
</template>

<script>
import smtp from '@/customeScript/smtp';

export default {
  data() {
    return {
      errors: [],
      messageSend: false,
      name: null,
      surname: null,
      email: null,
      object: null,
      message: null,
    };
  },
  methods: {
    checkForm() {
      if (this.name && this.surname && this.email && this.validEmail(this.email) && this.object && this.message && !(this.message.length <= 20) && !this.messageSend) {
        this.errors = [];
        return true;
      }
      this.errors = [];
      if (this.messageSend) {
        this.errors.push('Le message a déjà été envoyé attendais quelques secondes.');
      }
      if (!this.name) {
        this.errors.push('Le champ Nom doit être rempli.');
      }
      if (!this.surname) {
        this.errors.push('Le champ Prénom doit être rempli.');
      }
      if (!this.email) {
        this.errors.push('Le champ Email doit être rempli.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Une adresse email valide est requise.');
      }
      if (!this.object) {
        this.errors.push('Le champ Object doit être rempli.');
      }
      if (!this.message) {
        this.errors.push('Le champ Message doit être rempli.');
      } else if (this.message.length <= 20) {
        this.errors.push('Le champ Message doit contenir plus de 20 caractères.');
      }
      return false;
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    submit() {
      if (!this.checkForm()) {
        return;
      }
      this.sendEmail();
    },
    sendEmail() {
      smtp.send({
        SecureToken: 'a7c56475-4da5-4cfc-828a-c0aa64446c92',
        To: 'boudratristan@gmail.com',
        From: 'boudratristan@gmail.com',
        Subject: 'Formulaire portfolio',
        Body: `<html><h2>${this.name} ${this.surname}</h2><p style="font-size: 14px; margin: 0;"><strong>Email : ${this.email}</strong></p><p style="font-size: 14px; margin: 0;"><strong>Object : ${this.object}</strong></p><br></br><pre style="font-size: 14px;  margin: 0;"><strong>message : </strong><br>${this.message}</pre></html>`,
      }).then(
        (message) => this.verifEmailSending(message),
      );
    },
    verifEmailSending(message) {
      if (message === 'OK') {
        this.messageSend = true;
        localStorage.name = '';
        localStorage.surname = '';
        localStorage.email = '';
        localStorage.object = '';
        localStorage.message = '';
        // eslint-disable-next-line
        setTimeout(() => {
          this.messageSend = false;
          this.errors = [];
        }, 10000);
      } else {
        this.errors.push('Une erreur durant l\'envoi est survenue, réessayé !');
      }
    },
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.tel) {
      this.tel = localStorage.tel;
    }
    if (localStorage.object) {
      this.object = localStorage.object;
    }
    if (localStorage.message) {
      this.message = localStorage.message;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    surname(newSurname) {
      localStorage.surname = newSurname;
    },
    email(newEmail) {
      localStorage.email = newEmail;
    },
    object(newObject) {
      localStorage.object = newObject;
    },
    message(newMessage) {
      localStorage.message = newMessage;
    },
  },
};
</script>
