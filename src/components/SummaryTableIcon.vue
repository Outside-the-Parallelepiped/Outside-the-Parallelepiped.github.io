<template>
  <AndroidIcon v-if="name === 'android'" class="platform-icon" />
  <IosIcon v-else-if="name === 'ios'" class="platform-icon" />
  <SteamIcon v-else-if="name === 'steam'" class="platform-icon" />
  <SwitchIcon v-else-if="name === 'switch'" class="platform-icon" />
  <UnrealIcon v-else-if="name === 'unreal'" class="platform-icon" />
</template>

<script setup lang="ts">
import AndroidIcon from '@/assets/icons/AndroidIcon.vue'
import IosIcon from '@/assets/icons/IosIcon.vue'
import SteamIcon from '@/assets/icons/SteamIcon.vue'
import SwitchIcon from '@/assets/icons/SwitchIcon.vue'
import UnrealIcon from '@/assets/icons/UnrealIcon.vue'

defineProps({ name: String })
</script>

<style lang="css">
.platform-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

@media (max-width: 800px) {
  .platform-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
