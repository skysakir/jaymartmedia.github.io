// import './App.css';
import { useState } from 'react';
import "./App.css"
import { backpackCraftables, smallCraftables, CraftableItem, mediumCraftables, largeCraftables, naturalResources, refinedResources, atmosphericResources, compositeResources, ResourceItem } from './crafting';
import { Grid } from './Grid';

export type FilterTypes = "name" | "resource" | "planet" | "tag" | "hide non-matching";

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [enabledFilters, setEnabledFilters] = useState<FilterTypes[]>(['name', 'resource', 'planet', 'tag']);
  const craftingGrids: CraftableItem[][][] = [backpackCraftables, smallCraftables, mediumCraftables, largeCraftables];
  const resourceGrids: Array<Array<Array<CraftableItem | ResourceItem>>> = [naturalResources, refinedResources, atmosphericResources, compositeResources];

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
              fontSize: '3rem',
              position: 'sticky',
              top: "0px",
              background: "var(--backgroundPrimary)",
              borderBottom: "2px solid var(--accentPrimary)",
              paddingBottom: "1rem",
              marginBottom: "1rem"
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
            filterType="planet"
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
        <div
          style={{
            clear: 'both'
          }}
        >
          <h2>Craftables</h2>
          {craftingGrids.map((gridItems, idx) => (
            <Grid
              gridName={mapCraftingGridNumToName(idx)}
              searchTerm={searchTerm}
              enabledFilters={enabledFilters}
              items={gridItems}
            />
          ))}
        </div>
        <div
          style={{
            clear: 'both'
          }}
        >
          <h2>Resources</h2>
          {resourceGrids.map((gridItems, idx) => (
            <Grid
              gridName={mapResourceGridNumToName(idx)}
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


function mapCraftingGridNumToName(num: number): string {
  if (num === 0) return 'Backpack';
  if (num === 1) return 'Small';
  if (num === 2) return 'Medium';
  if (num === 3) return 'Large';
}

function mapResourceGridNumToName(num: number): string {
  if (num === 0) return 'Natural Resources';
  if (num === 1) return 'Refined Resources';
  if (num === 2) return 'Atmospheric Resources';
  if (num === 3) return 'Composite Resources';
}
