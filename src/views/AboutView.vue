<template>
    <div>
      <h1>About Us</h1>
      <p>{{ description }}</p>
      <ul>
        <li v-for="teamMember in teamMembers" :key="teamMember.id">
          {{ teamMember.name }} - {{ teamMember.role }}
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      description: 'Welcome to our company. We are a dedicated team of professionals...',
      teamMembers: [
        { id: 1, name: 'John Doe', role: 'CEO' },
        { id: 2, name: 'Jane Smith', role: 'CTO' },
        { id: 3, name: 'Mark Johnson', role: 'Lead Developer' },
      ],
    };
  },
};
</script>

  <style scoped>
  h1 {
    color: #333;
  }

  p {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  </style>
