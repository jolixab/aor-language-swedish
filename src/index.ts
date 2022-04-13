import { TranslationMessages } from 'ra-core';

const swedishMessages: TranslationMessages = {
    ra: {
        action: {
            add: 'Lägg till',
            add_filter: 'Lägg till filter',
            back: 'Gå tillbaka',
            bulk_actions: '1 objekt valt |||| %{smart_count} objekt valda',
            cancel: 'Avbryt',
            clear_input_value: 'Rensa värde',
            clone: 'Klona',
            close: 'Stäng',
            close_menu: 'Stäng meny',
            confirm: 'Bekräfta',
            create: 'Skapa',
            create_item: 'Skapa objekt',
            delete: 'Radera',
            edit: 'Redigera',
            expand: 'Expandera',
            export: 'Exportera',
            list: 'Lista',
            move_down: 'Flytta upp',
            move_up: 'Flytta ner',
            open: 'Öppna',
            open_menu: 'Öppna meny',
            refresh: 'Ladda om',
            remove: 'Ta bort',
            remove_filter: 'Ta bort filter',
            save: 'Spara',
            search: 'Sök',
            select_all: 'Välj alla',
            select_row: 'Välj rad',
            show: 'Visa',
            sort: 'Sortera',
            toggle_theme: 'Byt tema',
            undo: 'Ångra',
            unselect: 'Välj bort',
            update: 'Uppdatera',
        },
        auth: {
            auth_check_error: 'Logga in för att fortsätta',
            logout: 'Logga ut',
            password: 'Lösenord',
            sign_in: 'Logga in',
            sign_in_error: 'Inloggning misslyckades, försök gärna igen',
            user_menu: 'Profil',
            username: 'Användarnamn'
        },
        boolean: {
            false: 'Nej',
            null: ' ',
            true: 'Ja'
        },
        input: {
            file: {
                upload_several: 'Drag och släpp filer för att ladda upp, eller klicka för att välja fil.',
                upload_single: 'Drag och släpp en fil för att ladda upp, eller klicka för att välja fil.'
            },
            image: {
                upload_several: 'Drag och släpp bildfiler för att ladda upp, eller klicka för att välja bildfil.',
                upload_single: 'Drag och släpp en bildfil för att ladda upp, eller klicka för att välja bildfil.'
            },
            password: {
                toggle_hidden: 'Visa lösenord',
                toggle_visible: 'Göm lösenord'
            },
            references: {
                all_missing: 'Hittade inte referensdata.',
                many_missing: 'Minst en av den associerade referensen verkar inte längre finnas tillgänglig.',
                single_missing: 'De associerade referenserna verkar inte längre finnas tillgängliga.'
            }
        },
        message: {
            about: 'Om',
            are_you_sure: 'Är du säker?',
            bulk_delete_content: 'Är du säker på att du vill radera denna %{name}? |||| Är du säker på att du vill radera dessa %{smart_count} objekt?',
            bulk_delete_title: 'Radera %{name} |||| Radera %{smart_count} %{name}',
            bulk_update_content: 'Är du säker på att du vill ändra denna %{name}? |||| Är du säker på att du vill ändra dessa %{smart_count} objekt?',
            bulk_update_title: 'Ändra %{name} |||| Ändra %{smart_count} %{name}',
            delete_content: 'Är du säker på att du vill radera detta objekt?',
            delete_title: 'Radera %{name} #%{id}',
            details: 'Detaljer',
            error: "Ett klientfel inträffade och din förfrågan kunde inte slutföras.",
            invalid_form: 'Den angivna datan har fel form. Var god kontrollera datan.',
            loading: 'Sidan laddas, var god vänta',
            no: 'Nej',
            not_found: 'Du har antingen skrivit en felaktig URL, eller följt en dålig länk.',
            unsaved_changes: 'Några av dina ändringar sparades inte. Är du säker på att du vill kasta dem?',
            yes: 'Ja'
        },
        navigation: {
            current_page: 'Page %{page}',
            first: 'Gå till första sidan',
            next: 'Nästa',
            no_more_results: 'Sidnumret %{page} är utanför spannet. Försök med tidigare sida.',
            no_results: 'Inga resultat hittades',
            last: 'Gå till sista sidan',
            page: 'Gå till sida %{page}',
            page_out_from_begin: 'Kan inte besöka sida före första sidan',
            page_out_from_end: 'Kan inte besöka sida efter sista sidan',
            page_out_of_boundaries: 'Sidnummer %{page} utanför spannet',
            page_range_info: '%{offsetBegin}-%{offsetEnd} av %{total}',
            page_rows_per_page: 'Rader per sida:',
            partial_page_range_info: '%{offsetBegin}-%{offsetEnd} av fler än %{offsetEnd}',
            previous: 'Föregående',
            skip_nav: 'Hoppa till innehåll',
        },
        notification: {
            bad_item: 'Felaktigt objekt.',
            canceled: 'Åtgärd avbruten',
            created: 'Objekt skapat',
            data_provider_error: 'dataProvider-fel. Se konsolen för detaljer.',
            deleted: 'Objekt raderat |||| %{smart_count} objekt raderade',
            http_error: 'Kommunikationsfel med servern',
            i18n_error: 'Kan inte ladda översättningar för valt språk',
            item_doesnt_exist: 'Objektet hittas inte',
            logged_out: 'Din session har gått ut, vänligen återanslut.',
            not_authorized: 'Du har inte behörighet att komma åt detta',
            updated: 'Objekt uppdaterat |||| %{smart_count} objekt uppdaterade'
        },
        page: {
            create: 'Skapa %{name}',
            dashboard: 'Överblick',
            edit: '%{name} #%{id}',
            empty: '%{name} finns inte',
            error: 'Något gick snett',
            invite: 'Vill du lägga till en?',
            list: 'Lista över %{name}',
            loading: 'Laddar',
            not_found: 'Hittades inte',
            show: '%{name} #%{id}'
        },
        saved_queries: {
            help: 'Filtrera listan och spara denna sökning till senare',
            label: 'Sparade sökningar',
            new_dialog_title: 'Spara den aktuella sökningen som',
            new_label: 'Spara den aktuella sökningen...',
            remove_dialog_title: 'Radera sparad sökning?',
            remove_label: 'Radera sparad sökning',
            remove_label_with_name: 'Radera sökningen "%{name}"',
            remove_message: 'Är du säker på att du vill ta bort denna sparade sökning?',
            query_name: 'Sökningens namn'
        },
        sort: {
            ASC: 'stigande',
            DESC: 'fallande',
            sort_by: 'Sortera %{field} %{order}'
        },
        validation: {
            email: 'Måste vara en giltig e-postadress',
            maxLength: 'Måste vara max %{max} tecken',
            maxValue: 'Måste vara max %{max}',
            minLength: 'Måste vara minst %{min} tecken',
            minValue: 'Måste vara minst %{min}',
            number: 'Måste vara ett nummer',
            oneOf: 'Måste vara en av: %{options}',
            regex: 'Måste matcha ett specifikt format (regexp): %{pattern}',
            required: 'Obligatorisk'
        }
    }
};

export default swedishMessages;