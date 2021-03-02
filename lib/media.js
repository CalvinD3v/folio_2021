import {getStrapiUrl} from './api';

export function getStrapiMedia(media) {
    const imageUrl = media.url.startWidth('/')
        ? getStrapiUrl(media.url)
        : media.url;
    return imageUrl;
}