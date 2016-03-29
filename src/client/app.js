import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'elemental';

ReactDOM.render(
    <Table>
	<colgroup>
		<col width="50" />
		<col width="" />
		<col width="10%" />
		<col width="10%" />
	</colgroup>
	<thead>
		<tr>
			<th>
				<label>
					<input type="checkbox" />
				</label>
			</th>
			<th>User</th>
			<th>Age</th>
			<th>Gender</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<label>
					<input type="checkbox" />
				</label>
			</td>
			<td>
				<a href="javascript:;">Hanna Villarreal</a>
			</td>
			<td>39</td>
			<td>F</td>
		</tr>
	</tbody>
</Table>, document.getElementById( "wrapper" )
);
