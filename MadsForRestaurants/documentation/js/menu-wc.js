'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mads-for-restaurants documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-6cd86a1f2b5ef814a5ef20ecdb2cb43b4332faa69ea2343a4ad10a60426e8270ad639800231dc8194e3fdf27846a08981c52f3d6ee4cb8bb2bc9e53f10559882"' : 'data-bs-target="#xs-components-links-module-AppModule-6cd86a1f2b5ef814a5ef20ecdb2cb43b4332faa69ea2343a4ad10a60426e8270ad639800231dc8194e3fdf27846a08981c52f3d6ee4cb8bb2bc9e53f10559882"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6cd86a1f2b5ef814a5ef20ecdb2cb43b4332faa69ea2343a4ad10a60426e8270ad639800231dc8194e3fdf27846a08981c52f3d6ee4cb8bb2bc9e53f10559882"' :
                                            'id="xs-components-links-module-AppModule-6cd86a1f2b5ef814a5ef20ecdb2cb43b4332faa69ea2343a4ad10a60426e8270ad639800231dc8194e3fdf27846a08981c52f3d6ee4cb8bb2bc9e53f10559882"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservationFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReserverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReserverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TablesMapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TablesMapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToastComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToastComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-PipesModule-f17fac52dea87903bb9ad57edc788be251b2df1e63afae4a43c54922f2eefc41c76d4f7c414abdc6379dccd37192e7a7bda3955f6e3ea4705a257ff512fd795c"' : 'data-bs-target="#xs-pipes-links-module-PipesModule-f17fac52dea87903bb9ad57edc788be251b2df1e63afae4a43c54922f2eefc41c76d4f7c414abdc6379dccd37192e7a7bda3955f6e3ea4705a257ff512fd795c"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-f17fac52dea87903bb9ad57edc788be251b2df1e63afae4a43c54922f2eefc41c76d4f7c414abdc6379dccd37192e7a7bda3955f6e3ea4705a257ff512fd795c"' :
                                            'id="xs-pipes-links-module-PipesModule-f17fac52dea87903bb9ad57edc788be251b2df1e63afae4a43c54922f2eefc41c76d4f7c414abdc6379dccd37192e7a7bda3955f6e3ea4705a257ff512fd795c"' }>
                                            <li class="link">
                                                <a href="pipes/FormTitlePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormTitlePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/OccupiedPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OccupiedPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClientService.html" data-type="entity-link" >ClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReservationService.html" data-type="entity-link" >ReservationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WorkerService.html" data-type="entity-link" >WorkerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClientType.html" data-type="entity-link" >ClientType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReservationType.html" data-type="entity-link" >ReservationType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableType.html" data-type="entity-link" >TableType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkerType.html" data-type="entity-link" >WorkerType</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});