// import { FilterTypes } from "../App";
// import { CraftableItem } from "../data/crafting";

import { FilterTypes } from ".";
import { CraftableItem, ResourceItem } from "./crafting";


type Props = {
    searchTerm: string;
    items: Array<Array<CraftableItem | ResourceItem>>,
    enabledFilters: FilterTypes[];
    gridName: string;
}

export function Grid(props: Props) {
    return (
        // wrapper
        <div
        style={{
            border: ".5rem solid var(--accentPrimary)",
            borderTop: "2rem solid var(--accentPrimary)",
            borderRadius: ".5rem",
            // color: 'var(--textPrimary)',
            display: 'inline-block',
            float: 'left'
        }}>
            <h2
            style={{
                marginLeft: ".5rem",
                marginBottom: ".25rem",
                textTransform: "uppercase"
            }}
            >{props.gridName}</h2>
            {/* for each row */}
            {props.items.map(row => (
                <div style={{
                    // all: 'initial',
                    // display: 'inline-block',
                    clear: "both"
                }}>
                    {row.map(item => (
                        <Item item={item} searchTerm={props.searchTerm} enabledFilters={props.enabledFilters} />
                    ))}
                </div>
            ))}
        </div>
    )
}

type ItemProps = {
    item: CraftableItem | ResourceItem;
    searchTerm: string;
    enabledFilters: FilterTypes[];
}
function Item(props: ItemProps) {
    const item = props.item;
    const highlighted = props.searchTerm.length === 0 ||
        (
            (props.enabledFilters.includes('name') &&  item.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
            || ('resources' in item && props.enabledFilters.includes('resource') && item.resources.some(resource => resource.resource.toLowerCase().includes(props.searchTerm.toLowerCase())))
            || ('planets' in item && props.enabledFilters.includes('planet') && item.planets.some(planet => planet.name.toLowerCase().includes(props.searchTerm.toLowerCase())))
            || (props.enabledFilters.includes('tag') && (item.tags && item.tags.some(tag => tag.toLowerCase().includes(props.searchTerm.toLowerCase()))))
        );

    if(props.enabledFilters.includes('hide non-matching') && !highlighted) {
        return null;
    }
    return (
        <div
            style={{
                all: 'initial',
                // background: highlighted ? "var(--accentPrimary)" : "initial",
                // background: highlighted ? "initial" : "var(--consoleBorderDark)",
                background: highlighted ? "initial" : "#aaa",
                opacity: highlighted ? "initial" : "83%",
                border: "1px solid grey",
                borderRadius: ".5rem",
                color: 'var(--textPrimary)',
                display: "inline-block",
                padding: ".5rem",
                margin: ".5rem",
                height: "9rem",
                width: "11rem",
                float: "left",
                font: 'var(--font)',
                fontWeight: '600',
                textTransform: "uppercase"
            }}
        >
            <h3
            style={{
                marginTop: '.5rem'
            }}>{item.name}</h3>
            <span>
                {
                    'resources' in item && item.resources.map(resource => (
                            `${resource.count} ${resource.resource}`
                    )).join(", ")
                }
                {
                    'planets' in item && item.planets.map(planet => (
                            `${planet.name} in ${planet.location}`
                    )).join(", ")
                }
            </span>
            {/* <div>{item.researchPoints}</div> */}
        </div>
    );
}