'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e1145ff30be9d635cdad344036e8b64c",
"index.html": "845399a21718833492a8521465a757a6",
"/": "845399a21718833492a8521465a757a6",
"main.dart.js": "7ecdbc4d04d301a0394d53c93182742e",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "b733e28ed3f9671e4bb33e2653031821",
"icons/Icon-192.png": "df217f7cfa2d9e279c8a76986ab1d92a",
"icons/Icon-maskable-192.png": "df217f7cfa2d9e279c8a76986ab1d92a",
"icons/Icon-maskable-512.png": "c577b3073be92ed9d7e53cb8f2e7e003",
"icons/Icon-512.png": "c577b3073be92ed9d7e53cb8f2e7e003",
"manifest.json": "5d582d965f478f2bc42d55a2f86ac3be",
"assets/AssetManifest.json": "2b72b431baafe4453e0a97e341ce1e07",
"assets/NOTICES": "ccf9ba4f5f112eec4298db8a22ede30a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/database/skills-class.tsv": "c84641e638a556073e5380c15b13785a",
"assets/assets/database/skills-personal.tsv": "cff8c2ac38181763b50d0a4474b0831d",
"assets/assets/database/characters.tsv": "83d825de09be73386a11533ba9a7c2d5",
"assets/assets/database/classes.tsv": "99314fcef36bc205c0ca8e223814f45a",
"assets/assets/database/skills.tsv": "255c5d07218979b1040de96f9a60b041",
"assets/assets/images/loading_dark.png": "f64212a3abef9a0cf327b9f5fda8b648",
"assets/assets/images/feedb_logo.png": "7d065fe06292a7c71d864d0ca2ccc801",
"assets/assets/images/weaknesses/feweakness_cavalry.png": "2b0c0b7329dc9e3449c6a8f0965afd97",
"assets/assets/images/weaknesses/feweakness_dragon.png": "44ffbb62e1968edf9f8562618e6f60f5",
"assets/assets/images/weaknesses/feweakness_armor.png": "cbb55370263d39782daf0bcc59b2b85c",
"assets/assets/images/weaknesses/feweakness_flying.png": "1bdfc9b79ba1147f7fafa99de93be527",
"assets/assets/images/weaknesses/feweakness_darkspirit.png": "06196659b8f11e4ad5e22ee9c5eaf281",
"assets/assets/images/logo_dark.png": "fec283066361cc295186814a70f604b9",
"assets/assets/images/sprites/fesprite_rosado.png": "e761c3c849a40178bd79c00c190495f1",
"assets/assets/images/sprites/fesprite_pandreo.png": "98c292a16874f1be1b482f198781558c",
"assets/assets/images/sprites/fesprite_merrin.png": "2a1b247d5785737922d82e0a80cc7198",
"assets/assets/images/sprites/fesprite_louis.png": "a4398302df61775fe2214ecd12b602ff",
"assets/assets/images/sprites/fesprite_alearf.png": "82fcecd5530c6a9c33df37d7529c7085",
"assets/assets/images/sprites/fesprite_amber.png": "e422fffb726380dd6fed78458b9836d8",
"assets/assets/images/sprites/fesprite_chloe.png": "e0fae200a22930a13504f3552f43c72f",
"assets/assets/images/sprites/fesprite_vander.png": "78d6f725c7ae3b17ab8df25a4bd65767",
"assets/assets/images/sprites/fesprite_celine.png": "8d1aabe1898760c34533576a5389a8a7",
"assets/assets/images/sprites/fesprite_fogado.png": "8bd0710832d3931454d4b747775d8f49",
"assets/assets/images/sprites/fesprite_saphir.png": "82b04f2f5fe3975a964936145a4043bb",
"assets/assets/images/sprites/fesprite_ivy.png": "ec089f6d5b73b25bda45f29801c38db3",
"assets/assets/images/sprites/fesprite_lapis.png": "2c8eedb791458ec0073bdc882f695301",
"assets/assets/images/sprites/fesprite_yunaka.png": "2a251f921867d3b5a0ab7b7229aa4538",
"assets/assets/images/sprites/fesprite_citrinne.png": "c2252108b09806270a3ff0a0f7b628c9",
"assets/assets/images/sprites/fesprite_zelkov.png": "b1e3b226389bbfbae4f7aaa6041cddca",
"assets/assets/images/sprites/fesprite_goldmary.png": "30bad438889a0267c83f86af322980b4",
"assets/assets/images/sprites/fesprite_kagetsu.png": "ae8381e00912421d39514c3dd88e39da",
"assets/assets/images/sprites/fesprite_lindon.png": "775ea15531f14fb1238a17b05f95f16e",
"assets/assets/images/sprites/fesprite_etie.png": "83785276e6c8fb67d978b61c4f74fedb",
"assets/assets/images/sprites/fesprite_bunet.png": "f52a7772a8f46492edc2c3f1fcdb1012",
"assets/assets/images/sprites/fesprite_veyle.png": "c6c1b881d40d6e882b3721fba057e116",
"assets/assets/images/sprites/fesprite_alfred.png": "2f012a0e71e87b8386161b94840bea9a",
"assets/assets/images/sprites/fesprite_alcryst.png": "dab2a53d1fe9b0ccd58b35d5555e9b91",
"assets/assets/images/sprites/fesprite_jean.png": "c2a1f070d93e79127b18f4f0f52067a1",
"assets/assets/images/sprites/fesprite_hortensia.png": "70fcbe589a2eaa631c6c9e4c6598c4cc",
"assets/assets/images/sprites/fesprite_framme.png": "c7d3c664759e6084a60e7b10867b6ecb",
"assets/assets/images/sprites/fesprite_seadall.png": "fcc1a462ba97ad839fd5f8023fc84f26",
"assets/assets/images/sprites/fesprite_alearm.png": "2b903e01784b72dc125e17b2b450dafb",
"assets/assets/images/sprites/fesprite_clanne.png": "9340b51511122fabc0457d948233cb37",
"assets/assets/images/sprites/fesprite_boucheron.png": "549d3684a9bcfc0cef6b597aa0d3576d",
"assets/assets/images/sprites/fesprite_diamant.png": "888b65149e65bc7fbc0a653fd5c6bfee",
"assets/assets/images/sprites/fesprite_timerra.png": "0f4b467804cca0cb6fb0246f3ed93a51",
"assets/assets/images/sprites/fesprite_anna.png": "dff65f8ed3c5123cc9097b7d3f9f2d47",
"assets/assets/images/sprites/fesprite_panette.png": "066bc67a5a478e236e5a69b10bce55da",
"assets/assets/images/sprites/fesprite_mauvier.png": "e308247c30dd7863024ea8b249125c47",
"assets/assets/images/sprites/fesprite_jade.png": "b395282df0bbb337fa94eb318ded960b",
"assets/assets/images/skills/feskill_get_behind_me.png": "bc91360e62be01191acbbefc3a78519e",
"assets/assets/images/skills/feskill_alabaster_duty.png": "5fef3ffbf78fee0083e8ca7e544f0745",
"assets/assets/images/skills/feskill_blinding_flash.png": "fd521596b8ced4d2bc92eb8370a7c6fb",
"assets/assets/images/skills/feskill_luna.png": "2653f0e6eb17dccd7fcdfda0a9dfcca4",
"assets/assets/images/skills/feskill_sword_agility_5.png": "0021a95c55c1166a2f6300e937f7f913",
"assets/assets/images/skills/feskill_sword_agility_4.png": "20f57350515bf1d5d6093f9e94ccde01",
"assets/assets/images/skills/feskill_self_healing.png": "2ee9ccc00b0d1e1e17ff05967883fa95",
"assets/assets/images/skills/feskill_avoid_p25.png": "9fad3e69dcf9573b248c835d0304d338",
"assets/assets/images/skills/feskill_swap.png": "115f513453a40631e06fb9157c52c9c2",
"assets/assets/images/skills/feskill_fairy_tale_folk.png": "89aea2516a673f3df30c87877ab4824d",
"assets/assets/images/skills/feskill_self_improver.png": "90c5cfd8cde7bbe8f27d1f1bd9d8ad46",
"assets/assets/images/skills/feskill_avoid_p30.png": "66bba6d9e27861be105ab27a6c5bc8ee",
"assets/assets/images/skills/feskill_avoid_p20.png": "7427b5b1dd938094624486aa5590ac1a",
"assets/assets/images/skills/feskill_sword_agility_3.png": "b538322d626e831b0fa42539b023dc0b",
"assets/assets/images/skills/feskill_sword_agility_2.png": "866f651fa44d570da767e5441623f60a",
"assets/assets/images/skills/feskill_divinely_inspiring.png": "30346f4e55450313a3882435ddbc6137",
"assets/assets/images/skills/feskill_curious_dance.png": "69391e1a22f4a84d875b56ca483cc8ea",
"assets/assets/images/skills/feskill_energized.png": "93644e194ae5dda53d0ff34936124df3",
"assets/assets/images/skills/feskill_sword_agility_1.png": "7dd88ad6f5fc9de68b17a990f5931ad5",
"assets/assets/images/skills/feskill_crimson_cheer.png": "afa11373e50f51c4e79d1e6bd7938adc",
"assets/assets/images/skills/feskill_single_minded.png": "33064cde7458fb1fe171a90b996cf1e6",
"assets/assets/images/skills/feskill_aspiring_hero.png": "58f4c708d850d6cd79ba68e7bb10b40b",
"assets/assets/images/skills/feskill_racket_of_solm.png": "86568d0d8588073efeefc7f28c16e053",
"assets/assets/images/skills/feskill_smashp.png": "bbe180b519076580e73133ccaf359895",
"assets/assets/images/skills/feskill_contemplative.png": "d1a1347670f887f1a8d8e05d6ac237a7",
"assets/assets/images/skills/feskill_generosity.png": "1decb498008386c810ce70cd53845b8f",
"assets/assets/images/skills/feskill_fell_spirit.png": "0f7439ac0ba797a9c64c2f0b0f382ee8",
"assets/assets/images/skills/feskill_blood_fury.png": "35ecb60f7807bae937761d99ebb75d92",
"assets/assets/images/skills/feskill_hobble.png": "5dc03b851b865e201c355fac21115800",
"assets/assets/images/skills/feskill_world_tree.png": "68bf2747df7df04bd413958a0d1fa6e9",
"assets/assets/images/skills/feskill_share_spoils.png": "462d2e775ff845474298e00652635216",
"assets/assets/images/skills/feskill_divine_spirit.png": "6122c1ae85eec63bd102c6c48e98a837",
"assets/assets/images/skills/feskill_special_dance.png": "184a00b145811471c75b4e08ce9d0a56",
"assets/assets/images/skills/feskill_unyieldingp.png": "89acd27cfb3d9c685825185a5a0b7b79",
"assets/assets/images/skills/feskill_expertise.png": "47de77eca2301706a379baef7bb3d4de",
"assets/assets/images/skills/feskill_knightly_escort.png": "dc051a689a6deefdf2d8dad7b718b1ac",
"assets/assets/images/skills/feskill_divine_speed.png": "dfbaac6093da9caf511409b2fc8058de",
"assets/assets/images/skills/feskill_pivot.png": "4adb9c6d6fda11ff3cbeb92f8e5bfa3e",
"assets/assets/images/skills/feskill_pass.png": "f1a2b4cad161dee3df3f93dfd996f738",
"assets/assets/images/skills/feskill_break_defenses.png": "b5b81ef3c8c9e5410bc9611b6aa77c77",
"assets/assets/images/skills/feskill_unyielding.png": "ae9937c7012eee419a07d6a1bf7969ea",
"assets/assets/images/skills/feskill_unyieldingpp.png": "07eb0b05a1f5acd58679db7c33ae87b2",
"assets/assets/images/skills/feskill_verdant_faith.png": "07f638cf63e10c6dbf4e08ff898ab68c",
"assets/assets/images/skills/feskill_pincer_attack.png": "a98491a47f085b07024f82e6228a5053",
"assets/assets/images/skills/feskill_soulblade.png": "65a7e87f8962a07c72f1d0afcf2d650d",
"assets/assets/images/skills/feskill_big_personality.png": "23a75fa45947ce7286f00b8e59806b80",
"assets/assets/images/skills/feskill_spell_harmony.png": "1517443f299523c9363104779c960ed4",
"assets/assets/images/skills/feskill_merciless.png": "d9099217b175062167049747c2da3f8a",
"assets/assets/images/skills/feskill_ignis.png": "7522dde2192e5db9a18c2aafcfc48f2e",
"assets/assets/images/skills/feskill_reforge.png": "eb43fbd9baa74ed5dde27814b0ac5722",
"assets/assets/images/skills/feskill_weapon_insight.png": "e84a4b153902f57361c9bf7c31f41f0f",
"assets/assets/images/skills/feskill_golden_lotus.png": "e3196e49f3e1885aa4f90e73599fd513",
"assets/assets/images/skills/feskill_perceptivep.png": "0e5a3935cad009bb1de4b1541e7e1f28",
"assets/assets/images/skills/feskill_not_quite.png": "9be1fd62d50229c82753061e0beb5542",
"assets/assets/images/skills/feskill_party_animal.png": "f391e4345584e7605ae37a6fce2f69e3",
"assets/assets/images/skills/feskill_make_a_killing.png": "4b74cf25b670c22f99f42b9b67056292",
"assets/assets/images/skills/feskill_seconds.png": "82628dae78d09efc970afa0e059ba8e5",
"assets/assets/images/skills/feskill_fair_fight.png": "04f0f2418c448ab99bcdb5c3d8f1ed6a",
"assets/assets/images/skills/feskill_perceptive.png": "38e79d20c47f2a3fa8cc2e01138512a2",
"assets/assets/images/skills/feskill_no_distractions.png": "319e72ca409a8e4a07c6cf7326786b0b",
"assets/assets/images/skills/feskill_sol.png": "00fe6a845eb05b21f6da658fffd9566e",
"assets/assets/images/skills/feskill_back_at_you.png": "17a688f3644309f9a9d12f6afa1c498b",
"assets/assets/images/skills/feskill_fell_protection.png": "ded332c1b8d642ac7d56049668f191e3",
"assets/assets/images/skills/feskill_clear_the_way.png": "e061b5781baf3c94fb8a6f372eef0326",
"assets/assets/images/skills/feskill_air_raid.png": "8c26bdf8fb2d6321bdc1375a14822af9",
"assets/assets/images/skills/feskill_chaos_style.png": "4af6079e5c8cb100828014f8510fa075",
"assets/assets/images/skills/feskill_stunning_smile.png": "7ebc61cf5e90f40a753f9a6b5f6f105a",
"assets/assets/images/skills/feskill_disarming_sigh.png": "9a79ac2ba2bfb79e2c545f506703c46c",
"assets/assets/images/skills/feskill_careful_aim.png": "06ebc802092933a3edccf87c38b5d3e9",
"assets/assets/images/skills/feskill_diffuse_healer.png": "3c7967f3e0d211e5eb1b19b67a4b9769",
"assets/assets/images/skills/feskill_avoid_p10.png": "d728d453cd493d67ae406d8541c4d8a0",
"assets/assets/images/skills/feskill_moved_to_tears.png": "5c9988e6ee3583246fff3e9e211b7fea",
"assets/assets/images/skills/feskill_brave_assist.png": "8d80c06e5a81685295bb4ad02ce331d3",
"assets/assets/images/skills/feskill_trained_to_kill.png": "b4717d5f6351d3c536b43dae048b6e52",
"assets/assets/images/skills/feskill_charmer.png": "397318d20fba9513f713fcd6b82900a1",
"assets/assets/images/skills/feskill_not__quite_.png": "9be1fd62d50229c82753061e0beb5542",
"assets/assets/images/skills/feskill_avoid_p15.png": "34631525e6067d9403949d94cef251ee",
"assets/assets/images/skills/feskill_allied_defense.png": "0c0879b85dc9c44f2543703a7155f7af",
"assets/assets/images/skills/feskill_sandstorm.png": "48410787f7fa31fe1e21699f8e356605",
"assets/assets/images/skills/feskill_admiration.png": "da782b4c1bcf3eef39a88e7e68bbaa66",
"assets/assets/images/skills/feskill_will_to_win.png": "4fbd7eedf1d9baa0ac497b665c4b45a4",
"assets/assets/images/skills/feskill_run_through.png": "9864be6ebcbfee4c7cfa0996c1c9b208",
"assets/assets/images/skills/feskill_grasping_void.png": "82fe11684441495e0c5c229eac096fd0",
"assets/assets/images/skills/feskill_gentle_flower.png": "00793a18369452179a3128bc04f56cbd",
"assets/assets/images/skills/feskill_lodestar_rush.png": "346c411216ff92703f857f1a83ccc74b",
"assets/assets/images/skills/feskill_meditation.png": "14b4ebc4371592795e55c67de1c38d14",
"assets/assets/images/logo_light.png": "ea6c6ab7226d2f726d99648a23674fd9",
"assets/assets/images/items/master_seal.png": "b570f22569388c8b71d49146d4997f06",
"assets/assets/images/items/second_seal.png": "92174d89fdcaac36f888d90f0129f3e2",
"assets/assets/images/characters/fechar_ivy.png": "5cf0df3d933a9cd0159bc1cc058d11dd",
"assets/assets/images/characters/fechar_seadall.png": "ccf9917b1bce3c867d9ddcb93acd6d0f",
"assets/assets/images/characters/fechar_jean.png": "ebd7f714bd94e760a18b9ba89a757f4b",
"assets/assets/images/characters/fechar_celine.png": "c19e9059df14bc88e77ec5bc8dba7341",
"assets/assets/images/characters/fechar_fogado.png": "7520d03eda7465f3e23a1d9b40963d4d",
"assets/assets/images/characters/fechar_lapis.png": "48b1a2edc92bd09ed382e08152d89f1c",
"assets/assets/images/characters/fechar_vander.png": "d45818de910461ab30bf5919746916eb",
"assets/assets/images/characters/fechar_mauvier.png": "7551281273566bd2b1a7027112a4584e",
"assets/assets/images/characters/fechar_alearf.png": "02b52172318c7acb86c06869cfaeb388",
"assets/assets/images/characters/fechar_panette.png": "5ce8693d6a149d7b3d09b91d8600e1ee",
"assets/assets/images/characters/fechar_etie.png": "bbf4e5c2cf71df44569de727c08b253e",
"assets/assets/images/characters/fechar_timerra.png": "0c304de0404559851172ffc183bafea9",
"assets/assets/images/characters/fechar_merrin.png": "948a6417cadf19912a8a6bfc0b47dcd0",
"assets/assets/images/characters/fechar_diamant.png": "a4b03e76e32f87b3ce822cd4ed2a0212",
"assets/assets/images/characters/fechar_rosado.png": "c6aef5ecf129075f50f4121ee272cbe0",
"assets/assets/images/characters/fechar_louis.png": "82e83b923fcca5e541f1ee71cbb63968",
"assets/assets/images/characters/fechar_amber.png": "99cc14f3eb1e47b0d936ca5d4106701f",
"assets/assets/images/characters/fechar_lindon.png": "1b4e72e397f0b8c6263a3c3ba46d5e9f",
"assets/assets/images/characters/fechar_jade.png": "6a1e8914b68b8dcb2d9a54fbcb898d38",
"assets/assets/images/characters/fechar_anna.png": "33358b82dde971bf13d5bb2a6fbc3aa3",
"assets/assets/images/characters/fechar_zelkov.png": "b2b190576b953d5ae636d6344b7f40a2",
"assets/assets/images/characters/fechar_yunaka.png": "ca4606665429107f5482862ceae58613",
"assets/assets/images/characters/fechar_alcryst.png": "a3b768e0d6b8669410cb13764fc405dd",
"assets/assets/images/characters/fechar_saphir.png": "5b03d7d0a66d0cb258968b8183e91b6c",
"assets/assets/images/characters/fechar_chloe.png": "2e6c9aded231f781f5e81ee254e2917b",
"assets/assets/images/characters/fechar_hortensia.png": "b22ac6fd0fa303e98279cb7e8ef50963",
"assets/assets/images/characters/fechar_alfred.png": "c2a0305fd4186d3f2b6e5ff4058fb9c0",
"assets/assets/images/characters/fechar_goldmary.png": "bff826d9b5e62802b798c70ded0fae12",
"assets/assets/images/characters/fechar_citrinne.png": "b4e28519143d273a81d2c8b78425a7f4",
"assets/assets/images/characters/fechar_kagetsu.png": "9f31e4e9613446ce25850c5ab0644157",
"assets/assets/images/characters/fechar_bunet.png": "16cb5c089ec3d35eb58e756d75b2d592",
"assets/assets/images/characters/fechar_pandreo.png": "cbb433b1c0cf7c23f6662346c49c7a37",
"assets/assets/images/characters/fechar_clanne.png": "633a1d1be22ec99ef75a3530e1d6a561",
"assets/assets/images/characters/fechar_boucheron.png": "0d1cc20bc554eec00b096eae375582c9",
"assets/assets/images/characters/fechar_veyle.png": "16bcd4c0e2495375d90ceb1010f78d63",
"assets/assets/images/characters/fechar_alearm.png": "8fe1e3aabb8f13df814b9e54b6dd5358",
"assets/assets/images/characters/fechar_framme.png": "b346a04665148d462084d22c0242cace",
"assets/assets/images/proficiencies/feproficiency_tome.png": "fc18289f5cfd590ab02bf364023a1269",
"assets/assets/images/proficiencies/feproficiency_sword.png": "279e653a648e3ff3aa7f0f5500e60234",
"assets/assets/images/proficiencies/feproficiency_bow.png": "8cb0aa820daa5129b4d4dee9eeb4e56e",
"assets/assets/images/proficiencies/feproficiency_staff.png": "8ff64ca503218361d42f2b0cb3c60667",
"assets/assets/images/proficiencies/feproficiency_dagger.png": "29e3435bafd3612f2ca54154c978ed4e",
"assets/assets/images/proficiencies/feproficiency_arts.png": "d474f03ce89e13ba3b9e3ed90d2e9f73",
"assets/assets/images/proficiencies/feproficiency_lance.png": "35d4d7d263abf8117a78ff2f4407bbbb",
"assets/assets/images/proficiencies/feproficiency_axe.png": "36307a97a1b19df9b9868f2e6de1447c",
"assets/assets/changelog.txt": "e7d429b23a94847976a7d1b286341608",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
