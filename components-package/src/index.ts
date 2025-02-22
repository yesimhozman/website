import '../../src/types/globals.d';

import { version } from '../package.json';
import { CriticalException } from '../../src/Utility/errors';
import i18n_definition_de from '../../src/i18n/de.json';
import i18n_definition_en from '../../src/i18n/en.json';
import i18n_definition_fr from '../../src/i18n/fr.json';
import i18n_definition_pt from '../../src/i18n/pt.json';
import i18n_definition_es from '../../src/i18n/es.json';
import i18n_definition_hr from '../../src/i18n/hr.json';
import i18n_definition_nl from '../../src/i18n/nl.json';

export const languages = {
    de: { base_url: 'https://www.datenanfragen.de/', translations: i18n_definition_de },
    en: { base_url: 'https://www.datarequests.org/', translations: i18n_definition_en },
    fr: { base_url: 'https://www.demandetesdonnees.fr/', translations: i18n_definition_fr },
    pt: { base_url: 'https://www.pedidodedados.org/', translations: i18n_definition_pt },
    es: { base_url: 'https://www.solicituddedatos.es/', translations: i18n_definition_es },
    hr: { base_url: 'https://www.osobnipodaci.org/', translations: i18n_definition_hr },
    nl: { base_url: 'https://www.gegevensaanvragen.nl/', translations: i18n_definition_nl },
} as const;

export const setupWindow = () => {
    if (!window.LOCALE) throw new CriticalException('You need to set `window.LOCALE`.');

    // The ignores are necessary because the properties are declared as readonly and we want to keep them that way.
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    window.BASE_URL = languages[window.LOCALE].base_url;

    // @ts-ignore
    window.CODE_VERSION = version;

    // @ts-ignore
    window.SUPPORTED_COUNTRIES = [];

    // @ts-ignore
    window.SUPPORTED_LANGUAGES = {};

    // @ts-ignore
    window.COUNTRIES_WITH_SUGGESTED_COMPANIES = [];

    // @ts-ignore
    window.I18N_DEFINITION = languages[window.LOCALE].translations;

    // @ts-ignore
    window.I18N_DEFINITION_REQUESTS = Object.keys(languages).reduce(
        (acc, cur) => ({ ...acc, [cur]: languages[cur as keyof typeof languages].translations.requests }),
        {}
    );

    // @ts-ignore
    window.PARAMETERS = {};
    /* eslint-enable @typescript-eslint/ban-ts-comment */
};

export { ActWidget } from '../../src/Components/ActWidget';
export { SvaFinder } from '../../src/Components/SvaFinder';

export { FlashMessage, flash } from '../../src/Components/FlashMessage';
export { useModal } from '../../src/Components/Modal';
