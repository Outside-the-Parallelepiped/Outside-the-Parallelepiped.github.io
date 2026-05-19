<template>
  <Suspense>
    <template #default>
      <div>
        <div class="header">
          <RouterLink to="/" class="noBackground">
            <div class="appLogoContainer">
              <span class="AppLogo">
                <AppLogo />
              </span>
              <div>
                <div class="logoText">Outside the<br />Parallelepiped</div>
                <div class="logoSubtitle">Game Studio</div>
              </div>
            </div>
          </RouterLink>
        </div>
        <nav class="navigationLinks">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/games" :class="{ active: isGamesActive }">Games</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <div class="content">
          <RouterView />
        </div>
        <FooterLayout />
      </div>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import AppLogo from '@/assets/logo.vue'
import FooterLayout from './components/FooterLayout.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isGamesActive = computed(() => {
  return route.path.startsWith('/games')
})
</script>

<style scoped>
.header {
  z-index: 98;
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1rem;
  background: var(--color-background);
  box-shadow: 0px 5px 45px var(--color-background);
}

.navigationLinks {
  z-index: 99;
}

.appLogoContainer {
  display: flex;
  gap: 10px;
  align-items: center;
  /* background: var(--vt-c-lightblue); */
}

.AppLogo {
  fill: var(--color-logo);
  stroke: var(--color-logo);
}

.logoText {
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-logo-text);
  text-transform: uppercase;
  line-height: 1.3;
  margin-top: 10px;
}

.logoSubtitle {
  font-size: 9px;
  font-weight: 400;
  color: var(--color-highlight-text);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

nav {
  position: fixed;
  right: 0px;
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
}

nav a {
  font-size: 13px;
  text-decoration: none;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:hover {
  background-color: transparent;
  color: var(--color-highlight-text);
}

nav a.router-link-active,
nav a.active {
  color: var(--color-highlight-text);
}

nav a:first-of-type {
  border: 0;
}

.content {
  min-height: calc(100vh - 130px);
  padding: 0 2rem 100px 2rem;
  margin: 0 20vw;
  margin-top: 90px;
}

@media (max-width: 1800px) {
  .content {
    margin: 0 15vw;
    margin-top: 90px;
  }
}

@media (max-width: 1500px) {
  .content {
    margin: 0 10vw;
    margin-top: 90px;
  }
}

@media (max-width: 800px) {
  .header {
    position: relative;
    flex-direction: column;
    height: 80px;
    border-bottom: none;
    margin-bottom: 0;
  }

  .appLogoContainer {
    justify-content: center;
  }

  nav {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    margin-top: 0;
    padding-top: 10px;
    width: 100%;
    font-size: 12px;
    text-align: center;
    border-bottom: 2px solid var(--color-border);
    background: var(--color-background);
    box-shadow: 0px 5px 45px var(--color-background);
  }

  .content {
    margin: 0;
    min-height: calc(100vh - 170px);
  }
}
</style>
