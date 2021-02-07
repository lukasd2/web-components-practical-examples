import { html, fixture, expect } from '@open-wc/testing';

import '../src/video-page-component.js';

describe('VideoPageComponent', () => {
    let element;
    beforeEach(async () => {
        element = await fixture(
            html`<video-page-component></video-page-component>`
        );
    });

    it('renders a h1', () => {
        const h1 = element.shadowRoot.querySelector('h1');
        expect(h1).to.exist;
        expect(h1.textContent).to.equal('Online video editor');
    });
    it('renders a h2', () => {
        const h2 = element.shadowRoot.querySelector('h2');
        expect(h2).to.exist;
        expect(h2.textContent).to.equal(
            'Create, edit and share videos directly from the browser!'
        );
    });

    it('renders a custom MediaExplorerComponent', () => {
        const h2 = element.shadowRoot.querySelector('media-explorer');
        expect(h2).to.exist;
    });

    it('passes the a11y audit', async () => {
        await expect(element).shadowDom.to.be.accessible();
    });
});
