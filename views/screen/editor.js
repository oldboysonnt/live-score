const editorPage = 
`
<div>
<br>
<br>
<br>
<div class="" id="js-round">
    <table class="table">
    <thead class="thead-dark">
    <tr>
        <th colspan="7">Vòng đấu <input placeholder="Vòng đấu" id="round"/>/38</th>
    </tr>
    </thead>
    <tbody id="js-matchRound">
        <tr>
            <td><input placeholder="Day" id="round"/></td>
            <td  style="text-align: right !important">
            <input placeholder="Home" id="round"/>
            </td>
            <td><input placeholder="Home points" id="round"/></td>
            <td> - </td>
            <td><input placeholder="Away points" id="round"/></td>
            <td  style="text-align: left !important">
                <input placeholder="Away" id="round"/>
            </td>
            <td><input placeholder="Status" id="round"/></td>
        </tr>
        <tr>
            <td><input placeholder="Day" id="round"/></td>
            <td  style="text-align: right !important">
            <input placeholder="Home" id="round"/>
            </td>
            <td><input placeholder="Home points" id="round"/></td>
            <td> - </td>
            <td><input placeholder="Away points" id="round"/></td>
            <td  style="text-align: left !important">
                <input placeholder="Away" id="round"/>
            </td>
            <td><input placeholder="Status" id="round"/></td>
        </tr>
        <tr>
            <td><input placeholder="Day" id="round"/></td>
            <td  style="text-align: right !important">
            <input placeholder="Home" id="round"/>
            </td>
            <td><input placeholder="Home points" id="round"/></td>
            <td> - </td>
            <td><input placeholder="Away points" id="round"/></td>
            <td  style="text-align: left !important">
                <input placeholder="Away" id="round"/>
            </td>
            <td><input placeholder="Status" id="round"/></td>
        </tr>
        <tr>
            <td><input placeholder="Day" id="round"/></td>
            <td  style="text-align: right !important">
            <input placeholder="Home" id="round"/>
            </td>
            <td><input placeholder="Home points" id="round"/></td>
            <td> - </td>
            <td><input placeholder="Away points" id="round"/></td>
            <td  style="text-align: left !important">
                <input placeholder="Away" id="round"/>
            </td>
            <td><input placeholder="Status" id="round"/></td>
        </tr>
        <tr>
            <td><input placeholder="Day" id="round"/></td>
            <td  style="text-align: right !important">
            <input placeholder="Home" id="round"/>
            </td>
            <td><input placeholder="Home points" id="round"/></td>
            <td> - </td>
            <td><input placeholder="Away points" id="round"/></td>
            <td  style="text-align: left !important">
                <input placeholder="Away" id="round"/>
            </td>
            <td><input placeholder="Status" id="round"/></td>
        </tr>
        <tr>
            <td><input placeholder="Day" id="round"/></td>
            <td  style="text-align: right !important">
            <input placeholder="Home" id="round"/>
            </td>
            <td><input placeholder="Home points" id="round"/></td>
            <td> - </td>
            <td><input placeholder="Away points" id="round"/></td>
            <td  style="text-align: left !important">
                <input placeholder="Away" id="round"/>
            </td>
            <td><input placeholder="Status" id="round"/></td>
        </tr>
        <tr>
            <td><input placeholder="Day" id="round"/></td>
            <td  style="text-align: right !important">
            <input placeholder="Home" id="round"/>
            </td>
            <td><input placeholder="Home points" id="round"/></td>
            <td> - </td>
            <td><input placeholder="Away points" id="round"/></td>
            <td  style="text-align: left !important">
                <input placeholder="Away" id="round"/>
            </td>
            <td><input placeholder="Status" id="round"/></td>
        </tr>
        <tr>
            <td><input placeholder="Day" id="round"/></td>
            <td  style="text-align: right !important">
            <input placeholder="Home" id="round"/>
            </td>
            <td><input placeholder="Home points" id="round"/></td>
            <td> - </td>
            <td><input placeholder="Away points" id="round"/></td>
            <td  style="text-align: left !important">
                <input placeholder="Away" id="round"/>
            </td>
            <td><input placeholder="Status" id="round"/></td>
        </tr>
        <tr>
            <td><input placeholder="Day" id="round"/></td>
            <td  style="text-align: right !important">
            <input placeholder="Home" id="round"/>
            </td>
            <td><input placeholder="Home points" id="round"/></td>
            <td> - </td>
            <td><input placeholder="Away points" id="round"/></td>
            <td  style="text-align: left !important">
                <input placeholder="Away" id="round"/>
            </td>
            <td><input placeholder="Status" id="round"/></td>
        </tr>
        <tr>
            <td><input placeholder="Day" id="round"/></td>
            <td  style="text-align: right !important">
            <input placeholder="Home" id="round"/>
            </td>
            <td><input placeholder="Home points" id="round"/></td>
            <td> - </td>
            <td><input placeholder="Away points" id="round"/></td>
            <td  style="text-align: left !important">
                <input placeholder="Away" id="round"/>
            </td>
            <td><input placeholder="Status" id="round"/></td>
        </tr>
    </tbody>
    </table>
</div>
<button class="btn btn-primary" id="js-btnSave">Save</button>
</div>
`

function onload() {}

const editor = {
    content: editorPage,
    onload: onload
}

export default editor