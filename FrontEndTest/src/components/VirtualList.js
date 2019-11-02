import {
    createTableMultiSort,
    Column,
    Table,
} from 'react-virtualized';
import Characer from './character';
import Character from './character';



const headerRenderer = ({ dataKey, label }) => {
    return (
        <>
            <Character/>
        </>
    );
};

// Connect sortState to Table by way of the 'sort' prop:
<Table
    {...tableProps}
    sort={sortState.sort}
    sortBy={undefined}
    sortDirection={undefined}
>
    <Column
        {...columnProps}
        headerRenderer={headerRenderer}
    />
</Table>
