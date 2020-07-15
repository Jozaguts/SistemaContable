<template>
 <v-container>
   <v-row>
     <v-col>
       <v-stepper v-model="stepper">
         <v-stepper-header >
           <v-stepper-step :complete="stepper > 1" step="1" editable>
            Datos Personales
           </v-stepper-step>
           <v-divider></v-divider>
           <v-stepper-step :complete="stepper > 2" step="2" editable>
             Datos RR.HH.
           </v-stepper-step>
           <v-divider></v-divider>
           <v-stepper-step step="3" editable>
             Contrato
           </v-stepper-step>
         </v-stepper-header>
           <v-stepper-items>
           <v-stepper-content step="1">
             <ValidationObserver ref="form-personal-data" v-slot:="valid">
               <v-form>
                 <v-row>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="Primer nombre" rules="required">
                       <v-text-field label="Primer nombre" :error-messages="errors" v-model="personalInfo.first_name">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="Segundo nombre" rules="required">
                       <v-text-field label="Segundo nombre" :error-messages="errors" v-model="personalInfo.second_name">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="Primer apellido" rules="required">
                       <v-text-field label="Primer apellido" :error-messages="errors" v-model="personalInfo.surname">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="Segundo apellido" rules="required">
                       <v-text-field label="Segundo apellido" :error-messages="errors" v-model="personalInfo.second_surname">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="Nombre general" rules="required">
                       <v-text-field label="Nombre general" :error-messages="errors" v-model="personalInfo.general_name">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="Correo" rules="required|email">
                       <v-text-field label="Correo" :error-messages="errors" v-model="personalInfo.email">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="Nivel de estudios" rules="required">
                       <v-select label="Nivel de estudios" :items="educationalLevelOptions" :error-messages="errors" v-model="personalInfo.educational_level">

                       </v-select>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="CURP" :rules="{regex:/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/}">
                       <v-text-field label="CURP" :error-messages="errors" counter="18"  v-model="personalInfo.curp">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="RFC" :rules="{regex:/^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$/}">
                       <v-text-field label="RFC" :error-messages="errors" counter="12"  v-model="personalInfo.rfc">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="Teléfono particular" rules="required|digits:10">
                       <v-text-field label="Teléfono particular" counter="10" :error-messages="errors" v-model="personalInfo.phone_number">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="Dirección particular" rules="required">
                       <v-text-field label="Dirección particular"  hint="Colonia Calle número" :error-messages="errors" v-model="personalInfo.address">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                   <v-col cols="12" md="6" lg="4">
                     <ValidationProvider v-slot="{errors}" name="Contacto de emergencia " rules="required|digits:10">
                       <v-text-field label="Contacto de emergencia" counter="10"  hint="Teléfono" :error-messages="errors" v-model="personalInfo.emergency_number">

                       </v-text-field>
                     </ValidationProvider>
                   </v-col>
                 </v-row>
               </v-form>
             </ValidationObserver>
           </v-stepper-content>
             <v-stepper-content step="2">
               <ValidationObserver ref="form-rr-hh-data" v-slot:="valid">
                 <v-form>
                   <v-row>
                     <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Gerencial" rules="required">
                         <v-select label="Gerencial" :items="managementOptions" :error-messages="errors" v-model="rrhhInfo.management">

                         </v-select>
                       </ValidationProvider>
                     </v-col>
                    <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Departamento" rules="required">
                         <v-select label="Departamento" :items="departmentOptions" :error-messages="errors" v-model="rrhhInfo.department">

                         </v-select>
                       </ValidationProvider>
                     </v-col>
                    <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Area" rules="required">
                         <v-select label="Area" :items="areaOptions" :error-messages="errors" v-model="rrhhInfo.area">

                         </v-select>
                       </ValidationProvider>
                     </v-col>
                    <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Puesto" rules="required">
                         <v-select label="Puesto" :items="positionOptions" :error-messages="errors" v-model="rrhhInfo.position">

                         </v-select>
                       </ValidationProvider>
                     </v-col>
                    <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Jefe" rules="required">
                         <v-select label="Jefe" :items="bossOptions" :error-messages="errors" v-model="rrhhInfo.boss">

                         </v-select>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Banco receptor" rules="required">
                         <v-text-field label="Banco receptor"  hint="Clave" :error-messages="errors" v-model="rrhhInfo.receiving_bank_key">

                         </v-text-field>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Número de nomina" rules="required">
                         <v-text-field label="Número de nomina"   :error-messages="errors" v-model="rrhhInfo.payroll_number">

                         </v-text-field>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Plantilla presupuestal" rules="required">
                         <v-text-field label="Plantilla presupuestal"   :error-messages="errors" v-model="rrhhInfo.template">

                         </v-text-field>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Cuenta gastos" rules="required">
                         <v-text-field label="Cuenta gastos"   :error-messages="errors" v-model="rrhhInfo.expense_account">

                         </v-text-field>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Cuenta pensiones" rules="required">
                         <v-text-field label="Cuenta pensiones"   :error-messages="errors" v-model="rrhhInfo.pension_account">

                         </v-text-field>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="6" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Cuenta anticipos" rules="required">
                         <v-text-field label="Cuenta anticipos"   :error-messages="errors" v-model="rrhhInfo.advance_account">

                         </v-text-field>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="6" lg="4">
                       <p>Funciones Basicas</p>
                       <ValidationProvider v-slot="{errors}" name="Funciones basicas" rules="required">
                         <v-switch  v-model="rrhhInfo.basic_functions" v-for="option in basicFunctionOptions" :key="option.text"  :error-messages="errors" :label="option.text" :value="option.value"></v-switch>
                       </ValidationProvider>
                     </v-col>
                   </v-row>
                 </v-form>
               </ValidationObserver>
             </v-stepper-content>
             <v-stepper-content step="3">
               <ValidationObserver ref="form-contract" v-slot:="valid">
                 <v-form>
                   <v-row>
                     <v-col cols="12" md="4" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Fecha de ingreso" rules="required">
                         <v-menu
                           ref="entryDateMenu"
                           v-model="entryDateMenu"
                           :close-on-content-click="false"
                           transition="scale-transition"
                           offset-y
                           min-width="290px"
                         >
                           <template v-slot:activator="{ on, attrs }">
                             <v-text-field
                               v-model="contractInfo.entry_date"
                               label="Fecha de ingreso"
                               prepend-icon="mdi-calendar"
                               readonly
                               v-bind="attrs"
                               v-on="on"
                             ></v-text-field>
                           </template>
                           <v-date-picker
                             ref="picker"
                             :error-messages="errors"
                             v-model="contractInfo.entry_date"
                             :max="new Date().toISOString().substr(0, 10)"
                             min="1950-01-01"
                             @change="save($event, 'entryDateMenu')"
                           ></v-date-picker>
                         </v-menu>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="4" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Fecha de baja" rules="required">
                         <v-menu
                           ref="terminationMenu"
                           v-model="terminationMenu"
                           :close-on-content-click="false"
                           transition="scale-transition"
                           offset-y
                           min-width="290px"
                         >
                           <template v-slot:activator="{ on, attrs }">
                             <v-text-field
                               v-model="contractInfo.termination_date"
                               label="Fecha de baja"
                               prepend-icon="mdi-calendar"
                               readonly
                               v-bind="attrs"
                               v-on="on"
                             ></v-text-field>
                           </template>
                           <v-date-picker
                             ref="picker"
                             :error-messages="errors"
                             v-model="contractInfo.termination_date"
                             :max="new Date().toISOString().substr(0, 10)"
                             min="1950-01-01"
                             @change="save($event,'terminationMenu')"
                           ></v-date-picker>
                         </v-menu>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="4" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Fecha de reingreso" rules="required">
                         <v-menu
                           ref="reentryMenu"
                           v-model="reentryMenu"
                           :close-on-content-click="false"
                           transition="scale-transition"
                           offset-y
                           min-width="290px"
                         >
                           <template v-slot:activator="{ on, attrs }">
                             <v-text-field
                               v-model="contractInfo.re_entry_date"
                               label="Fecha de reingreso"
                               prepend-icon="mdi-calendar"
                               readonly
                               v-bind="attrs"
                               v-on="on"
                             ></v-text-field>
                           </template>
                           <v-date-picker
                             ref="picker"
                             :error-messages="errors"
                             v-model="contractInfo.re_entry_date"
                             :max="new Date().toISOString().substr(0, 10)"
                             min="1950-01-01"
                             @change="save($event,'reentryMenu')"
                           ></v-date-picker>
                         </v-menu>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="4" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Tipo de empleado" rules="required">
                         <v-select label="Tipo de empleado" :items="employeeTypeOptions" :error-messages="errors" v-model="contractInfo.employee_type">

                         </v-select>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="4" lg="4">
                       <v-file-input label="Vitae" v-model="contractInfo.vitae"></v-file-input>
                     </v-col>
                     <v-col cols="12" md="4" lg="4">
                       <ValidationProvider v-slot="{errors}" name="Puesto" rules="required">
                         <v-select label="Puesto" :items="contractPositionOptions" :error-messages="errors" v-model="contractInfo.position">

                         </v-select>
                       </ValidationProvider>
                     </v-col>
                     <v-col cols="12" md="4" lg="4">
                       <p>Estatus</p>
                       <ValidationProvider v-slot="{errors}" name="Estatus" rules="required">
                         <div class="d-flex">
                           <v-switch  v-model="contractInfo.status" v-for="option in statusOptions" :key="option.text"  :error-messages="errors" :label="option.text" :value="option.value"></v-switch>
                         </div>
                       </ValidationProvider>
                     </v-col>
                   </v-row>
                 </v-form>
               </ValidationObserver>
             </v-stepper-content>
           </v-stepper-items>
       </v-stepper>
     </v-col>
   </v-row>
 </v-container>
