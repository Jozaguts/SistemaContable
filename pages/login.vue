<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <validation-observer ref="form">
              <v-card class="elevation-12" slot-scope="{ invalid, validated }">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Iniciar sesión</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <validation-provider name="correo electronico" rules="required|email">
                      <v-text-field
                        slot-scope="{
                        errors,
                        valid
                        }"
                        :error-messages="errors"
                        :success="valid"
                        label="Correo electrónico"
                        name="correo_electronico"
                        prepend-icon="mdi-account"
                        type="text"
                        v-model="credentials.email"
                      ></v-text-field>
                    </validation-provider>
                    <validation-provider name="contrasena" rules="required">
                      <v-text-field
                        slot-scope="{
                        errors,
                        valid
                      }"
                        :error-messages="errors"
                        :success="valid"
                        id="contrasena"
                        label="Contraseña"
                        name="contrasena"
                        prepend-icon="mdi-lock"
                        type="password"
                        v-model="credentials.password"
                      ></v-text-field>
                    </validation-provider>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    @click="login(credentials)"
                    :disabled="invalid || !validated"
                  >Inicar sesión</v-btn>
                </v-card-actions>
              </v-card>
            </validation-observer>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  layout: 'default',
  props: {
    source: String
  },
  components: { ValidationObserver, ValidationProvider },
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      login: 'test/login'
    })
  }
}
</script>