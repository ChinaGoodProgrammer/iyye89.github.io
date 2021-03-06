
MissileMania.Preloader = function (game) 
{

};


function goA10(){
	window.open("http://www.6m5m.com","_blank");
}

MissileMania.Preloader.prototype = 
{
	SetupAndDrawLoadingBar: function()
	{
		this.preloadBackground = this.game.add.image(this.game.camera.width / 2, this.game.camera.height / 2, 'loading_background');
		this.preloadBackground.anchor.setTo(0.5 ,0.5);

		if(!MissileMania.isHD) this.preloadBackground.scale.setTo(0.5, 0.5);
		this.preloadBar = this.game.add.image(this.game.camera.width / 2 - GetXPos(285, this.game), this.game.camera.height / 2 + GetYPos(240, this.game), 'loading_bar');
		this.preloadBar.anchor.setTo(0, 0.5);

		if(!MissileMania.isHD) this.preloadBar.scale.setTo(0.5, 0.5);
		

		this.load.setPreloadSprite(this.preloadBar);
	},

	shutdown: function()
	{
		this.preloadBackground.destroy();
		this.preloadBackground = null;
		this.preloadBar.destroy();
		this.preloadBar = null;

		this.game.cache.removeImage('loading_background');
		this.game.cache.removeImage('loading_bar');
	},

	preload: function () 
	{
		this.SetupAndDrawLoadingBar();

		this.game.load.audio('EngineAudio', ['bin/audio/RocketNoise.mp3']);	
		this.game.load.audio('CoinCollect', ['bin/audio/coin.mp3']);
		this.game.load.audio('LargeExplosion', ['bin/audio/explosion.mp3']);
		this.game.load.audio('SmallExplosion', ['bin/audio/small_explosion_01.mp3']);
		this.game.load.audio('GameMusic', ['bin/audio/GameMusic.mp3']);
		this.game.load.audio('Wrench', ['bin/audio/Wrench.mp3']);
		this.game.load.audio('ButtonClick', ['bin/audio/ButtonClick.mp3']);
		this.game.load.audio('MenuMusic', ['bin/audio/MenuMusic.mp3']);
		//LOAD ALL GAME ASSETS HERE (apart from loading screen assets...Do those in boot!)	

		this.LoadBranding();
		
		//this.LoadUpgradeScreen();
		this.LoadGameScreen();
		//this.LoadMainMenuScreen();
		this.LoadWaves();	
		this.LoadAtlases();
	},

	LoadBranding: function()
	{

		if(MissileMania.isHD)
		{
			var image = MissileMania.SpilAPI.Branding.getLogo({"width": 202, "height": 50});
		}else
		{
			var image = MissileMania.SpilAPI.Branding.getLogo({"width": 101, "height": 25});
		}

		var moreGamesLink = MissileMania.SpilAPI.Branding.getLink("more_games");

		MissileMania.moreGamesLink = {};
		MissileMania.brandingSplash = {};
		MissileMania.brandingSplash.image = image.image;	


		if(MissileMania.SpilAPI.IS_STANDALONE){
			MissileMania.moreGamesLink.action = goA10;
			MissileMania.brandingSplash.action = goA10;
		}else{
			MissileMania.moreGamesLink.action = moreGamesLink.action;
			MissileMania.brandingSplash.action = image.action;		
		}

		if(MissileMania.brandingSplash.image) this.game.load.image('a10_splash', MissileMania.brandingSplash.image);
	},

	LoadAtlases: function()
	{	
		this.game.load.atlas('rocketParts', 'bin/images/' + MissileMania.deviceType + 'parts_atlas.png', 'bin/json/AtlasData/' + MissileMania.deviceType + 'parts_json.json', null, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        this.game.load.atlas('menuAtlas', 'bin/images/' + MissileMania.deviceType + 'menu_atlas.png', 'bin/json/AtlasData/' + MissileMania.deviceType + 'menu_json.json', null, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        this.game.load.atlas('upgradeAtlas', 'bin/images/' + MissileMania.deviceType + 'upgrade_atlas.png', 'bin/json/AtlasData/' + MissileMania.deviceType + 'upgrade_json.json', null, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        this.game.load.atlas('gameAtlas', 'bin/images/' + MissileMania.deviceType + 'game_atlas.png', 'bin/json/AtlasData/' + MissileMania.deviceType + 'game_json.json', null, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

		this.game.load.bitmapFont('GreenFont', 'bin/fonts/Green.png', 'bin/fonts/Green.xml');

		this.game.load.spritesheet('thrust_animation', 'bin/images/Exhaust_Sml_Spritesheet.png', 64, 128);
		this.game.load.spritesheet('numberTicker', 'bin/images/Money_Flip_Animation.png', 38, 60);
		this.game.load.image('sky', 'bin/images/newSky.png');
		this.game.load.image('sky_fog', 'bin/images/Fog.png');
		this.game.load.image('sky_top_gradient', 'bin/images/sky_top_gradient.png');
		this.game.load.image('sky_top_colour', 'bin/images/sky_top_colour.png');
		this.game.load.image('sky_top_line', 'bin/images/sky_top_line.png');
		this.game.load.image('pause_background.png', 'bin/images/pause_background.png');

		
		//Islands
		this.game.load.text('islandData01', 'bin/json/Islands/island_01.json');
		this.game.load.text('islandData02', 'bin/json/Islands/island_02.json');
		this.game.load.text('islandData03', 'bin/json/Islands/island_03.json');
		this.game.load.text('islandData04', 'bin/json/Islands/island_04.json');
		this.game.load.text('islandData05', 'bin/json/Islands/island_05.json');
		this.game.load.text('islandData06', 'bin/json/Islands/island_06.json');
		this.game.load.text('islandData07', 'bin/json/Islands/island_07.json');
		this.game.load.text('islandData08', 'bin/json/Islands/island_08.json');
		this.game.load.text('islandData09', 'bin/json/Islands/island_09.json');
		this.game.load.text('islandData10', 'bin/json/Islands/island_10.json');
		this.game.load.text('islandData11', 'bin/json/Islands/island_11.json');
		this.game.load.text('islandData12', 'bin/json/Islands/island_12.json');
		this.game.load.text('islandData13', 'bin/json/Islands/island_13.json');
		this.game.load.text('islandData14', 'bin/json/Islands/island_14.json');
		this.game.load.text('islandData15', 'bin/json/Islands/island_15.json');
		this.game.load.text('islandData16', 'bin/json/Islands/island_16.json');
		this.game.load.text('islandData17', 'bin/json/Islands/island_17.json');

		//Clouds
		this.game.load.text('cloudData01', 'bin/json/Clouds/cloud_01.json');
		this.game.load.text('cloudData02', 'bin/json/Clouds/cloud_02.json');
		this.game.load.text('cloudData03', 'bin/json/Clouds/cloud_03.json');
		this.game.load.text('cloudData04', 'bin/json/Clouds/cloud_04.json');

		//Achievements
		this.game.load.text('achievements', 'bin/json/Achievements/AchievementData.json');
	},

	LoadWaves: function() 
	{
		this.game.load.text('wave_00_01', 'bin/json/Waves/0/wave_01.json');
		this.game.load.text('wave_00_02', 'bin/json/Waves/0/wave_02.json');
		this.game.load.text('wave_00_03', 'bin/json/Waves/0/wave_03.json');
		this.game.load.text('wave_00_04', 'bin/json/Waves/0/wave_04.json');
		this.game.load.text('wave_00_05', 'bin/json/Waves/0/wave_05.json');
		this.game.load.text('wave_00_06', 'bin/json/Waves/0/wave_06.json');
		this.game.load.text('wave_00_07', 'bin/json/Waves/0/wave_07.json');
		this.game.load.text('wave_00_08', 'bin/json/Waves/0/wave_08.json');

		this.game.load.text('wave_01_01', 'bin/json/Waves/1/wave_01.json');
		this.game.load.text('wave_01_02', 'bin/json/Waves/1/wave_02.json');
		this.game.load.text('wave_01_03', 'bin/json/Waves/1/wave_03.json');
		this.game.load.text('wave_01_04', 'bin/json/Waves/1/wave_04.json');
		this.game.load.text('wave_01_05', 'bin/json/Waves/1/wave_05.json');
		this.game.load.text('wave_01_06', 'bin/json/Waves/1/wave_06.json');
		this.game.load.text('wave_01_07', 'bin/json/Waves/1/wave_07.json');
		this.game.load.text('wave_01_08', 'bin/json/Waves/1/wave_08.json');
		this.game.load.text('wave_01_09', 'bin/json/Waves/1/wave_09.json');

		this.game.load.text('wave_02_01', 'bin/json/Waves/2/wave_01.json');
		this.game.load.text('wave_02_02', 'bin/json/Waves/2/wave_02.json');
		this.game.load.text('wave_02_03', 'bin/json/Waves/2/wave_03.json');
		this.game.load.text('wave_02_04', 'bin/json/Waves/2/wave_04.json');
		this.game.load.text('wave_02_05', 'bin/json/Waves/2/wave_05.json');
		this.game.load.text('wave_02_06', 'bin/json/Waves/2/wave_06.json');
		this.game.load.text('wave_02_07', 'bin/json/Waves/2/wave_07.json');
		this.game.load.text('wave_02_08', 'bin/json/Waves/2/wave_08.json');

		this.game.load.text('wave_03_01', 'bin/json/Waves/3/wave_01.json');
		this.game.load.text('wave_03_02', 'bin/json/Waves/3/wave_02.json');
		this.game.load.text('wave_03_03', 'bin/json/Waves/3/wave_03.json');
		this.game.load.text('wave_03_04', 'bin/json/Waves/3/wave_04.json');
		this.game.load.text('wave_03_05', 'bin/json/Waves/3/wave_05.json');
		this.game.load.text('wave_03_06', 'bin/json/Waves/3/wave_06.json');
		this.game.load.text('wave_03_07', 'bin/json/Waves/3/wave_07.json');

		this.game.load.text('wave_04_01', 'bin/json/Waves/4/wave_01.json');
		this.game.load.text('wave_04_02', 'bin/json/Waves/4/wave_02.json');
		this.game.load.text('wave_04_03', 'bin/json/Waves/4/wave_03.json');
		this.game.load.text('wave_04_04', 'bin/json/Waves/4/wave_04.json');
		this.game.load.text('wave_04_05', 'bin/json/Waves/4/wave_05.json');
		this.game.load.text('wave_04_06', 'bin/json/Waves/4/wave_06.json');
		this.game.load.text('wave_04_07', 'bin/json/Waves/4/wave_07.json');

		this.game.load.text('wave_05_01', 'bin/json/Waves/5/wave_01.json');
		this.game.load.text('wave_05_02', 'bin/json/Waves/5/wave_02.json');
		this.game.load.text('wave_05_03', 'bin/json/Waves/5/wave_03.json');
		this.game.load.text('wave_05_04', 'bin/json/Waves/5/wave_04.json');
		this.game.load.text('wave_05_05', 'bin/json/Waves/5/wave_05.json');

		this.game.load.text('wave_06_01', 'bin/json/Waves/6/wave_01.json');
		this.game.load.text('wave_06_02', 'bin/json/Waves/6/wave_02.json');
		this.game.load.text('wave_06_03', 'bin/json/Waves/6/wave_03.json');
		this.game.load.text('wave_06_04', 'bin/json/Waves/6/wave_04.json');
		this.game.load.text('wave_06_05', 'bin/json/Waves/6/wave_05.json');
	},

	LoadGameScreen: function()
	{
		this.game.load.image('warning_straight', 'bin/images/HUD/sam_throb_straight.png');
		this.game.load.image('warning_edge', 'bin/images/HUD/sam_throb_corner.png');
		this.game.load.image('explosion_circle', 'bin/images/Effects/explosion_circle.png');
		this.game.load.image('transparent', 'bin/images/Bunker_3x3.png');
	},

	LoadUpgradeScreen: function()
	{
	},

	LoadMainMenuScreen: function()
	{
	},
	
	create: function () 
	{
		this.preloadBar.cropEnabled = false;	
	},

	update: function ()
	{
		if(this.cache.isSoundDecoded('EngineAudio') && this.cache.isSoundDecoded('Wrench') && this.cache.isSoundDecoded('CoinCollect') && 
			this.cache.isSoundDecoded('LargeExplosion') && this.cache.isSoundDecoded('SmallExplosion') && this.cache.isSoundDecoded('GameMusic') &&
			this.cache.isSoundDecoded('ButtonClick') && this.cache.isSoundDecoded('MenuMusic'))
		{
			this.game.state.start('Splash');				
		}
	}
};
