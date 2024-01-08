import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Card from '../Card.vue'

describe('Card', () => {
  const game = {
    id: 523,
    title: 'Lost Ark',
    description:
      '<p style="text-align: justify;">Journey throughout the realm of Arkesia and do battle against a demon invasion in Smilegate\'s free-to-play ARPG Lost Ark! Choose from over a dozen character classes and customize your skills with the unique Tripod system, battling evil on both land and sea -- perhaps even claiming an island for your own!</p>\r\n<p style="text-align: justify;">Lost Ark offers PvE and PvP gameplay, including dungeons to enhance your skill proficiency and to hunt for treasure. Take part in arena PvP or take to the open seas and do battle for the richest islands. Defend your stronghold against all comers or group up with friends to seize territory and lay claim to the best spoils of war!</p>',
    thumbnail: 'https://www.mmobomb.com/g/523/thumbnail.jpg',
    developer: 'Smilegate',
    genre: 'ARPG',
    release: '2022-02-11',
    platform: 'Windows',
  }

  it('render Game correctly', async () => {
    const wrapper = mount(Card, {
      props: {
        id: game.id,
        title: game.title,
        description: game.description,
        thumbnail: game.thumbnail,
        developer: game.developer,
        genre: game.genre,
        release: game.release,
        platform: game.platform,
      },
    })

    expect(wrapper.text()).toContain(game.title)
  })
})
