// By Ng Hoi Wa @ 2021
document.write(`
		<table>
			<!-- MAC ADDRESS -->
			<tr>
				<form method="post" action="updatemac.htm">
					<table style="margin-top: 5px; margin-bottom: 10px">
						<tr>
							<td><b>MAC Address:</b></td><td>&nbsp;</td>
							<td><input name="txtMAC" id="txtMAC" type="text" value="~config_mac~"/></td>
							<td><input name="btnSaveMAC" id="btnSaveMAC" type="submit" value="Save" /></td>
							<td><span style="color:red;" id="MacAddressInvalidWarning"></span></td>
						</tr>
					</table>
				</form>
			</tr>
			<tr>
				<!-- VOLUME AJUSTMENT -->
				<form method="get" action="index.htm">
					<table>
						<tr>
							<td><img src="img/volume.png" alt="HTML5 Icon" style="width:20px;height:20px;"></td>
							<td>&nbsp;</td>
							<td valign="center" style="width:71px"><b>Volume:</b></td>
							<td>&nbsp;</td>
							<td><span id="volumeIndicator">Loading...</span></td>
							<td>/10</td>
							<td><input name="volume" type="range" value="5" min="0" max="10" id="volumeSlider"></td>
							<input name="btnVolSet" type="submit" value="Submit" id="btnVolSet" style="display: none;">
						</tr>
					</table>
				</form>
			</tr>
			<tr>
				<!-- BASE AJUSTMENT -->
				<form method="get" action="index.htm">
					<table>
						<tr>
							<td><img src="img/base.webp" alt="HTML5 Icon" style="width:20px;height:20px;"></td>
							<td>&nbsp;</td>
							<td style="width:71px"><b>Bass:</b></td>
							<td>&nbsp;</td>
							<td><span id="baseIndicator">Loading...</span></td>
							<td>/10</td>
							<td><input name="base" type="range" value="5" min="0" max="10" id="baseSlider"></td>
							<td><input name="btnBaseSet" type="submit" value="Submit" id="btnBaseSet" style="display: none;"></td>
						</tr>
					</table>
				</form>
			</tr>
			<tr>
				<form method="get" action="index.htm">
					<table>
						<tr>
							<td><img src="img/station.jpg" alt="HTML5 Icon" style="width:20px;height:20px;"></td>
							<td>&nbsp;</td>
							<td style="width:80px"><b>Station: </b></td>
							<td>
							<select name="station" id="station">
								<option value="1">Radio HK</option>
								<option value="2">90.9 WBUR Talk</option>
								<option value="3">Radio808 </option>
								<option value="4">RADIOPOLO.NET - MUZYKA HITY - 80's, 90's, Disco Polo, Dance, Club</option>
								<option value="5">Rock Radio</option>
								<option value="6">Radio HipHop</option>
								<option value="7">Enterprise-Radio</option>
								<option value="8">Floyd Server</option>
								<option value="9">depth - the intersection of deep & tech house</option>
							  </select>
							</td>
							<td><input name="btnStationSet" type="submit" value="Submit" id="btnStationSet" style="display: none;"></td>
						</tr>
					</table>
				</form>
			</tr>
		</table>
		<br>
		<hr width="100%" size="4" color="CD5C5C" />

	<h3>Notes: </h3>
	<ul>
		<li><a>When you changed any attribute by pressing physical buttons, please </a><button type="button" onclick="reloadPage();">click here to Reload.</button></li>
		<li><a>Avoid adjusting too miany values at the same time, otherwise the machine may overload.</a></li>
	</ul>
`);
