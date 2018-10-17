import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || null,
    trips: [],
    activeTrip: '',
    quote: {}
  },
  getters: {
    loggedIn(state) {
      // If token does not equal null, we have a token and are logged in
      return state.token !== null;
    },
    randomQuote(state) {
      return state.quote;
    },
    getToken(state) {
      if (token) {
        return state.token;
      }
    }
  },
  mutations: {
    retrieveTokenMutation(state, token) {
      state.token = token;
    },
    destroyTokenMutation(state, token) {
      state.token = token;
    },
    retrieveQuoteMutation(state, quote) {
      state.quote = quote;
    },
    setActiveTripMutation(state, id) {
      state.activeTrip = id;
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      // Asynchronously retrieves and stores a token upon logging in
      return new Promise((resolve, reject) => {
        axios.post(`http://localhost:8000/users/login`, {
          email: credentials.email,
          password: credentials.password
        })
        .then(response => {
          console.log(response);
          const token = response.data.token;
          localStorage.setItem('user-token', token);
          context.commit('retrieveTokenMutation', token);
          resolve(response);
        })
        .catch(e => {
          console.log(e);
          reject(error);
        })
      })

    },
    destroyToken(context) {
      // Destroys the locally saved token (still need to add code on server to destroy token there too?)
      if (context.getters.loggedIn) {
        localStorage.removeItem('user-token');
        context.commit('destroyTokenMutation', null);
      }
    },
    retrieveQuote(context) {
      // Asynchronously retrieves and stores a quote
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8000/api/quote`)
        .then(response => {
          const quote = response;
          context.commit('retrieveQuoteMutation', quote);
          resolve(response);
        })
        .catch(e => {
          reject(error);
        })
      })
    }
  }
})