</template>

<script>
  import {ValidationObserver, ValidationProvider} from "vee-validate";

  export default {
  layout: 'dashboard',
    components: { ValidationObserver, ValidationProvider },
    data:()=>({
      entryDateMenu:false,
      terminationMenu:false,
      reentryMenu:false,
      steps: 3,
      stepper:1,
      personalInfo:{
        first_name:'',
        second_name:'',
        surname:'',
        second_surname:'',
        general_name:'',
        email:'',
        educational_level:'',
        curp:'',
        rfc:'',
        phone_number:'',
        address:'',
        emergency_number:''
      },
      rrhhInfo:{
        management:'',
        department:'',
        area:'',
        position:'',
        boss:'',
        receiving_bank_key:'',
        payroll_number:'',
        template:'',
        expense_account:'',
        pension_account:'',
        advance_account:'',
        basic_functions:[]



      },
      contractInfo:{
        entry_date:null,
        termination_date:'',
        re_entry_date:'',
        status:'',
        employee_type:'',
        vitae:[],
        position:''
      },
      statusOptions:[{text: 'Eventual', value:1},{text: 'Permanente', value:2}],
      employeeTypeOptions:[{text: 'Opción 1', value:1},{text: 'Opción 2', value:2}],
      contractPositionOptions:[{text: 'Opción 1', value:1},{text: 'Opción 2', value:2}],
      managementOptions :[{text: 'Opción 1', value:1},{text: 'Opción 1', value:1}],
      departmentOptions :[{text: 'Opción 1', value:1},{text: 'Opción 1', value:1}],
      areaOptions:[{text: 'Opción 1', value:1},{text: 'Opción 1', value:1}],
      positionOptions :[{text: 'Opción 1', value:1},{text: 'Opción 1', value:1}],
      bossOptions :[{text: 'Opción 1', value:1},{text: 'Opción 1', value:1}],
      basicFunctionOptions :[{text: 'Opción 1', value:1},{text: 'Opción 2', value:2}],
      educationalLevelOptions:[{text: 'Opción 1', value:1},{text: 'Opción 2', value:2},{text: 'Opción 3', value:3}]
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date, ref) {
        this.$refs[ref].save(date)
      },
    },
}
</script>

<style>
</style>
