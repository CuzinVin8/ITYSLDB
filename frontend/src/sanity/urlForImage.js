import React from 'react'
import myConfiguredSanityClient from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

export const builder = imageUrlBuilder(myConfiguredSanityClient)

export function urlForImage(source) {
    return builder.image(source)
}