document.write(`
<div>
	<h1>WELCOME TO INTERNET RADIO DEMO</h1>
	<hr width="100%" size="4" color="436ab7" />
	<table>
		<!-- MAC ADDRESS -->
		<tr>
			<form method="post" action="updatemac.htm">
				<table style="padding-left: 0px; color:blue;">
					<tr><td><b>Stack Version:</b></td><td>&nbsp;</td><td>~version~</td></tr>
					<tr><td><b>Build Date:</b></td><td>&nbsp;</td><td>~builddate~</td></tr>
					<tr><td><b>MAC Address:</b></td><td>&nbsp;</td>
						<td><input name="txtMAC" id="txtMAC" type="text" value="~config_mac~"/></td>
						<td><input name="btnSaveMAC" id="btnSaveMAC" type="submit" value="Save" /></td> 
						<td><span style="color:red;" id="MacAddressInvalidWarning"></span></td>	
				</table>				
			</form>
		</tr>

		<tr>
			<!-- VOLUME AJUSTMENT -->
			<form method="get" action="index.htm">
				<td><img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/media-pict-volume.png" alt="HTML5 Icon" style="width:20px;height:20px;"></td>
				<td>&nbsp;</td>
				<td valign="center"><b>Volume:</b></td>
				<td>&nbsp;</td>
				<td><span id="volumeIndicator">Loading...</span></td>
				<td>/10</td>
				<td><input name="volume" type="range" value="5" min="0" max="10" id="volumeSlider"></td>
				<input name="btnVolSet" type="submit" value="Submit" id="btnVolSet" style="display: none;">
			</form>
		</tr>
		<tr>
			<!-- BASE AJUSTMENT -->
			<form method="get" action="index.htm">
				<td><img src="https://cdn0.iconfinder.com/data/icons/linear-square-v2/100/adjust-512.png" alt="HTML5 Icon" style="width:20px;height:20px;"></td>
				<td>&nbsp;</td>
				<td><b>Bass:</b>
				</td><td>&nbsp;</td>
				<td><span id="baseIndicator">Loading...</span> </td>
				<td>/10</td>

					<td><input name="base" type="range" value="5" min="0" max="10" id="baseSlider"></td>
					<td><input name="btnBaseSet" type="submit" value="Submit" id="btnBaseSet" style="display: none;"></td>
			</form>
			<form method="get" action="index.htm">
				<td><img src="./Station.jpg" alt="HTML5 Icon" style="width:20px;height:20px;"></td>
				<td>&nbsp;</td>
				<td><b>Station</b></td>
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
			</form>
		</tr>

		<table style="padding-left: 10px;">
		<!--
		<tr><td><b>Current Station Information:</b></td>
		<tr><td>~CurrentStationName~</td></tr>
		<tr><td>~CurrentStationURL~</td></tr>
		<tr><td>~CurrentSong~</td></tr>
		-->
		</table>
		<hr width="100%" size="4" color="CD5C5C" />
	</table>
</div>
<script src="https://wadeenghoiwa.github.io/script.js"></script>

`);
