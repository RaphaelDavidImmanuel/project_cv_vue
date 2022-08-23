<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Personal Profile</template>
    <p>
      My name is Raphael David Immanuel, <br> I am a beginner web developer <br> who is studying at SMK TARUNA BHAKTI
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Education</template>
    <h6>2020-NOW</h6>
    <a href="http://portal.smktarunabhakti.net/login/index.php" target="_blank">SMK TARUNA BHAKTI</a>
    <h6>
      Software Engineering / RPL
    </h6>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Experience</template>
    <ul>
      <li>Hotel Design</li>
      <li>Food Delivery Design</li>
      <li>E-commarce Design</li>
      <li>Dealer Design</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Language</template>
    <ul>
      <li>English</li>
      <li>Bahasa</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Contact</template>
    <ul>
      <li>(+62) 812-1190-5404</li>
      <li>raphaeldavid1711.ri@gmail.com</li>
      <li><a href="https://github.com/RaphaelDavidImmanuel" target="_blank">GitHub</a></li>
    </ul>
  </WelcomeItem>
</template>
