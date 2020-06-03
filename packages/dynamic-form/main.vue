<template>
  <a-form-model
    :label-col="labelCol"
    :model="form"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="Activity name">
      <a-input v-model="form.name" />
    </a-form-model-item>
    <a-form-model-item label="Activity zone">
      <a-select
        v-model="form.region"
        placeholder="please select your zone"
      >
        <a-select-option value="shanghai">
          Zone one
        </a-select-option>
        <a-select-option value="beijing">
          Zone two
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="Activity time">
      <a-date-picker
        v-model="form.date1"
        placeholder="Pick a date"
        show-time
        style="width: 100%;"
        type="date"
      />
    </a-form-model-item>
    <a-form-model-item label="Instant delivery">
      <a-switch v-model="form.delivery" />
    </a-form-model-item>
    <a-form-model-item label="Activity type">
      <a-checkbox-group v-model="form.type">
        <a-checkbox
          name="type"
          value="1"
        >
          Online
        </a-checkbox>
        <a-checkbox
          name="type"
          value="2"
        >
          Promotion
        </a-checkbox>
        <a-checkbox
          name="type"
          value="3"
        >
          Offline
        </a-checkbox>
      </a-checkbox-group>
    </a-form-model-item>
    <a-form-model-item label="Resources">
      <a-radio-group v-model="form.resource">
        <a-radio value="1">
          Sponsor
        </a-radio>
        <a-radio value="2">
          Venue
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="Activity form">
      <a-input
        v-model="form.desc"
        type="textarea"
      />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button
        type="primary"
        @click="onSubmit"
      >
        Create
      </a-button>
      <a-button style="margin-left: 10px;">
        Cancel
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!', this.form)
    }
  }
}
</script>
