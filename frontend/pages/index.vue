<script setup lang="ts">
import { useWelcomeServer } from '../apis/welcome'

defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const welcome = useWelcomeServer()
const tips = ref('Loading...')
function fetchTips() {
  tips.value = 'Loading...'
  welcome.request()
    .sayHello()
    .then(str => tips.value = str)
    .catch(() => tips.value = 'Failed to fetch tips')
}
fetchTips()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse + Naily RPC
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ $t('intro.desc') }}</em>
      <br>
      <em text-sm opacity-70 @click="fetchTips">{{ tips }}</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      :placeholder="$t('intro.whats-your-name')"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ $t('intro.whats-your-name') }}</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ $t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
