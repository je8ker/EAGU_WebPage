<template>
  <v-container>
    <v-card class="pa-4 my-4">
      <v-card-title>Edit Activities</v-card-title>
      <v-card-text>
        <div v-for="(item) in activities" :key="item.id" class="d-flex align-center mb-3">
          <v-text-field
            max-width="150"
            v-model="item.year"
            label="Year"
            type="number"
            outlined
            dense
            class="mr-2"
          ></v-text-field>
          <v-text-field
            v-model="item.activity"
            label="Activity"
            outlined
            dense
            class="flex-grow-1"
          ></v-text-field>
          <v-btn icon color="red" @click="deleteActivity(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
        <div class="d-flex align-center">
          <v-btn color="green" @click="addActivity" class="ma-2">
            <v-icon left>mdi-plus</v-icon>
            Add Activity
          </v-btn>
          <v-btn color="primary" @click="saveAllActivities">
            Save Changes
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

const activities = ref([]);

// GET: 서버에서 활동 데이터를 불러옵니다.
const fetchActivities = async () => {
  try {
    const response = await axios.get('/api/activities');
    activities.value = response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
  }
};

onMounted(fetchActivities);

// 새로운 활동 항목 추가 (년도가 빈 값으로 시작)
const addActivity = () => {
  activities.value.push({id: -Date.now(), year: '', activity: ''});
};

const deleteActivity = async (id) => {
  if (confirm('정말로 이 활동을 삭제하시겠습니까?')) {
    try {
      await axios.delete(`/api/activities/${id}`);
      activities.value = activities.value.filter(item => item.id !== id);
      alert('활동이 삭제되었습니다.');
    } catch (error) {
      console.error('Error deleting activity:', error);
      alert('활동 삭제에 실패했습니다.');
    }
  }
};

const saveAllActivities = async () => {
  try {
    const payload = {
      activities: activities.value.map(({ id, year, activity }) => ({ id, year, activity }))
    };
    await axios.put('/api/activities', payload);
    alert('Activities updated successfully!');
    fetchActivities(); // 저장 후 데이터 새로고침
  } catch (error) {
    console.error('Error saving activities:', error);
    alert('Failed to update activities.');
  }
};
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
