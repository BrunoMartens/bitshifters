import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppActions  from './app.actions';
import { AppState } from '../app.types';

const initialState: AppState = {
    menuOpened: false
};

const appReducer = createReducer(
    initialState,
    on(AppActions.toggleMenu, (state)=> ({...state, menuOpened: !state.menuOpened}))
    /*on(JournalDetailPageActions.clearSelectedJournalLine, (state) => ({...state, selectedJournalLineId: undefined})),
    on(JournalDetailPageActions.selectJournalLine, (state, obj) => ({...state, selectedJournalLineId: obj.id})),
    on(JournalDetailApiActions.journalLoaded, (state, journal) => ({...state, journal}))*/
);

export function reducer(state: AppState = initialState, action: Action) {
    return appReducer(state, action);
}

export const appStateSelector = createFeatureSelector<AppState>('app');

export const selectToggleMenu = createSelector(
    appStateSelector,
    (state: AppState) => state.menuOpened    
)