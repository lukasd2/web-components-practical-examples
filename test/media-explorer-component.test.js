import { html, fixture, expect } from '@open-wc/testing';

import '../src/MediaExplorer/media-explorer-component.js';

describe('MediaExplorerComponent', () => {
    let element;
    beforeEach(async () => {
        element = await fixture(html`<media-explorer></media-explorer>`);
    });

    it('renders a custom SearchBar component', () => {
        const searchBar = element.shadowRoot.querySelector('search-bar');
        expect(searchBar).to.exist;
    });
    it('renders a custom FilterTab component', () => {
        const FilterTab = element.shadowRoot.querySelector('filter-tab');
        expect(FilterTab).to.exist;
    });
    it('renders a custom CardComponent component', () => {
        const CardComponent = element.shadowRoot.querySelector(
            'card-component'
        );
        expect(CardComponent).to.exist;
    });

    it('passes the a11y audit', async () => {
        await expect(element).shadowDom.to.be.accessible();
    });
});
