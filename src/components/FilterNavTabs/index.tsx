import React, { useCallback } from 'react'
import type { ReactElement, Dispatch, SetStateAction } from 'react'
import type { FilterType } from '../../App/App'


interface FilterNavTabProps {
    currentFilterName: FilterType
    filterName: FilterType
    onFilterChange: (filter: FilterType) => void
}

const FilterNavTab = React.memo((props: FilterNavTabProps): ReactElement => {
    const { currentFilterName, filterName, onFilterChange } = props


    const getNavLinkClass = (): string => {
        return `${'nav-link'} ${currentFilterName === filterName ? 'active' : ''}`;
    };
    
    const onFilterChangeHandler = useCallback((): void => {
        onFilterChange(filterName)
    }, [])

    return (
        <li className="nav-item" role="presentation">
            <a
                onClick={onFilterChangeHandler}
                className={getNavLinkClass()} id="ex1-tab-1" data-mdb-tab-init
                href={`#{filterName}`}
                role="tab"
                aria-controls="ex1-tabs-1" aria-selected="true">{filterName}</a>
        </li>
    )
})


interface FilterNavTabsProps {
    onFilterChange: Dispatch<SetStateAction<FilterType>>
    currentFilterName: FilterType
}


const FILTERS: FilterType[] = ['all', 'active', 'completed']

export const FilterNavTabs = (props: FilterNavTabsProps): ReactElement => {
    const {currentFilterName, onFilterChange} = props

    return (
        <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
            {FILTERS.map(filterName => {
                    return (
                        <FilterNavTab
                            key={filterName}
                            filterName={filterName}
                            currentFilterName={currentFilterName}
                            onFilterChange={onFilterChange} />
                    )
                },
            )}
        </ul>

    )
}