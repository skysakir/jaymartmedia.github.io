// import './App.css';
import { useState } from 'react';
import "./App.css"
import { backpackCraftables, smallCraftables, CraftableItem, mediumCraftables, largeCraftables } from './crafting';
import { Grid } from './Grid';

export type FilterTypes = "name" | "resource" | "tag" | "hide non-matching";

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [enabledFilters, setEnabledFilters] = useState<FilterTypes[]>(['name', 'resource', 'tag']);
  const grids: CraftableItem[][][] = [backpackCraftables, smallCraftables, mediumCraftables, largeCraftables];

  function addFilter(filterType: FilterTypes) {
    setEnabledFilters(cur => [...cur, filterType]);
  }

  function removeFilter(filterType: FilterTypes) {
    setEnabledFilters(cur => cur.filter(e => e !== filterType));
  }

  return (
    <>
      <div style={{
        padding: '1em',
        background: 'var(--backgroundPrimary)',
        color: 'var(--textPrimary)',
        font: 'var(--font)'
      }}>
        <div
            style={{
              fontSize: '3rem'
            }}
        >
          <input style={{
            fontSize: '3rem'
          }} value={searchTerm} onChange={(e) => {
            setSearchTerm(e.target.value)
          }} />
          <FilterCheckbox
            filterType="name"
            addFilter={addFilter}
            removeFilter={removeFilter}
          ></FilterCheckbox>
          <FilterCheckbox
            filterType="resource"
            addFilter={addFilter}
            removeFilter={removeFilter}
          ></FilterCheckbox>
          <FilterCheckbox
            filterType="tag"
            addFilter={addFilter}
            removeFilter={removeFilter}
          ></FilterCheckbox>
          <FilterCheckbox
            filterType="hide non-matching"
            addFilter={addFilter}
            removeFilter={removeFilter}
            defaultValue={false}
          ></FilterCheckbox>
        </div>
        <div>
          {grids.map((gridItems, idx) => (
            <Grid
              gridType={mapGridNumToString(idx)}
              searchTerm={searchTerm}
              enabledFilters={enabledFilters}
              items={gridItems}
            />
          ))}
        </div>
      </div>

    </>
  )
}

function FilterCheckbox(props: {
  filterType: FilterTypes;
  addFilter: (filterType: FilterTypes) => void;
  removeFilter: (filterType: FilterTypes) => void;
  defaultValue?: boolean;
}) {
  return (
    <label>
      <input
        type="checkbox"
        // use default value if provided, otherwise enable by default
        defaultChecked={props.defaultValue !== undefined ? props.defaultValue : true}
        onChange={(e => {
          const newValue = e.target.checked;
          if (newValue) {
            props.addFilter(props.filterType);
          } else {
            props.removeFilter(props.filterType);
          }
        })}
        style={{
          width: "2rem",
          height: "2rem",
          marginLeft: "1rem",
          marginRight: "1rem"
        }}/>
      Filter on {props.filterType}
    </label>
  )
}

export type GridTypes = 'Backpack' | 'Small' | 'Medium' | 'Large';

function mapGridNumToString(num: number): GridTypes {
  if (num === 0) return 'Backpack';
  if (num === 1) return 'Small';
  if (num === 2) return 'Medium';
  if (num === 3) return 'Large';
}
