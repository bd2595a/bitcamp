//NYSETAGS, LSETags, NASDAQTags
var NYSETags = [
		      
			"A Agilent Technologies",
			"AAN Aaron's Inc",
			"AAP Advance Auto Parts Inc",
			"AAT American Assets Trust",
			"AAV Advantage Oil & Gas Ltd",
			"AB Alliance Capital Management L.P.",
			"ABB Abb Ltd",
			"ABBV Abbvie Inc. Common Stock",
			"ABC Amerisourcebergen Corp",
			"ABEV Ambev S.A.",
			"ABG Asbury Automotive Group Inc",
			"ABM ABM Industries Incorporated",
			"ABR Arbor Realty Trust",
			"ABR-A Arbor Realty Trust Inc",
			"ABR-B Arbor Realty Trust Inc",
			"ABR-C Arbor Realty Trust",
			"ABT Abbott Laboratories",
			"ABW-B Associated Banc-Corp Depositary",
			"ABX Barrick Gold Corp",
			"ACC American Campus Communities Inc",
			"ACCO Acco Brands Corp",
			"ACE Ace Limited",
			"ACG Alliancebernstein Income Fund Inc",
			"ACH Aluminum Corporation of China Ltd",
			"ACI Arch Coal",
			"ACM Aecom Technology Corp",
			"ACMP Access Midstream Partners L.P.",
			"ACN Accenture Plc.",
			"ACO Amcol International Corp",
			"ACP Avenue Income Credit Strategies",
			"ACRE Ares Commercial Real Estate Cor",
			"ACT Actavis Inc",
			"ACW Accuride Corporation",
			"ADC Agree Realty Corp",
			"ADM Archer-Daniels-Midland Company",
			"ADS Alliance Data Systems Corp",
			"ADT ADT Corp",
			"ADX Adams Express Company",
			"AEB Aegon Nv",
			"AEC Associated Estates Realty Corp",
			"AED Aegon Nv",
			"AEE Ameren Corp",
			"AEF Aegon Nv",
			"AEG Aegon Nv",
			"AEH Aegon Nv",
			"AEK Aegon N.V. 8.00%",
			"AEL American Equity Investment Life",
			"AEM Agnico-Eagle Mines Limited",
			"AEO American Eagle Outfitters",
			"AEP American Electric Power Company",
			"AER Aercap Holdings N.V.",
			"AES The Aes Corp",
			"AES-C Aes TR III 6.75 Pfd",
			"AET Aetna Inc",
			"AEV Aegon Nv",
			"AF Astoria Financial Corp",
			"AF-C Astoria Financial Corp",
			"AFA American Financial Group Inc",
			"AFB Alliance National Municipal",
			"AFC Allied Capital Corp",
			"AFG American Financial Group",
			"AFL Aflac Incorporated",
			"AFM Affiliated Managers Group Inc",
			"AFQ American Financial Group",
			"AFSD Aflac Incorporated",
			"AFT Apollo Senior Floating Rate Fund Inc",
			"AFW American Financial Group Inc",
			"AG First Majestic Silver",
			"AGC Advent Claymore Convertible Securities",
			"AGCO Agco Corp",
			"AGD Alpine Global Dynamic Dividend Fund",
			"AGI Alamos Gold Inc",
			"AGM Federal Agricultural Mortgage Corp",
			"AGM-A Federal Agricultural Mortgage",
			"AGM-B Federal Ag",
			"AGM.A Federal Agricultural Mortgage Corp",
			"AGN Allergan Inc",
			"AGO Assured Guaranty Ltd",
			"AGO-B Assured Guaranty Ltd [B]",
			"AGO-E Assured Guaranty Ltd [E]",
			"AGO-F Assured Guaranty Ltd [F]",
			"AGRO Adecoagro S.A.",
			"AGU Agrium Inc",
			"AGX Argan Inc",
			"AH Accretive Health",
			"AHC A.H. Belo Corp",
			"AHH Armada Hoffler Properties Inc",
			"AHL Aspen Insurance Holdings",
			"AHL-A Aspen Insurance Pfd",
			"AHL-B Aspen Insurance Holdings Limit",
			"AHL-C Aspen Ins Pfd Inc",
			"AHP Ashford Hospitality Prime Inc.",
			"AHS Amn Healthcare Services Inc",
			"AHT Ashford Hospitality Trust Inc",
			"AHT-A Ashford Hsop TR Pfd",
			"AHT-D Ashford Hosp D Pfd",
			"AHT-E Ashford Hospitality Trust Inc 9",
			"AI Arlington Asset Investment Corp",
			"AIB Apollo Investment Corp",
			"AIF Apollo Tactical Income Fund Inc",
			"AIG American International Group",
			"AIG.W American International Group",
			"AIN Albany International Corp",
			"AIR AAR Corp",
			"AIT Applied Industrial Technologies",
			"AIV Apartment Investment and Management",
			"AIV-Z Apartment Inv. & Mgt. Co.",
			"AIW Arlington Asset Investment Cor",
			"AIY Apollo Investment Corp",
			"AIZ Assurant Inc",
			"AJG Arthur J. Gallagher & Co.",
			"AKO.A Embotell Andina Sa A",
			"AKO.B Embotell Andna Sa B",
			"AKP Alliance California Muni",
			"AKR Acadia Realty Trust",
			"AKS AK Steel Holding Corp",
			"AL Air Lease Corporation Class A C",
			"ALB Albemarle Corp",
			"ALDW Alon USA Partners LP",
			"ALE Allete Inc",
			"ALEX Alexander and Baldwin Inc",
			"ALG Alamo Group",
			"ALJ Alon USA Energy",
			"ALK Alaska Air Group",
			"ALL Allstate Corp",
			"ALL-A GMAC Capital Trust I Fixed Rate",
			"ALL-B Ally Financial Inc Fixed Rate F",
			"ALL-C The Allstate Corp",
			"ALL-D Allstate Corp",
			"ALL-E The Allstate Corporation",
			"ALLE Allegion Plc Ordinary Shares Wh",
			"ALP-N Alabama Pwr 5.2A Pfd",
			"ALP-O Alabama Pwr 5.83A Pf",
			"ALP-P Alabama Power 5.30 A",
			"ALR Alere Inc",
			"ALR-B Alere Inc. Inverness Medical In",
			"ALSN Allison Transmission Holdings",
			"ALU Alcatel Lucent",
			"ALV Autoliv Inc",
			"ALX Alexander's Inc",
			"AMBR Amber Road Inc.",
			"AMC Amc Entertainment Holdings Inc",
			"AMD Advanced Micro Devices",
			"AME Amtek Inc",
			"AMG Affiliated Managers Group",
			"AMH American Homes 4 Rent",
			"AMH-A American Homes",
			"AMID American Midstreampartners LP",
			"AMP Ameriprise Financial Services",
			"AMP-A Ameriprise Financial",
			"AMRC Ameresco Inc",
			"AMRE Amreit Inc",
			"AMT American Tower Corp",
			"AMT-A Apollo Residential Preferred",
			"AMTD TD Ameritrade Holding Corp",
			"AMTG Apollo Residential Mortgage In",
			"AMX America Movil S.A.B. De C.V.",
			"AN Autonation Inc",
			"ANF Abercrombie & Fitch Company",
			"ANFI Amira Nature Foods Ltd",
			"ANH Anworth Mortgage Asset Corp",
			"ANH-A Anworth Mtg Pfd A",
			"ANH-B Anworth 6.25 Pr S B",
			"ANN Ann Inc",
			"ANR Alpha Natural Resources",
			"ANW Aegean Marine Petroleum Network",
			"AOD Alpine Total Dynamic Dividend",
			"AOI Alliance One International",
			"AOL AOL Inc",
			"AON AON Plc",
			"AOS Smith [A.O.] Corp",
			"AP Ampco-Pittsburgh Corp",
			"APA Apache Corp",
			"APAM Artisan Partners Asset Manageme",
			"APB Asia Pacific Fund Inc",
			"APC Anadarko Petroleum Corp",
			"APD Air Products and Chemicals",
			"APF Morgan Stanley Asia Pacific Fund Inc",
			"APH Amphenol Corp",
			"APL Atlas Pipeline Partners L.P.",
			"APL-E Atlas Pipeline Partners L.P",
			"APO Apollo Global Management Llc C",
			"APU Amerigas Partners L.P.",
			"AR Antero Resources Corp",
			"ARC American Reprographics Company",
			"ARCO Arcos Dorados Holdings Inc",
			"ARCX Arc Logistics Partners LP",
			"ARDC Ares Dynamic Credit Allocation",
			"ARE Alexandria Real Estate Equities",
			"ARE-E Alexandria Real Estate Equitie",
			"ARG Airgas Inc",
			"ARH-C Arch Capital Group Ltd. 6.75% P",
			"ARI Apollo Commercial Real Estate",
			"ARI-A Apollo Commercial Real Estate",
			"ARL American Realty Investors",
			"ARMF Ares Multi-Strategy Credit Fund",
			"ARMK Aramark Holdings Corp.",
			"ARN Ares Capital Corporation 7.00%",
			"ARO Aeropostale Inc",
			"ARP Atlas Resource Partners L.P. C",
			"ARPI American Residential Properties",
			"ARR Armour Residential R",
			"ARR-A Armour Residential REIT Inc",
			"ARR-B Armour Residential REIT Inc",
			"ARSD Arabian American Development",
			"ARU Ares Capital Corp",
			"ARW Arrow Electronics",
			"ARX Aeroflex Holding",
			"ARY Ares Capital Corp",
			"ASA ASA Gold and Precious Metals",
			"ASC Ardmore Shipping Corp",
			"ASG Liberty All-Star Growth Fund",
			"ASGN On Assignment",
			"ASH Ashland Inc",
			"ASP American Strategic Income Portfolio",
			"ASR Grupo Aeroportuario Del Sureste",
			"ASX Advanced Semiconductor Engineering",
			"AT Atlantic Power Corp",
			"ATE Advantest Corporation Ads",
			"ATEN A10 Networks Inc.",
			"ATHL Athlon Energy Inc",
			"ATHM Autohome Inc.",
			"ATI Allegheny Technologies Inc",
			"ATK Alliant Techsystems Inc",
			"ATLS Atlas Energy Llc",
			"ATO Atmos Energy Corp",
			"ATR Aptargroup",
			"ATU Actuant Corp",
			"ATV Acorn International",
			"ATW Atwood Oceanics",
			"AU Anglogold Ashanti Ltd",
			"AUO Au Optronics Corp",
			"AUQ Aurico Gold Inc",
			"AUY Yamana Gold",
			"AV Aviva Plc",
			"AVA Avista Corp",
			"AVB Avalonbay Communities",
			"AVD American Vanguard Corp",
			"AVG Avg Technologies N.V.",
			"AVH Avianca Holdings S.A.",
			"AVIV Aviv REIT Inc. Common Stock",
			"AVK Advent Claymore Convertible Securities",
			"AVP Avon Products",
			"AVT Avnet Inc",
			"AVV Aviva Plc",
			"AVX Avx Corp",
			"AVY Avery Dennison Corp",
			"AWF Alliance World Dollar Fund II",
			"AWH Allied World Assurance Company",
			"AWI Armstrong World Industries Inc",
			"AWK American Water Works",
			"AWP Alpine Global Premier Propertie",
			"AWR American States Water Company",
			"AXE Anixter International Inc",
			"AXL American Axle & Manufacturing",
			"AXLL Georgia Gulf Corp",
			"AXP American Express Company",
			"AXR Amrep Corp",
			"AXS Axis Capital Holdings",
			"AXS-C Axis Capital Holdings Limited P",
			"AXS-D Axis Capital Holdings Limited",
			"AYI Acuity Brands Inc",
			"AYN Alliance New York Muni",
			"AYR Aircastle Limited",
			"AZN Astrazeneca Plc",
			"AZO Autozone",
			"AZZ Azz Inc",
			"B Barnes Group",
			"BA Boeing Company",
			"BAC Bank of America Corp",
			"BAC-D Bac Dep Share D",
			"BAC-E Bank Amer Corp Dep R",
			"BAC-I Bank Amer Corp Pfd",
			"BAC-L Bank Amer Pfd Ser L",
			"BAC-Z Bac Cap TR ViII",
			"BAC.A Bank of America Corporation Bac",
			"BAC.B Bank of America Corporation Bac",
			"BAF Blackrock Income Inv Quality Trust",
			"BAH Booz Allen Hamilton Holding Corp",
			"BAK Copene-Petroquimica Do Nordeste",
			"BALT Baltic Trading Limited",
			"BAM Brookfield Asset Management Inc",
			"BAP Credicorp Ltd",
			"BAS Basic Energy Services",
			"BAX Baxter International Inc",
			"BBD Banco Bradesco Sa",
			"BBDO Banco Bradesco S.A.",
			"BBF Blackrock Muni Income Trust",
			"BBG Bill Barrett Corp",
			"BBK Blackrock Muni Trust",
			"BBL Bhp Billiton Plc",
			"BBN Balckrock Build America Trust",
			"BBT BB&T Corp",
			"BBT-D BB&T Corp",
			"BBT-E BB&T Corp",
			"BBT-F BB&T Corp",
			"BBT-G BB&T Corporation Ser G",
			"BBVA Banco Bilbao Viscaya Argentaria S.A.",
			"BBW Build-A-Bear Workshop",
			"BBX Bankatlantic Bancorp",
			"BBY Best Buy Co.",
			"BC Brunswick Corp",
			"BCA Corpbanca",
			"BCC Boise Cascade L.L.C. Common ST",
			"BCE BCE Inc",
			"BCEI Bonanza Creek Energy Inc",
			"BCF Blackrock Real Asset Equity Trust",
			"BCH Banco De Chile",
			"BCO Brink's Company",
			"BCR C.R. Bard",
			"BCRH Blue Capital Reinsurance Holdi",
			"BCS Barclays Plc",
			"BCS-A Barclays Ads",
			"BCS-C Barclays Bank 4 Ads",
			"BCS-D Barclays Bank Plc",
			"BCS.P Barclays Bk ADR Sr 2",
			"BCX Blackrock Resources Common Shar",
			"BDC Belden Inc",
			"BDJ Blackrock Enhanced Dividend Achievers",
			"BDN Brandywine Realty Trust",
			"BDN-E Brandywine Realty Trust",
			"BDX Becton Dickinson and Company",
			"BEAM Beam Inc",
			"BEE Strategic Hotels & Resorts Inc",
			"BEE-A Strategic Hotels A",
			"BEE-B Strategic Hotel Pf B",
			"BEE-C Strategic H&R Srs C",
			"BEN Franklin Resources",
			"BEP Brookfield Renewable",
			"BERY Berry Plastics Group Inc",
			"BF.A Brown Forman Inc A",
			"BF.B Brown Forman Inc B",
			"BFAM Bright Horizons Family Solutions Inc",
			"BFK Blackrock Muni Income Trust",
			"BFO Blackrock Florida Muni 2020 Trust",
			"BFR Bbva Banco Frances S.A.",
			"BFS Saul Centers",
			"BFS-A Saul Ctrs Dep Pfd A",
			"BFS-C Saul Centers Inc",
			"BFZ Blackrock California Muni Trust",
			"BG Bunge Limited",
			"BGB Blackstone / Gso Strategic Cre",
			"BGC General Cable Corp",
			"BGCA Bgc Partners Inc",
			"BGE-B Bge Capital Trust II",
			"BGG Briggs & Stratton Corp",
			"BGH Babson Capital Global Short Du",
			"BGR Blackrock Energy and Resources Trust",
			"BGS B&G Foods Holdings",
			"BGT Blackrock Global",
			"BGX Blackstone Gso Long Short Credit Fund",
			"BGY Blackrock International",
			"BH Biglari Holdings Inc",
			"BHE Benchmark Electronics",
			"BHI Baker Hughes Inc",
			"BHK Blackrock Core Trust",
			"BHL Blackrock Defined Opportunity Trust",
			"BHLB Berkshire Hills Bancorp",
			"BHP Bhp Billiton Limited",
			"BID Sotheby's Holdings",
			"BIE Blackrock Muni Bond Investment Trust",
			"BIF Uslife Income Fund",
			"BIG Big Lots",
			"BIN Iesi-Bfc Ltd",
			"BIO Bio-Rad Laboratories",
			"BIO.B Bio Rad Labs Cl B",
			"BIOA Bioamber Inc",
			"BIP Brookfield Infrastructure Partners LP",
			"BIT Blackrock Multi-Sector Income T",
			"BITA Bitauto Holdings Limited",
			"BJZ Blackrock California Muni 2018 Trust",
			"BK Bank of New York Mellon Corp",
			"BK-C The Bank of New York Mellon Co",
			"BKD Brookdale Senior Living Inc",
			"BKE Buckle Inc",
			"BKH Black Hills Corp",
			"BKK Blackrock Muni 2020 Trust",
			"BKN Blackrock Investment Quality Municipal",
			"BKS Barnes & Noble",
			"BKT Blackrock Income Trust Inc",
			"BKU BankUnited Inc.",
			"BKW Burger King Worldwide",
			"BLH Blackrock New York Muni 2018 Trust",
			"BLK Blackrock",
			"BLL Ball Corp",
			"BLOX Infoblox Inc",
			"BLT Blount International",
			"BLW Blackrock Limited Duration Income Trust",
			"BLX Banco Latinoamericano De Comercio",
			"BMA Banco Macro S.A.",
			"BME Blackrock Health Sciences Trust",
			"BMI Badger Meter",
			"BML-G Bank America Dep G",
			"BML-H Bank America Dep H",
			"BML-I Bank America Dep I",
			"BML-J Bank America Dep J",
			"BML-L Bank America Dep L",
			"BMO Bank of Montreal",
			"BMR Biomed Realty Trust",
			"BMS Bemis Company",
			"BMY Bristol-Myers Squibb Company",
			"BNA Blackrock Income Opportunity Trust Inc",
			"BNJ Blackrock New Jersey Muni Income Trust",
			"BNNY Annie's Inc",
			"BNS Bank of Nova Scotia",
			"BNY Blackrock New York Muni Trust Inc",
			"BOE Blackrock Global",
			"BOH Bank of Hawaii Corp",
			"BOI Brookfield Mortgage Opportunit",
			"BORN China New Borun Corp",
			"BOXC Brookfield Office Properties C",
			"BP BP P.L.C.",
			"BPI Bridgepoint Education",
			"BPK Blackrock Muni 2018 Trust",
			"BPL Buckeye Partners L.P.",
			"BPO Brookfield Properties Corp",
			"BPT BP Prudhoe Bay Royalty Trust",
			"BPY Brookfield Property Partners L.",
			"BPZ Bpz Resources Inc",
			"BQH Blackrock New York Muni Trust",
			"BQR Blackrock Ecosolutions Investment Trust",
			"BR Broadridge Financial Solutions Llc",
			"BRC Brady Corp",
			"BRE BRE Properties",
			"BRFS Brf-Brasil Foods S.A.",
			"BRK.A Berkshire Hath Hld A",
			"BRK.B Berkshire Hath Hld B",
			"BRO Brown & Brown",
			"BRP Brookfield Residential Propert",
			"BRS Bristow Group Inc",
			"BRSS Global Brass and Copper Holdin",
			"BRT BRT Realty Trust",
			"BRX Brixmor Property Group Inc. Com",
			"BSAC Banco Santander-Chile Ads",
			"BSBR Banco Santander Brasil Sa",
			"BSD Blackrock Strategic Muni Trust Inc",
			"BSE Blackrock New York Muni Income Trust",
			"BSI Alon Holdings - Blue Square Israel Ltd",
			"BSL Blackstone Gso Senior Floating Rate",
			"BSMX Grupo Financiero Santander Mxi",
			"BSP American Strategic Income Portfolio II",
			"BSX Boston Scientific Corp",
			"BT Bt Group Plc",
			"BTA Blackrock Long-Term Muni Advantage Trust",
			"BTE Baytex Energy Corp",
			"BTF Boulder Total Return Fund",
			"BTH Blyth Inc",
			"BTO John Hancock Bank and Thrift Fund",
			"BTT Blackrock Municipal Target Term",
			"BTU Peabody Energy Corp",
			"BTZ Blackrock Preferred",
			"BUD Anheuser-Busch Inbev Sa",
			"BUI Blackrock Utility and Infrastr",
			"BURL Burlington Stores Inc",
			"BVN Compania Mina Buenaventura S.A.",
			"BWA Borgwarner Inc",
			"BWC Babcock & Wilcox Company",
			"BWG Legg Mason Bw Global Income Op",
			"BWP Boardwalk Pipeline Partners L.P.",
			"BWS Brown Shoe Company",
			"BX The Blackstone Group L.P.",
			"BXC Bluelinx Holdings Inc",
			"BXMT Blackstone Mortgage Trust Inc. Cl A",
			"BXP Boston Properties",
			"BXP-B Boston Properties Inc",
			"BXS Bancorpsouth Inc",
			"BYD Boyd Gaming Corp",
			"BYI Bally Technologies",
			"BYM Blackrock Muni Income Quality Trust",
			"BZH Beazer Homes USA",
			"BZT Beazer Homes USA Inc. 7.50% Tangible Equity",
			"C Citigroup Inc",
			"C-C Citigroup Inc",
			"C-E Citigroup Cp Xvii 6.35 Trup",
			"C-J Citigroup Inc",
			"C-K Citigroup Inc",
			"C-L Citigroup Inc.",
			"C-N Citigroup Capital XiII",
			"C-P Citigroup Pfd Ser Aa",
			"C-Q Citigroup Cap Vi Trups",
			"C-S Citigroup Cap Ix 6.0",
			"C.A Citigroup Inc Wrnt 'A'",
			"C.B Citigroup Inc Wrnt 'B'",
			"CAB Cabela's Inc",
			"CACI Caci International",
			"CAE Cae Inc",
			"CAF Morgan Stanley China A Share Fund Inc",
			"CAG Conagra Foods",
			"CAH Cardinal Health",
			"CAJ Canon Inc",
			"CALX Calix Inc",
			"CAM Cameron International Corp",
			"CAP Cai International",
			"CAS Castle [A.M.] & Co.",
			"CAT Caterpillar Inc",
			"CATO Cato Corp",
			"CB Chubb Corp",
			"CBA Clearbridge American Energy ML",
			"CBB Cincinnati Bell Inc",
			"CBB-B Cincinnati Bell Pr B",
			"CBD Companhia Brasileira De Distribuicao",
			"CBG CBRE Group Inc",
			"CBI Chicago Bridge & Iron Company N.V.",
			"CBK Christopher & Banks Corp",
			"CBL Cbl & Associates Properties",
			"CBL-D Cbl Pfd D",
			"CBL-E Cbl & Associates Properties I",
			"CBM Cambrex Corp",
			"CBPX Continental Building Products",
			"CBR Ciber Inc",
			"CBS CBS Corp",
			"CBS.A CBS Corp",
			"CBSO CBS Outdoor Americas Inc.",
			"CBT Cabot Corp",
			"CBU Community Bank System",
			"CBZ Cbiz Inc",
			"CCC Calgon Carbon Corp",
			"CCE Coca-Cola Enterprises",
			"CCG Campus Crest Communities",
			"CCG-A Campus Crest Communities Inc",
			"CCH Coca Cola Hellenic Bottling Co",
			"CCI Crown Castle International Corp",
			"CCI-A Crown Castle International Cor",
			"CCJ Cameco Corp",
			"CCK Crown Cork & Seal Company",
			"CCL Carnival Corp",
			"CCM Concord Medical Services",
			"CCO Clear Channel Outdoor Holdings",
			"CCSC Country Style Cooking",
			"CCU Compania Cervecerias Unidas S.A.",
			"CCV Comcast Corp",
			"CCZ Comcast Corp",
			"CDE Coeur D'Alene Mines Corp",
			"CDE.W Coeur D'Alene Mines Corporatio",
			"CDI Cdi Corp",
			"CDR Cedar Shopping Centers Inc",
			"CDR-B Cedar Realty Trust Inc",
			"CE Celanese Corp",
			"CEA China Eastern Airlines Corp Ltd",
			"CEB The Corporate Executive Board Company",
			"CEE Central Europe and Russia Fund",
			"CEL Cellcom Israel",
			"CELP Cypress Energy Partners L.P.",
			"CEM Clearbridge Energy MLP Fund Inc",
			"CEN Center Coast MLP & Infrastructure",
			"CEO Cnooc Limited",
			"CEQP Crestwood Equity Partners LP",
			"CF Cf Industries Holdings",
			"CFC-A Countrywide Cap IV",
			"CFC-B Countrywide Cap V",
			"CFI Culp Inc",
			"CFN Carefusion Corp",
			"CFR Cullen/Frost Bankers",
			"CFR-A Cullen/Frost Bankers Inc",
			"CFX Colfax Corp",
			"CGA China Green Agriculture",
			"CGG Compagnie Generale De Gephysqu",
			"CGI Celadon Group",
			"CHA China Telecom Corp Ltd",
			"CHC China Hydroelectric Corp",
			"CHD Church & Dwight Company",
			"CHE Chemed Inc",
			"CHGG Chegg Inc",
			"CHH Choice Hotels International",
			"CHK Chesapeake Energy Corp",
			"CHK-D Chesapeake En Cv Pfd",
			"CHKR Chesapeake Granite Wash Trust",
			"CHL China Mobile [Hong Kong] Ltd",
			"CHMI Cherry Hill Mortgage Investmen",
			"CHMT Chemtura Corp",
			"CHN China Fund",
			"CHS Chico's Fas",
			"CHS-A Chesapeake Lodging Trust 7.75%",
			"CHSP Chesapeake Lodging Trust",
			"CHT Chunghwa Telecom Co Ltd",
			"CHU China Unicom [Hong Kong] Ltd",
			"CI Cigna Corp",
			"CIA Citizens Inc",
			"CIB Bancolombia S.A.",
			"CIE Cobalt International Energy",
			"CIEN Ciena Corp",
			"CIF Colonial Intermediate High",
			"CIG Comp En De Mn Cemig Ads",
			"CIG.C Comp En De Mn Cemig Ads",
			"CII Blackrock Capital and Income Strategies",
			"CIM Chimera Investment Corp",
			"CIR Circor International",
			"CIS Camelot Information Systems",
			"CIT Cit Group Inc [Del]",
			"CJES C&J Energy Services Inc",
			"CKH Seacor Smit Inc",
			"CKP Checkpoint Systms",
			"CL Colgate-Palmolive Company",
			"CLB Core Laboratories N.V.",
			"CLC Clarcor Inc",
			"CLD Cloud Peak Energy Inc",
			"CLDT Chatham Lodging Trust [Reit]",
			"CLF Cliffs Natural Resources Inc",
			"CLGX Corelogic",
			"CLH Clean Harbors",
			"CLI Mack-Cali Realty Corp",
			"CLN-A Colony Financial Inc",
			"CLNY Colony Financial Inc",
			"CLR Continental Resources",
			"CLS Celestica Inc",
			"CLV Cliffs Natural Resources Inc. Dep. Pfd.",
			"CLW Clearwater Paper Corp",
			"CLX Clorox Company",
			"CM Canadian Imperial Bank of Commerce",
			"CMA Comerica Inc",
			"CMA.W Comerica Inc",
			"CMC Commercial Metals Company",
			"CMG Chipotle Mexican Grill",
			"CMI Cummins Inc",
			"CMK Colonial Intermarket Income Trust I",
			"CMLP Crestwood Midstream Partners LP",
			"CMN Cantel Medical",
			"CMO Capstead Mortgage Corp",
			"CMO-E Capstead Mortgage Corp",
			"CMP Compass Minerals Intl Inc",
			"CMRE Costamare Inc",
			"CMS Cms Energy Corp",
			"CMS-B Consumers Engry 4.50",
			"CMU Colonial Muni Income Trust",
			"CNA Cna Financial Corp",
			"CNC Centene Corp",
			"CNCO Cencosud S.A.",
			"CNHI Cnh Industrial N.V.",
			"CNI Canadian National Railway Company",
			"CNK Cinemark Holdings Inc",
			"CNL Cleco Power Llc",
			"CNO Cno Financial Group",
			"CNP Centerpoint Energy Inc",
			"CNQ Canadian Natural Resources",
			"CNS Cohn & Steers Inc",
			"CNW Con-Way Inc",
			"CNX Consol Energy Inc",
			"CO China Cord Blood Corporation.",
			"CODE Spansion Inc",
			"CODI Compass Diversified Holdings",
			"COF Capital One Financial Corp",
			"COF-P Capital One Financial Corp Pfd",
			"COF.W Capital One Financial Corp",
			"COG Cabot Oil & Gas Corp",
			"COH Coach Inc",
			"COL Rockwell Collins",
			"COO Cooper Companies",
			"COP Conocophillips",
			"COR Coresite Realty Corp",
			"COR-A Coresite Realty Corp",
			"CORR Corenergy Infrastructure Trust Inc",
			"COT Cott Corp",
			"COTY Coty Inc",
			"COUP Coupons.Com Inc",
			"COV Covidien Plc.",
			"CP Canadian Pacific Railway",
			"CPA Copa Holdings S.A.",
			"CPAC Cementos Pacasmayo S.A.A.",
			"CPB Campbell Soup Company",
			"CPE Callon Petroleum Company",
			"CPE-A Callon Petroleum Company Prefer",
			"CPF CPB Inc",
			"CPG Crescent Pt Energy",
			"CPK Chesapeake Utilities Corp",
			"CPL Cpfl Energia S.A.",
			"CPN Calpine Corp",
			"CPS Cooper Std Hldg Inc",
			"CPT Camden Property Trust",
			"CQB Chiquita Brands International",
			"CR Crane Company",
			"CRCM Care.Com Inc",
			"CRD.A Crawford Co Cl A",
			"CRD.B Crawford Co Cl B",
			"CRH CRH Plc",
			"CRI Carter's Inc",
			"CRK Comstock Resources",
			"CRL Charles River Laboratories Intl",
			"CRM Salesforce.Com Inc",
			"CRR Carbo Ceramics",
			"CRS Carpenter Technology Corp",
			"CRT Cross Timbers Royalty Trust",
			"CRY Cryolife",
			"CS Credit Suisse Group",
			"CSC Computer Sciences Corp",
			"CSE Capitalsource Inc",
			"CSG Chambers Street Properties",
			"CSH Cash America International",
			"CSI Cutwater Select Income Fund",
			"CSL Carlisle Companies Inc",
			"CSLT Castlight Health Inc.",
			"CSP American Strategic Income Portfolio III",
			"CSS Css Industries",
			"CST Cst Brands Inc. Common Stock",
			"CSTM Constellium N.V.",
			"CSU Capital Senior Living Corp",
			"CSV Carriage Services",
			"CSX CSX Corp",
			"CTB Cooper Tire & Rubber Company",
			"CTC Ifm Investments Limited",
			"CTL Centurylink",
			"CTQ Qwest Corp",
			"CTR Clearbridge Energy MLP Fund In",
			"CTS Cts Corp",
			"CTT Catchmark Timber Trust Inc.",
			"CTU Qwest Corp",
			"CTW Qwest Corp",
			"CTX Qwest Corp",
			"CTY Qwest Corp",
			"CTZ-A Citizens Funding",
			"CUB Cubic Corp",
			"CUB-A Cubesmart 7.75% Series A Cumula",
			"CUBE Cubesmart",
			"CUDA Barracuda Networks Inc",
			"CUK Carnival Plc Ads",
			"CUZ Cousins Properties Inc",
			"CUZ-B Cousins Pptys Pfd B",
			"CVA Covanta Holding Corp",
			"CVB Lehman Abs Corp",
			"CVC Cablevision Systems Corp",
			"CVD Covance Inc",
			"CVE Cenovus Energy Inc",
			"CVG Convergys Corp",
			"CVI Cvr Energy Inc",
			"CVO Cenveo Inc",
			"CVRR Cvr Refining LP",
			"CVS CVS Corp",
			"CVT Cvent Inc",
			"CVX Chevron Corp",
			"CW Curtiss-Wright Corp",
			"CWEI Clayton Williams Energy",
			"CWH Commonwealth REIT",
			"CWH-D Commonwealth REIT Pfd Conv Shs",
			"CWH-E Commonwealth REIT",
			"CWHN Commonwealth REIT",
			"CWHO Commonwealth REIT",
			"CWT California Water Service Group Holding",
			"CWZ Lehman Abs Corp",
			"CX Cemex S.A.B. De C.V. Sponsored",
			"CXE Colonial High Income Muni Trust",
			"CXH Colonial Investment Grade Muni Trust",
			"CXO Concho Resources Inc",
			"CXP Columbia Property Trust Inc",
			"CXW Corrections Corporation of America",
			"CYD China Yuchai International",
			"CYH Community Health Systems",
			"CYN City National Corp",
			"CYN-C City National Corp",
			"CYN-D City National Corporation Repr",
			"CYNI Cyan Inc. Common Stock",
			"CYS Cys Investments Inc",
			"CYS-A Cys Investments Inc",
			"CYS-B Cys Investments Inc",
			"CYT Cytec Industries Inc",
			"CZZ Cosan Limited",
			"D Dominion Resources",
			"DAC Danaos Corp",
			"DAL Delta Air Lines Inc",
			"DAN Dana Holding Corp",
			"DANG E-Commerce China Dangdang Inc",
			"DAR Darling International Inc",
			"DATA Tableau Software Inc. Class A",
			"DB Deutsche Bank Ag",
			"DBD Diebold Inc",
			"DBL Doubleline Opportunistic Credi",
			"DCA Dca Total Return Fund",
			"DCE Deutsche Bk Cap Fdg TR X",
			"DCI Donaldson Company",
			"DCM Ntt Docomo Inc",
			"DCO Ducommun Inc",
			"DCT Dct Industrial Trust Inc",
			"DCUA Dominion Resources",
			"DCUB Dominion Resources Inc. Un Series B",
			"DD E.I. Du Pont De Nemours and Company",
			"DD-A Du Pont E I 3.50 Pfd",
			"DD-B Du Pont E I 4.50 Pfd",
			"DDC Dominion Diamond Corp",
			"DDD 3D Systems Corp",
			"DDE Dover Downs Gaming & Entertainment Inc",
			"DDF Delaware Dividend & Income",
			"DDR Ddr Corp",
			"DDR-H Develprs Div Rlt Dep",
			"DDR-J Ddr Corp",
			"DDR-K Ddr Corp",
			"DDS Dillard's",
			"DDT Dillard's",
			"DE Deere & Company",
			"DEG Etablissements Delhaize Freres",
			"DEI Douglas Emmett",
			"DEL Deltic Timber Corp",
			"DEO Diageo Plc",
			"DEX Delaware Enhanced Global Dividend",
			"DF Dean Foods Company",
			"DFP Flaherty & Crumrine Dynamic",
			"DFS Discover Financial Services",
			"DFS-B Discover Financial Services",
			"DFT Dupont Fabros Technology",
			"DFT-A Dupont Fabros Technology Inc",
			"DFT-B Dupont Fabros Technology Inc",
			"DG Dollar General Corp",
			"DGI Digitalglobe Inc",
			"DGX Quest Diagnostics Inc",
			"DHF Dreyfus High Yield Strategies Fund",
			"DHG Dws High Income Opportunities Fund",
			"DHI D.R. Horton",
			"DHR Danaher Corp",
			"DHT Dht Holdings",
			"DHX Dice Holdings",
			"DIN Dineequity Inc",
			"DIS Walt Disney Company",
			"DK Delek US Holdings",
			"DKL Delek Logistics Partners LP",
			"DKS Dick's Sporting Goods Inc",
			"DKT Deutsch Bk Contingent Cap TR V",
			"DL China Distance Education Holdings",
			"DLB Dolby Laboratories",
			"DLPH Delphi Automotive Plc",
			"DLR Digital Realty Trust",
			"DLR-E Digital Realtytrust Inc",
			"DLR-F Digital Realty Trust Inc",
			"DLR-G Digital Realty Trust Inc",
			"DLR-H Digital Realty",
			"DLX Deluxe Corp",
			"DMB Dreyfus Municipal Bond Infrastr",
			"DMD Demand Media Inc",
			"DMO Western Asset Mortgage Defined Opp",
			"DNB Dun & Bradstreet Corp",
			"DNI Chartwell Dividend & Income Fund",
			"DNP Duff & Phelps Utilities Income",
			"DNR Denbury Resources",
			"DNY The Denali Fund",
			"DO Diamond Offshore Drilling",
			"DOC Physicians Realty Trust",
			"DOM Dominion Resources Black Warrior",
			"DOOR Masonite Wrldwde Hld",
			"DOV Dover Corp",
			"DOW DOW Chemical Company",
			"DPD DOW 30 Premium",
			"DPG Duff & Phelps Global Utility I",
			"DPM Dcp Midstream Partners LP",
			"DPO DOW 30 Premium",
			"DPS Dr Pepper Snapple Group Inc",
			"DPZ Domino's Pizza Inc",
			"DQ Daqq New Energy",
			"DRC Dresser-Rand Group Inc",
			"DRD Drdgold Limited",
			"DRE Duke Realty Corp",
			"DRE-J Duke Rlty Dep Pfd J",
			"DRE-K Duke Realty K",
			"DRE-L Duke Rlty Dep Sh",
			"DRH Diamondrock Hospitality Company",
			"DRI Darden Restaurants",
			"DRII Diamond Resorts International",
			"DRL Doral Financial Corp",
			"DRQ Dril-Quip",
			"DRU Dominion Resources",
			"DSL Doubleline Income Solutions Fun",
			"DSM Dreyfus Strategic Muni Bond Fund",
			"DST Dst Systems",
			"DSU Blackrock Debt Strategies Fund",
			"DSW DSW Inc",
			"DSX Diana Shipping Inc",
			"DSX-B Diana Shipping",
			"DTE Dte Energy Company",
			"DTF Duff & Phelps Utilities Tax-Free Income",
			"DTK Deutsche Bk Contingent Cap TR I",
			"DTQ Dte Energy Co.",
			"DTT Deutsche Bk Cap Fdg TR Ix Gua",
			"DTZ Dte Energy Co.",
			"DUA Deutsche Bk Cap Fdg TR ViII 6",
			"DUC Duff & Phelps Utility & Corporate Trust",
			"DUK Duke Energy Corp",
			"DUKH Duke Energy Corp",
			"DV Devry Inc",
			"DVA Davita Healthcare Partners Inc",
			"DVD Dover Downs Entertainment",
			"DVM Cohen & Steers Dividend Majors Fund",
			"DVN Devon Energy Corp",
			"DVR Cal Dive International",
			"DW Drew Industries Inc",
			"DWRE Demandware Inc",
			"DX Dynex Capital",
			"DX-A Dynex Capital Inc",
			"DX-B Dynex Capital Inc",
			"DXB Deutsche Bk Contingent Cap TR I",
			"DY Dycom Industries",
			"DYN Dynegy Inc",
			"DYN.W Dynegy Inc. Warrants",
			"E Eni S.P.A.",
			"EAA Entergy Arkansas",
			"EAB First Mortgage Bonds",
			"EAE Entergy Arkansas Inc",
			"EARN Ellington Residential Mortgage",
			"EAT Brinker International",
			"EBF Ennis Inc",
			"EBR Centrais Elc Braz Pfb B Elbras",
			"EBR.B Centrais Elc Braz Pfb B Elbras",
			"EBS Emergent Biosolutions",
			"EC Ecopetrol S.A.",
			"ECA Encana Corp",
			"ECL Ecolab Inc",
			"ECOM Channeladvisor Corp",
			"ECT Eca Marcellus Trust I",
			"ED Consolidated Edison Company of New York",
			"EDD Emerging Markets Domestic Debt Fund",
			"EDE Empire District Electric Company",
			"EDF Stone Harbor Emerging Markets",
			"EDI Stone Harbor Emerging Markets",
			"EDN Empresa Distribuidora Y Comercializadora",
			"EDR Education Realty Trust Inc",
			"EDT Entergy Texas Inc",
			"EDU New Oriental Education & Technology Group",
			"EE El Paso Electric Company",
			"EEA European Equity Fund",
			"EEP Enbridge Energy L.P.",
			"EEQ Enbridge Energy Management Llc",
			"EFC Ellington Financial Llc",
			"EFF Eaton Vance Floating-Rate Inco",
			"EFM Entergy Mississippi",
			"EFR Eaton Vance Senior Floating-Rate Fund",
			"EFT Eaton Vance Floating Rate Income Trust",
			"EFX Equifax Inc",
			"EGF Blackrock Enhanced Government Fund",
			"EGL Engility Holdings Inc. Common",
			"EGN Energen Corp",
			"EGO Eldorado Gold Corp",
			"EGP Eastgroup Properties",
			"EGY Vaalco Energy Inc",
			"EHI Western Asset Global High",
			"EIG Employers Holdings Inc",
			"EIX Edison International",
			"EJ E-House [China] Holdings",
			"EL Estee Lauder Companies",
			"ELA Entergy Louisiana Llc",
			"ELB Entergy Louisiana",
			"ELJ Entergy Louisiana Llc",
			"ELLI Ellie Mae Inc",
			"ELP Companhia Paranaense De Energia",
			"ELS Equity Lifestyle Properties",
			"ELS-C Eqty Lifestyle Properties Inc",
			"ELU Entergy Louisiana Llc First M",
			"ELX Emulex Corp",
			"ELY Callaway Golf Company",
			"EMC EMC Corp",
			"EMD Western Asset Emerging Markets Fund",
			"EME Emcor Group",
			"EMES Emerge Energy Services LP Commo",
			"EMF Templeton Emerging Markets Fund",
			"EMN Eastman Chemical Company",
			"EMO Clearbridge Energy MLP Opportu",
			"EMQ Entergy Mississippi",
			"EMR Emerson Electric Company",
			"EMZ Entergy Mississippi Inc. First",
			"ENB Enbridge Inc",
			"END Endeavor International Corp",
			"ENH Endurance Specialty Holdings Ltd",
			"ENH-A Endurance Spec Pfd",
			"ENH-B Endurance Specialty Holdings L",
			"ENI Enersis S A",
			"ENJ Entergy New Orleans Inc",
			"ENL Reed Elsevier Nv",
			"ENLC Enlink Midstream Llc",
			"ENLK Enlink Midstream Partners LP",
			"ENR Energizer Holdings",
			"ENS Enersys Inc",
			"ENV Envestnet Inc",
			"ENZ Enzo Biochem",
			"EOC Empresa Nacional De Electricidad S.A.",
			"EOD Wells Fargo Global Dividend Opportunity",
			"EOG Eog Resources",
			"EOI Eaton Vance Enhance Equity",
			"EOS Eaton Vance Enhanced Equity II",
			"EOT Eaton Vance Muni Income Trust",
			"EP-C El Paso Egy Cap I Pr",
			"EPAM Epam Systems Inc",
			"EPB El Paso Pipeline Partners LP",
			"EPD Enterprise Products Partners L.P.",
			"EPE Ep Energy Corp",
			"EPL Energy Partners",
			"EPR Entertainment Properties Trust",
			"EPR-C Entertainment Prp Pf",
			"EPR-E Entertainment Ppty P",
			"EPR-F Entertainment Properties Trust",
			"EQM Equity Midstream Partners LP",
			"EQR Equity Residential",
			"EQS Equus Total Return",
			"EQT Eqt Corp",
			"EQU Equal Energy Ltd",
			"EQY Equity One",
			"ERA Era Group Inc. Common Stock W",
			"ERF Enerplus Corp",
			"ERJ Embraer-Empresa Brasileira De Aeronautica",
			"EROS Eros International Plc",
			"ESC Emeritus Corp",
			"ESD Western Asset Emerging Markets Debt Fund Inc",
			"ESE Esco Technologies Inc",
			"ESI Itt Educational Services",
			"ESL Esterline Technologies Corp",
			"ESNT Essent Group Ltd",
			"ESRT Empire State Realty Trust Inc",
			"ESS Essex Property Trust",
			"ESS-H Essex Property Trust Inc. 7.12",
			"ESV Ensco Plc",
			"ETB Eaton Vance Tax-Managed Buy-Write",
			"ETE Energy Transfer Equity LP",
			"ETG Eaton Vance Tax-Advantaged Global Dividend",
			"ETH Ethan Allen Interiors Inc",
			"ETJ Eaton Vance Risk-Managed Diversified Equity",
			"ETM Entercom Communications Corp",
			"ETN Eaton Corp",
			"ETO Eaton Vance Tax-Advantage Global Dividend Opp",
			"ETP Energy Transfer Partners",
			"ETR Entergy Corp",
			"ETV Eaton Vance Corp",
			"ETW Eaton Vance Corp",
			"ETX Eaton Vance Municipal Income T",
			"ETY Eaton Vance Tax-Managed Diversified Equity",
			"EV Eaton Vance Corp",
			"EVC Entravision Communications Corp",
			"EVDY Everyday Health Inc.",
			"EVER Everbank Financial Corp",
			"EVF Eaton Vance Senior Income Trust",
			"EVG Eaton Vance Short Diversified",
			"EVGN Evogene Ltd Ord",
			"EVHC Envision Healthcare Holdings",
			"EVN Eaton Vance Muni Income Trust",
			"EVR Evercore Partners Inc",
			"EVT Eaton Vance Tax Advantaged Dividend",
			"EVTC Evertec Inc. Common Stock",
			"EW Edwards Lifesciences Corp",
			"EXAM Examworks Group",
			"EXAR Exar Corp",
			"EXC Exelon Corp",
			"EXD Eaton Vance Tax-Advantaged Bond",
			"EXG Eaton Vance Tax-Managed Global Diversified Equit",
			"EXH Exterran Holdings",
			"EXK Endeavour Silver Corp",
			"EXL Excel Trust",
			"EXL-B Excel Trust Inc",
			"EXP Eagle Materials Inc",
			"EXPR Express Inc",
			"EXR Extra Space Storage Inc",
			"F Ford Motor Company",
			"FAC Liberte Investors Inc",
			"FAF First American Corp",
			"FAM First Trust/Aberdeen Global Opportunity",
			"FAV Active Dividend",
			"FBC Flagstar Bancorp",
			"FBHS Fortune Brands Home & Security",
			"FBP First Bancorp",
			"FBR Fibria Celulose S.A.",
			"FBS-A First Pfd Cp IV 8.15",
			"FC Franklin Covey Company",
			"FCE.A Forest City Ent Cl A",
			"FCE.B Forest City Ent Cl B",
			"FCF First Commonwealth Financial Corp",
			"FCH Felcor Lodging Trust Inc",
			"FCH-A Felcor Lodg Pr A",
			"FCH-C Felcor Lodging Dep S",
			"FCN Fti Consulting",
			"FCT Senior Floating Rate II",
			"FCX Freeport-Mcmoran Copper & Gold",
			"FDI Fort Dearborn Income Securities",
			"FDO Family Dollar Stores",
			"FDP Fresh Del Monte Produce",
			"FDS Factset Research Systems Inc",
			"FDX Fedex Corp",
			"FE Firstenergy Corp",
			"FEI First Trust MLP and Energy Inc",
			"FENG Phoenix New Media Limited",
			"FEO First Trust/Aberdeen Emerging Opportunity Fund",
			"FET Forum Energy Technologies Inc",
			"FF Futurefuel Corp",
			"FFA First Trust Enhanced Equity Income Fund",
			"FFC Flaherty Crumrine/Claymore Preferred Securities",
			"FFG Fbl Financial Group",
			"FGB Specialty Finance and Financial Fund",
			"FGL Fidelity & Guaranty",
			"FGP Ferrellgas Partners L.P.",
			"FHN First Tennessee National Corp",
			"FHN-A First Horizon National Corpora",
			"FHY Strategic High II",
			"FI Frank's International N.V.",
			"FICO Fair Isaac and Company Inc",
			"FIF First Trust Energy Infrastruct",
			"FIG Fortress Investment Group",
			"FII Federated Investors",
			"FIO Fusion-Io Inc",
			"FIS Fidelity National Information Services",
			"FIX Comfort Systems USA",
			"FL Footlocker Inc",
			"FLC Flaherty & Crumrine/Claymore Total Return",
			"FLO Flowers Foods",
			"FLR Fluor Corp",
			"FLS Flowserve Corp",
			"FLT Fleetcor Technologies",
			"FLTX Fleetmatics Group Plc",
			"FLY Fly Leasing Limited",
			"FMC FMC Corp",
			"FMD First Marblehead Corp",
			"FMN Federated Premier Muni",
			"FMO Fiduciary/Claymore MLP Opportunity Fund",
			"FMS Fresenius Medical Care Corp",
			"FMX Fomento Economico Mexicano S.A.B. De C.V.",
			"FMY First Trust/Fidac Mortgage Income Fund",
			"FN Fabrinet",
			"FNB F.N.B. Corp",
			"FNB-E F.N.B. Corporation Representin",
			"FNF Fidelity National Financial",
			"FNF-B First Niagara Financial Group",
			"FNV Franco Nev Corp",
			"FOE Ferro Corp",
			"FOF Cohen & Steers Closed-End Opportunity Fund",
			"FOR Forestar Group Inc",
			"FPF First Trust Intermediate Durat",
			"FPL First Trust New Opportunities M",
			"FPO First Potomac Realty Trust",
			"FPO-A First Potomac Realty Trust Cumu",
			"FPT Federated Premier Intermediate Muni",
			"FR First Industrial Realty Trust",
			"FRA Blackrock Floating Rate Income Fund",
			"FRC First Republic Bank",
			"FRC-A First Republic Bank 6.70%",
			"FRC-B First Republic Bank",
			"FRC-C First Republic Bank",
			"FRC-D First Republic Bank San Francis",
			"FRC-E First Republic Bank",
			"FRF Fortegra Financial Corp",
			"FRM Furmanite Corp",
			"FRO Frontline Ltd",
			"FRT Federal Realty Investment Trust",
			"FRX Forest Laboratories",
			"FSCE Fifth Street Finance Corp",
			"FSD High Income Long Short Fund",
			"FSL Freescale Semiconductor Holdin",
			"FSM Fortuna Silver Mines",
			"FSS Federal Signal Corp",
			"FST Forest Oil Corp",
			"FT Franklin Universal Trust",
			"FTI FMC Technologies",
			"FTK Flotek Industries",
			"FTT Federated Enhanced Treasury Income",
			"FUL H. B. Fuller Company",
			"FUN Cedar Fair L.P.",
			"FUR Winthrop Realty Trust",
			"FUR-D Winthrop Realty Trust Preferred D Shares",
			"FVE Five Star Quality Care",
			"FXCM FXCM Inc",
			"G Genpact Limited",
			"GA Giant Interactive Group Inc",
			"GAB Gabelli Equity Trust",
			"GAB-D Gabelli Eq TR Pfd D",
			"GAB-G The Gabelli Equity Trust Inc",
			"GAB-H The Gabelli Eqty Trust Inc",
			"GAM General American Investors",
			"GAM-B Genl Amer Invs Pfd",
			"GAS Agl Resources",
			"GB Greatbatch",
			"GBAB Guggenheim Build America Bonds",
			"GBL Gamco Investors",
			"GBX Greenbrier Companies",
			"GCA Global Cash Access Holdings",
			"GCAP Gain Capital Holdings",
			"GCH Greater China Fund",
			"GCI Gannett Co.",
			"GCO Genesco Inc",
			"GCV Gabelli Convertible and Income Securities",
			"GCV-B Gabelli 6.00% Pfd B",
			"GD General Dynamics Corp",
			"GDF Western Asset Global Partners",
			"GDL The Gdl Fund",
			"GDL-B The Gdl Fund Series B Cumulativ",
			"GDO Western Asset Global Corporate Defined",
			"GDOT Green Dot Corp",
			"GDP Goodrich Petroleum Corp",
			"GDP-C Goodrich Petroleum Corp",
			"GDP-D Goodrich Petroleum Coproration",
			"GDV Gabelli Dividend",
			"GDV-A Gabelli Dv",
			"GDV-D Gabelli Pref D",
			"GE General Electric Company",
			"GEB General Electric Capital Corpo",
			"GEF Greif Bros. Corp",
			"GEF.B Greif Bros. Corp",
			"GEH General Electric Capital Corpo",
			"GEK General Electric Capital Corpo",
			"GEL Genesis Energy L.P.",
			"GEO Geo Group Inc",
			"GEQ Guggenheim Equal Weight Enhance",
			"GES Guess Inc",
			"GF New Germany Fund",
			"GFA Gafisa Sa",
			"GFF Griffon Corp",
			"GFI Gold Fields Ltd",
			"GFIG Gfi Group Inc",
			"GFY Western Asset Variable Rate Strategic",
			"GG Goldcorp Inc",
			"GGB Gerdau S.A.",
			"GGE Claymore Dividend & Income Fund",
			"GGG Graco Inc",
			"GGM Guggenheim Credit Allocation F",
			"GGP General Growth Properties",
			"GGP-A General Growth Properties Inc",
			"GGS Global Geophysical Services",
			"GGS-A Global Geophysical Services In",
			"GGT Gabelli Global Multi-Media Trust",
			"GGT-B Gabelli Global Multi-Media Trus",
			"GHC Graham Holdings Company",
			"GHI Global High Income Dollar Fund",
			"GHL Greenhill & Co. Inc",
			"GHY Prudential Global Short Durati",
			"GIB CGI Group",
			"GIL Gildan Activewear",
			"GIM Templeton Global",
			"GIMO Gigamon Inc",
			"GIS General Mills",
			"GJH Strats Sm Trust For United States Cellular Corp",
			"GJK Strats Sm Trust For JP Morgan Chase & Co Securit",
			"GJO Strats Sm Trust For Wal-Mart Stores Inc Securiti",
			"GJP Strats Sm Trust For Dominion Resources Inc Secur",
			"GJR Strats Sm Trust For The Procter & Gamble Co Secu",
			"GJS Strats Sm Trust For Goldman Sachs Group Securiti",
			"GJT Strats Sm Trust For Allstate Corp Securities Ser",
			"GJV Strats Sm Trust For News Corp Securities Series",
			"GLF Gulfmark Offshore",
			"GLOG Gaslog Ltd",
			"GLP Global Partners LP",
			"GLT Glatfelter",
			"GLW Corning Inc",
			"GM General Motors Company",
			"GM.A General Mtrs",
			"GM.B General Mtrs",
			"GME Gamestop Corp",
			"GMED Globus Medical Inc",
			"GMK Gruma S.A. De C.V.",
			"GMT GATX Corp",
			"GMZ Goldman Sachs MLP Income Oppor",
			"GNC GNC Holdings Inc",
			"GNE Genie Energy Ltd. Class B Commo",
			"GNE-A Genie Energy Ltd. Series",
			"GNI Great Northern Iron Ore Properties",
			"GNK Genco Shipping",
			"GNRC Generac Holdings Inc",
			"GNT Gabelli Natural Resources Gold",
			"GNW Genworth Financial Inc",
			"GOF Claymore/Guggenheim Strategic Fund",
			"GOL Gol Linhas Aereas Inteligentes S.A.",
			"GOM GMAC Llc",
			"GOV Government Properties Income Trust",
			"GPC Genuine Parts Company",
			"GPE-A Ga Pwr Co Cl A Pfd",
			"GPI Group 1 Automotive",
			"GPK Graphic Packaging Holding Company",
			"GPM Guggenheim Enhanced Equity",
			"GPN Global Payments Inc",
			"GPRK Geopark Hldgs Lmtd",
			"GPS Gap Inc",
			"GPT Gramercy Capital Corp.",
			"GPT-A Gramercy Property Trust 8.125 P",
			"GPX Gp Strategies Corp",
			"GRA W.R. Grace & Company",
			"GRAM Graa Y Montero S.A.A.",
			"GRO Agria Corp",
			"GRP.U Granite Real Estate Investment",
			"GRR Asia Tigers Fund",
			"GRT Glimcher Realty Trust",
			"GRT-G Glimcher Rlty Pfd G",
			"GRT-H Glimcher Realty Trust",
			"GRT-I Glimcher Realty Trust",
			"GRX The Gabelli Healthcare & Wellness Trust",
			"GRX-A The Gabelli Healthcare & Welln",
			"GS Goldman Sachs Group",
			"GS-A Goldman Sachs Pfd",
			"GS-B Goldman Dep Sh",
			"GS-C Goldman Dep Sh",
			"GS-D Goldman Sachs Dep Sh",
			"GS-I The Goldman Sachs Group Inc",
			"GS-J Goldman Sachs Group Inc",
			"GSF Goldman Sachs Group",
			"GSH Guangshen Railway Company",
			"GSI General Steel Holdings",
			"GSJ Goldman Sachs Group Inc. [The]",
			"GSK Glaxosmithkline Plc",
			"GSL Global Ship Lease Inc",
			"GTI Graftech International Ltd",
			"GTN Gray Television",
			"GTN.A Gray Television",
			"GTS Triple-S Management Corp",
			"GTY Getty Realty Corp",
			"GUA Gulf Power Company Series 2011A",
			"GUT Gabelli Utility Trust",
			"GUT-A Gabelli Util Pfd A",
			"GVA Granite Construction Inc",
			"GWR Genesee & Wyoming",
			"GWRE Guidewire Software Inc. Common",
			"GWRU Genesee & Wyoming",
			"GWW W.W. Grainger",
			"GXP Great Plains Energy Inc",
			"GXP-A Great Plains Energy 3.8%",
			"GXP-D Great Plains Energy 4.35%",
			"GXP-E Great Plains Energy 4.5%",
			"GY Gencorp Inc",
			"GYB Cabco Series 2004-101 Trust",
			"GYC Corporate Asset Backed Corp Cabco",
			"GZT Gazit-Globe Ltd",
			"H Hyatt Hotels Corp",
			"HAE Haemonetics Corp",
			"HAL Halliburton Company",
			"HAR Harman International Industries Inc",
			"HASI Hannon Armstrong Sustainable In",
			"HAV Helios Advantage",
			"HBI Hanesbrands Inc",
			"HBM Hudbay Minerals Inc",
			"HCA Hca Holdings Inc. Common Stock",
			"HCC Hcc Insurance Holdings",
			"HCI Homeowners Choice",
			"HCJ Homeowners Choice Inc",
			"HCLP Hi-Crush Partners LP",
			"HCN Health Care REIT",
			"HCN-I Health Care REIT Inc",
			"HCN-J Health Care REIT Inc",
			"HCP HCP Inc",
			"HD Home Depot",
			"HDB Hdfc Bank Limited",
			"HDY Hyperdynamics Corp",
			"HE Hawaiian Electric Industries",
			"HE-U Heco Cap III 6.50",
			"HEI Heico Corp",
			"HEI.A Heico Cp Cl A",
			"HELI Chc Group Ltd.",
			"HEP Holly Energy Partners L.P.",
			"HEQ John Hancock Hedged Eqty & Inc",
			"HES Hess Corp",
			"HF HFF Inc",
			"HFC Hollyfrontier Corp",
			"HGG Hhgregg Inc",
			"HGH The Hartford Financial Srvcs G",
			"HGR Hanger Orthopedic Group",
			"HGT Hugoton Royalty Trust",
			"HHC Howard Hughes Corp",
			"HHS Harte-Hanks",
			"HHY Helios High Yield Fund",
			"HI Hillenbrand Inc",
			"HIG Hartford Financial Services Group",
			"HIG.W Hartford Financial Services Group",
			"HIH Helios High Income Fund Inc",
			"HII Huntington Ingalls Industries",
			"HIL Hill International",
			"HIO Western Asset High",
			"HIVE Aerohive Networks Inc",
			"HIW Highwoods Properties",
			"HIX Western Asset High Income Fund II Inc",
			"HJJ MS S.A.C. Saturns Goldman Sachs",
			"HJN MS S.A.C. Saturns Ge Series 2002-14",
			"HJR Saturns Trust No 2005 3",
			"HJV MS S.A.C. Saturns Ge Series 2002-14",
			"HK Halcon Resources",
			"HL Hecla Mining Company",
			"HL-B Hecla Mining Pfd B",
			"HLF Herbalife Ltd",
			"HLS Healthsouth Corp",
			"HLT Hilton Worldwide Holdings Inc.",
			"HLX Helix Energy Solutions Group",
			"HMC Honda Motor Company",
			"HME Home Properties",
			"HMH Helios Multi-Sector High",
			"HMN Horace Mann Educators Corp",
			"HMY Harmony Gold Mining Co. Ltd",
			"HNI Hon Industries Inc",
			"HNP Huaneng Power Intl",
			"HNR Harvest Natural Resources Inc",
			"HNT Health Net Inc",
			"HOG Harley-Davidson Inc",
			"HON Honeywell International Inc",
			"HOS Hornbeck Offshore Services",
			"HOT Starwood Hotels & Resorts Worldwide",
			"HOV Hovnanian Enterprises Inc",
			"HP Helmerich & Payne",
			"HPF John Hancock Pfd II",
			"HPI John Hancock Preferred",
			"HPP Hudson Pacific Properties",
			"HPP-B Hudson Pacific Properties Inc",
			"HPQ Hewlett-Packard Company",
			"HPS John Hancock Preferred Income Fund III",
			"HPT Hospitality Properites Trust",
			"HPT-D Hospitality Properties Trust",
			"HPY Heartland Payment Systems",
			"HQH H&Q Healthcare Investors",
			"HQL H&Q Life Sciences Investors",
			"HR Healthcare Realty Trust Inc",
			"HRB H&R Block",
			"HRC Hill-Rom Holdings Inc",
			"HRG Harbinger Group Inc",
			"HRL Hormel Foods Corp",
			"HRS Harris Corp",
			"HSA Helios Strategic Income Fd Inc",
			"HSBC HSBC Holdings Plc",
			"HSC Harsco Corp",
			"HSEA HSBC Holdings Plc. Perpetual S",
			"HSEB HSBC Holdings Plc Perp Sub Cap",
			"HSH Hillshire Brands Company",
			"HSP Hospira Inc",
			"HST Host Marriott Financial Trust",
			"HSY Hershey Foods Corp",
			"HT Hersha Hospitality Trust",
			"HT-B Hersha Hospitality Trust",
			"HT-C Hersha Hospitality Trust",
			"HTA Healthcare Trust of America I",
			"HTD John Hancock Tax Advantaged Dividend",
			"HTF Horizon Technology Finance Cor",
			"HTGC Hercules Technology Growth Capital",
			"HTGY Hercules Technology Growth Cap",
			"HTGZ Hercules Technology Growth Capi",
			"HTH Hilltop Holdings Inc",
			"HTR Hyperion Brookfield Total Return Fund",
			"HTS Hatteras Financial Corp",
			"HTS-A Hatteras Financial Corp Cum Red",
			"HTY John Hancock Tax-Advantaged Global",
			"HTZ Hertz Global Holdings Inc",
			"HUB.A Hubbell Inc A",
			"HUB.B Hubbell Inc B",
			"HUM Humana Inc",
			"HUN Huntsman Corp",
			"HUS-D HSBC USA Cum Pfd D",
			"HUS-F HSBC USA Pfd F",
			"HUS-G HSBC Dep Sh Pfd G",
			"HUS-H HSBC USA Dep Sh H",
			"HUS-Z HSBC USA 2.8575 Pfd",
			"HVB Hudson Valley Holding Corp. Com",
			"HVT Haverty Furniture Companies",
			"HVT.A Haverty Furn Cl A SC",
			"HW Headwaters Inc",
			"HXL Hexcel Corp",
			"HXM Desarrolladora Homex",
			"HY Hyster-Yale Materials Handling",
			"HYB New America High",
			"HYF Managed High Yield Plus Fund",
			"HYI Western Asset High Yield Defined",
			"HYL Lehman Abs Corp",
			"HYT Blackrock High Yield Fund Vi Inc",
			"HZO Marinemax Inc",
			"I Intelsat S.A. Common Shares",
			"I-A Intelsat S.A.",
			"IAE ING Asia Pacific High Dividend Equity",
			"IAG Iamgold Corp",
			"IBA Industrias Bachoco S.A. De C.V.",
			"IBM International Business Machines Corp",
			"IBN Icici Bank Limited",
			"IBP Installed Building Products I",
			"ICA Empresas Ica Soc Contrladora",
			"ICB MS Income Securities",
			"ICE Intercontinentalexchange",
			"IDA Idacorp Inc",
			"IDE ING Infrastructure Industrial",
			"IDG ING Group N.V.",
			"IDT IDT Corp",
			"IEH Integrys Energy Group Inc",
			"IEX Idex Corp",
			"IFF International Flavors & Fragrances",
			"IFN India Fund",
			"IFN.W THE INDIA FUND WD",
			"IFT Imperial Holdings",
			"IGA ING Global Advantage and Premium",
			"IGD ING Global Equity Dividend and Premium",
			"IGI Western Asset Investment Grade Defined",
			"IGR ING Clarion Global Real Estate",
			"IGT International Game Technology",
			"IHC Independence Holding Company",
			"IHD ING Emerging Markets High Dividend",
			"IHG Intercontinental Hotels Group",
			"IHS IHS Inc",
			"IID ING International High Dividend Equity",
			"IIF Morgan Stanley India Investment Fund Inc",
			"IIM Invesco Insured Muni Income Trust",
			"IL Intralinks Holdings",
			"IM Ingram Micro Inc",
			"IMAX Imax Corp",
			"IMF Western Asset Inflation Fund Inc",
			"IMN Imation Corp",
			"IMPV Imperva Inc",
			"IMS Invesco Insured Muni Securities",
			"INB Cohen & Steers Global Income Builder",
			"IND ING Group N.V.",
			"INF Brookfield Global Listed Infra",
			"INFY Infosys Limited",
			"ING ING Group N.V.",
			"INGR Ingredion Inc",
			"INN Summit Hotel Properties",
			"INN-A Summit Hotel Properties Inc",
			"INN-B Summit Hotel Properties Inc",
			"INN-C Summit Hotel Properties Inc",
			"INT World Fuel Services Corp",
			"INVN Invensense Inc",
			"INXN Interxion Holding N.V.",
			"INZ ING Group N.V.",
			"IO ION Geophysical Corp",
			"IOC Interoil Corp",
			"IP International Paper Company",
			"IPG Interpublic Group of Companies",
			"IPHI Inphi Corp",
			"IPI Intrepid Potash Inc",
			"IPL-D Interstate Power and Light Co.",
			"IQI Invesco Quality Muni Income Trust",
			"IR Ingersoll-Rand Plc (Ireland)",
			"IRC Inland Real Estate Corp",
			"IRC-A Inland Real Estate Corp",
			"IRE Governor and Company of The Bank of Ireland",
			"IRE-B Investors Real Estate Trust 7.9",
			"IRET Investors Real Estate Trust",
			"IRF International Rectifier Corp",
			"IRL Irish Investment Fund",
			"IRM Iron Mountain Inc",
			"IRR ING Risk Managed Natural Resources Fund",
			"IRS Irsa Inversiones Y Representaciones S.A.",
			"ISD Prudential Short Duration High",
			"ISF ING Group N.V.",
			"ISG ING Group N.V.",
			"ISH International Shipholding Corp",
			"ISH-A International Shipholding Copr",
			"ISH-B International Shipholding Corp",
			"ISP ING Group N.V.",
			"ISS Isoftstone Holdings",
			"IT Gartner Inc",
			"ITC Itc Holdings",
			"ITG Investment Technology Group",
			"ITT Itt Industries",
			"ITUB Itau Unibanco Banco Holding Sa",
			"ITW Illinois Tool Works Inc",
			"IVC Invacare Corp",
			"IVH Ivy High Income Opportunities",
			"IVR Invesco Mortgage Capital Inc",
			"IVR-A Invesco Mortgage Capital Inc",
			"IVZ Invesco Plc",
			"IX Orix Corp Ads",
			"JAH Jarden Corp",
			"JBJ Lehman Abs Corp",
			"JBK Lehman Abs Corp",
			"JBL Jabil Circuit",
			"JBN Select Asset Inc",
			"JBO Lehman Abs Corp",
			"JBR Select Asset Inc",
			"JBT John Bean Technologies Corp",
			"JCE Nuveen Core Equity Alpha Fund",
			"JCI Johnson Controls",
			"JCP J.C. Penney Company Inc",
			"JDD Nuveen Diversified Dividend and",
			"JE Just Energy Group Inc",
			"JEC Jacobs Engineering Group Inc",
			"JEQ Japan Equity Fund",
			"JFC Jf China Region Fund",
			"JFR Nuveen Floating Rate",
			"JGG Nuveen Global Government Enhanced",
			"JGT Nuveen Multi-Currency Short-Term Government",
			"JGV Nuveen Global Value Opportunities Fund",
			"JGW Jgwpt Holdings Inc",
			"JHI John Hancock Investors Trust",
			"JHP Nuveen Quality Preferred Income Fund 3",
			"JHS John Hancock Income Securities Trust",
			"JHX James Hardie Industries Se",
			"JKS Jinkosolar Holding Company Limited",
			"JLA Nuveen Equity Premium Advantage Fund",
			"JLL Jones Lang Lasalle Inc",
			"JLS Nuveen Mortgage Opportunity Term Fund",
			"JMF Nuveen Energy MLP Total Return Fund",
			"JMI Javelin Mortgage Investment Co",
			"JMLP Nuveen All Cap Energy MLP Oppo",
			"JMP JMP Group Inc",
			"JMPB JMP Group Inc",
			"JMPC JMP Group Inc.",
			"JMT Nuven Mortgage Opportunity Term Fund 2",
			"JNJ Johnson & Johnson",
			"JNPR Juniper Networks",
			"JNS Janus Capital Group Inc",
			"JNY Jones Group",
			"JOE St. Joe Company",
			"JOF Japan Smaller Capitalization Fund Inc",
			"JONE Jones Energy Inc",
			"JOY Joy Global Inc",
			"JPC Nuveen Preferred and Convertible",
			"JPG Nuveen Equity Premium and Growth Fund",
			"JPI Nuveen Preferred and Income Term Fund",
			"JPM JP Morgan Chase & Co",
			"JPM-A JP Morgan Chase & Co.",
			"JPM-B Jpmorgan Chase & Co. 6.70%",
			"JPM-C JP Morgan Chase Capital Xxix 6.7",
			"JPM-D JP Morgan Chase & Co.",
			"JPM.W JP Morgan Chase & Co",
			"JPS Nuveen Quality Preferred 2",
			"JPW Nuveen Flexible Investment Inc",
			"JPZ Nuveen Equity Premium",
			"JQC Nuveen Preferred and Convertible 2",
			"JRI Nuveen Real Asset Income and Gr",
			"JRN Journal Communications",
			"JRO Nuveen Floating Rate Income Opportuntiy",
			"JSD Nuveen Short Duration Credit O",
			"JSN Nuveen Equity Premium Opportunity",
			"JTA Nuveen Tax-Advantaged Total Return",
			"JTD Nuveen Tax-Advantaged Dividend Growth",
			"JTP Nuveen Quality Preferred",
			"JW.A John Wiley Sons Cl A",
			"JW.B John Wiley Sons Cl B",
			"JWN Nordstrom",
			"JZC Lehman Abs Corp",
			"JZJ Lehman Abs Corp",
			"JZK Lehman Abs Corp",
			"K Kellogg Company",
			"KAI Kadant Inc",
			"KAMN Kaman Corp",
			"KAP Kcap Financial Inc",
			"KAR Kar Auction Services Inc",
			"KATE Kate Spade & Company",
			"KB KB Financial Group Inc",
			"KBH KB Home",
			"KBR KBR Inc",
			"KCC Lehman Abs Corp",
			"KCG Kcg Holdings Inc",
			"KED Kayne Anderson Energy Development Company",
			"KEF Korea Equity Fund",
			"KEG Key Energy Services",
			"KEM Kemet Corp",
			"KEP Korea Electric Power Corp",
			"KEX Kirby Corp",
			"KEY Keycorp",
			"KEY-G Keycorp Pfd Ser A",
			"KF Korea Fund",
			"KFH KKR Financial Holdings Llc",
			"KFI KKR Financial Holdings Llc",
			"KFN KKR Financial",
			"KFN.P KKR Financial Holdings Llc Pfd",
			"KFS Kingsway Financial Services",
			"KFY Korn/Ferry International",
			"KGC Kinross Gold Corp",
			"KHI Scudder High Income Trust",
			"KID Kid Brands",
			"KIM Kimco Realty Corp",
			"KIM-H Kimco Realty Corporation Deposi",
			"KIM-I Kimco Realty Corporation Deposi",
			"KIM-J Kimco Realty Corporation Class",
			"KIM-K Kimco Realty Corporation Class",
			"KING King Digital Entertainment Plc",
			"KIO KKR Income Opportunities Fund",
			"KKD Krispy Kreme Doughnuts",
			"KKR KKR & Co. L.P.",
			"KMB Kimberly-Clark Corp",
			"KMF Kayne Anderson Midstream Energy Fund",
			"KMG KMG Chemicals",
			"KMI Kinder Morgan",
			"KMI.W Kinder Morgan Inc. W/I",
			"KMM Scudder Multi-Market Income Trust",
			"KMP Kinder Morgan Energy Partners L.P.",
			"KMPA Kemper Corporation 7.375% Subor",
			"KMPR Unitrin",
			"KMR Kinder Morgan Management Llc",
			"KMT Kennametal Inc",
			"KMX Carmax Inc",
			"KN Knowles Corporation Common Stoc",
			"KND Kindred Healthcare",
			"KNL Knoll Inc",
			"KNM Konami Corp",
			"KNOP Knot Offshore Partners LP Commo",
			"KNX Knight Transportation",
			"KO Coca-Cola Company",
			"KODK Eastman Kodak",
			"KOF Coca Cola Femsa S.A.B. De C.V.",
			"KOG Kodiak Oil",
			"KOP Koppers Holdings Inc",
			"KORS Michael Kors Holdings Limited",
			"KOS Kosmos Energy Ltd",
			"KR Kroger Company",
			"KRA Kraton Performance Polymers Inc",
			"KRC Kilroy Realty Corp",
			"KRC-G Kilroy Realty Corp",
			"KRC-H Kilroy Realty Corp",
			"KRG Kite Realty Group Trust",
			"KRG-A Kite Realty Group Trust",
			"KRO Kronos Worldwide Inc",
			"KS Kapstone Paper and Packaging Corp",
			"KSM Scudder Strategic Municiple Income Trust",
			"KSS Kohl's Corp",
			"KST Scudder Strategic Income Trust",
			"KSU Kansas City Southern",
			"KSU.P Kansas Cty Sthn 4%",
			"KT Korea Telecom Corp",
			"KTF Scudder Municiple Income Trust",
			"KTH Lehman Abs Corp",
			"KTN Lehman Abs Corp",
			"KTP Lehman Abs Corp",
			"KW Kennedy-Wilson Holdings Inc",
			"KWK Quicksilver Resources Inc",
			"KWN Kennedy-Wilson Holdings Inc",
			"KWR Quaker Chemical Corp",
			"KYE Kayne Anderson Energy Total Return Fund",
			"KYN Kayne Anderson MLP Investment Company",
			"KYN-E Kayne Anderson MLP Investment",
			"KYN-F Kayne Anderson MLP Investment",
			"KYN-G Kayne Anderson MLP Investment",
			"KYO Kyocera Corp",
			"L Loews Corp",
			"LAD Lithia Motors",
			"LADR Ladder Capital Corp",
			"LAS Lentuo International Inc",
			"LAZ Lazard Ltd",
			"LB L Brands Inc",
			"LBF Scudder Global High",
			"LCI Lannett Co Inc",
			"LCM Advent/Claymore Enhanced Growth &",
			"LDF Latin American Discovery Fund",
			"LDK Ldk Solar Co. Ltd",
			"LDL Lydall Inc",
			"LDOS Leidos Holdings Inc",
			"LDP Cohen & Steers Ltd Duration Preferred Income Fun",
			"LDR Landauer Inc",
			"LEA Lear Corp",
			"LEAF Springleaf Holdings Inc",
			"LEE Lee Enterprises Inc",
			"LEG Leggett & Platt Inc",
			"LEN Lennar Corp",
			"LEN.B Lennar Corp",
			"LEO Dreyfus Strategic Municipals",
			"LF Leapfrog Enterprises Inc",
			"LFC China Life Insurance Company Limited",
			"LFL Latam Airlines Group Sa",
			"LG Laclede Group",
			"LGF Lions Gate Entertainment Corp",
			"LGI Lazard Global Total Return and",
			"LGP Lehigh Gas Partners LP",
			"LH Laboratory Corporation of America Holdings",
			"LHO Lasalle Hotel Properties",
			"LHO-G Lasalle Hotel Proper",
			"LHO-H Lasalle Hotl 8.375 B",
			"LHO-I Lasalle Hotel Properties",
			"LII Lennox International",
			"LIN Lin Media Llc",
			"LITB Lightinthebox Holding Co. Ltd",
			"LL Lumber Liquidators Holdings Inc",
			"LLL L-3 Communications Holdings",
			"LLY Eli Lilly and Company",
			"LM Legg Mason Inc",
			"LMT Lockheed Martin Corp",
			"LNC Lincoln National Corp",
			"LNC.W Lincoln National Corp",
			"LND Brasilagro Brazi ADR",
			"LNKD Linkedin",
			"LNN Lindsay Corp",
			"LNT Alliant Energy Corp",
			"LO Lorillard Inc",
			"LOCK Lifelock Inc",
			"LOR Lazard World Dividend &",
			"LOW Lowe's Companies",
			"LPI Laredo Petroleum Holdings Inc",
			"LPL Lg Display Co. Limited American",
			"LPT Liberty Property Trust",
			"LPX Louisiana-Pacific Corp",
			"LRE Lrr Energy L.P.",
			"LRN K12 Inc",
			"LTC Ltc Properties",
			"LTM Life Time Fitness",
			"LUB Luby's Inc",
			"LUK Leucadia National Corp",
			"LUV Southwest Airlines Company",
			"LUX Luxottica Group S.P.A.",
			"LVLT Level 3 Communications",
			"LVS Las Vegas Sands",
			"LXFR Luxfer Holdings Plc",
			"LXFT Luxoft Holding Inc",
			"LXK Lexmark International",
			"LXP Lexington Realty Trust",
			"LXP-C Lexington Realty Tru",
			"LXU Lsb Industries Inc",
			"LYB Lyondellbasell Industries Nv",
			"LYG Lloyds Banking Group Plc",
			"LYG-A Lloyds Banking Group Plc",
			"LYV Live Nation Entertainment",
			"LZB La-Z-Boy Inc",
			"M Macy's Inc",
			"MA Mastercard Inc",
			"MAA Mid-America Apartment Communities",
			"MAC Macerich Company",
			"MAIN Main Street Capital Corp",
			"MAN Manpower Inc",
			"MANU Manchester United Ltd",
			"MAS Masco Corp",
			"MATX Matson Inc",
			"MAV Pioneer Muni High Income Advantage Trust",
			"MBI MBIA Inc",
			"MBT Mobile Telesystems",
			"MCA Blackrock Muniyield California Insured Fund",
			"MCC Medley Capital Corp",
			"MCD McDonald's Corp",
			"MCI Massmutual Corporate Investors",
			"MCK Mckesson Corp",
			"MCN Madison/Claymore Covered Call & Equity Strategy",
			"MCO Moody's Corp",
			"MCP Molycorp Inc",
			"MCQ Medley Capital Corporation 7.12",
			"MCR MFS Charter Income Trust",
			"MCS Marcus Corp",
			"MCV Medley Capital Corp",
			"MCY Mercury General Corp",
			"MD Mednax Inc",
			"MDC M.D.C. Holdings",
			"MDP Meredith Corp",
			"MDR McDermott International",
			"MDT Medtronic Inc",
			"MDU Mdu Res Group Inc",
			"MED Medifast Inc",
			"MEG Media General",
			"MEI Methode Electronics",
			"MEN Blackrock Munienhanced Fund",
			"MEP Midcoast Energy Partners L.P.",
			"MER-D Merrill Lyn 7.0 Topr",
			"MER-E M L Cap TR 7.12",
			"MER-F Merrill Ly Cap V7.28",
			"MER-K ML 6.45% Trust Pfd",
			"MER-M ML Cap TR II 6.45% P",
			"MER-P ML Cap TR III 7.375%",
			"MET Metlife Inc",
			"MET-A Metlife Pfd A Fltg",
			"MET-B Metlife Inc Pfd B",
			"MFA MFA Financial Inc",
			"MFA-B MFA Financial Inc",
			"MFC Manulife Financial Corp",
			"MFD Macquarie/First Trust Global",
			"MFG Mizuho Financial Group",
			"MFL Blackrock Muniholdings Investment Quality Fund",
			"MFM MFS Muni Income Trust",
			"MFO MFA Financial Inc",
			"MFT Blackrock Muniyield Investment Qualityfund",
			"MFV MFS Special Value Trust",
			"MG Mistras Group Inc",
			"MGA Magna International",
			"MGF MFS Government Markets Income Trust",
			"MGM MGM Resorts International",
			"MGR Affiliated Managers Group Inc",
			"MGU Macquarie Global Infrastructure Total Return Fun",
			"MH-A Maiden Holdings Ltd. 8.25%",
			"MHD Blackrock Muniholdings Fund",
			"MHF Western Asset Muni High",
			"MHFI The McGraw-Hill Companies Inc",
			"MHG Marine Harvest ASA Sponsored Ad",
			"MHI Pioneer Muni High Income Trust",
			"MHK Mohawk Industries",
			"MHN Blackrock Muniholdings New York Quality Fund",
			"MHNA Maiden Holdings North America",
			"MHNB Maiden Holdings North America",
			"MHNC Maiden Holdings North America",
			"MHO M/I Homes",
			"MHO-A M/I Homes Sr A Pf Ds",
			"MHR Magnum Hunter Resources Corp",
			"MHY Western Asset Managed High",
			"MIC Macquarie Infrastructure Company Trust",
			"MIE Cohen & Steers MLP Income and",
			"MIG Meadowbrook Insurance Group",
			"MIL Mfc Industrial Ltd",
			"MILL Miller Petroleum",
			"MIN MFS Intermediate Income Trust",
			"MIT-A Ag Mortgage Investment Trust",
			"MITT Ag Mortgage Investment Trust",
			"MIXT Mix Telematics Limited",
			"MIY Blackrock Muniyield Michigan Quality Fund",
			"MJI Blackrock Muniyield New Jersey Quality Fund",
			"MJN Mead Johnson Nutrition Company",
			"MKC Mccormick & Company Inc",
			"MKC.V Mccormick & Company Inc",
			"MKL Markel Corp",
			"MLG Metlife Inc",
			"MLI Mueller Industries",
			"MLM Martin Marietta Materials",
			"MLP Maui Land & Pineapple Company",
			"MLR Miller Industries",
			"MLU Metlife Inc",
			"MM Millennial Media Inc",
			"MMC Marsh & Mclennan Companies",
			"MMD Mainstay Defined Muni Opp Fund",
			"MMI Marcus & Millichap",
			"MMM 3M Company",
			"MMP Magellan Midstream Partners L.P.",
			"MMS Maximus Inc",
			"MMT MFS Multimarket Income Trust",
			"MMU Western Asset Managed Municipals Fund",
			"MN Manning & Napier Inc",
			"MNE Blackrock Muni New York Intermediate Duration Fu",
			"MNI Mcclatchy Company",
			"MNK Mallinckrodt Plc Ordinary Share",
			"MNP Western Asset Muni Partners Fund",
			"MNR Monmouth Real Estate Investment Corp",
			"MNR-A Monmouth Real Estate Inv",
			"MNR-B Monmouth Real Estate Investmen",
			"MO Altria Group",
			"MOD Modine Manufacturing Company",
			"MODN Model N Inc. Common Stock",
			"MOG.A Moog Inc",
			"MOG.B Moog Inc",
			"MOH Molina Healthcare Inc",
			"MON Monsanto Company",
			"MOS Mosaic Company",
			"MOV Movado Group Inc",
			"MP-D Mississippi Pr 5.25",
			"MPA Blackrock Muniyield Pennsylvania Quality Fund",
			"MPC Marathon Petroleum Corp",
			"MPLX Mplx LP",
			"MPO Midstates Petroleum Company I",
			"MPV Massmutual Participation Investors",
			"MPW Medical Properties Trust",
			"MPX Marine Products Corp",
			"MQT Blackrock Muniyield Quality Fund II",
			"MQY Blackrock Muniyield Quality Fund",
			"MR Mindray Medical International Limited",
			"MRC Mrc Global Inc",
			"MRF American Income Fund Inc",
			"MRH Montpelier Re Holdings Ltd",
			"MRH-A Montpelier Re Holdings Ltd",
			"MRIN Marin Sotfware Incorporated",
			"MRK Merck & Company",
			"MRO Marathon Oil Corp",
			"MS Morgan Stanley",
			"MS-A Morgan Stanley Prfd 'A'",
			"MS-E Morgan Stanley",
			"MS-F Morgan Stanley",
			"MSA Msa Safety Inc.",
			"MSB Mesabi Trust",
			"MSCA Main Street Capital Corporatio",
			"MSCI MSCI Inc",
			"MSD Morgan Stanley Emerging Markets Debt",
			"MSF Morgan Stanley Emerging Markets Fund Inc",
			"MSI Motorola Solutions",
			"MSJ Morgan Stanley Cap Trust Vi Cap Securities",
			"MSK Morgan Stanley Cap TR ViII Gdt Cap Securities",
			"MSL Midsouth Bancorp",
			"MSM Msc Industrial Direct Company",
			"MSO Martha Stewart Living Omnimedia",
			"MSP Madison Strategic Sector Premium Fund",
			"MSZ Morgan Stanley Capital Trust Vii Cap Secs",
			"MT Arcelormittal",
			"MTB M&T Bank Corp",
			"MTB-C M&T Bank Corporation Fixed Rate",
			"MTB.P M&T Bank Corporation Fixed Rate",
			"MTB.W M&T Bank Corporation Warrants",
			"MTCN Arcelormittal",
			"MTD Mettler-Toledo International",
			"MTDR Matador Resources Company",
			"MTG Mgic Investment Corp",
			"MTH Meritage Corp",
			"MTL Mechel Steel Group Oao",
			"MTL.P Mechel Steel Group Oao American",
			"MTN Vail Resorts",
			"MTOR Arvinmeritor",
			"MTR Mesa Royalty Trust",
			"MTRN Brush Wellman Inc",
			"MTS Montgomery Street Income Securities",
			"MTT Western Asset Muni Defined Opportunity Trust Inc",
			"MTU Mitsubishi Ufj Financial Group Inc",
			"MTW Manitowoc Company",
			"MTX Minerals Technologies Inc",
			"MTZ Mastec Inc",
			"MUA Blackrock Muniassets Fund",
			"MUC Blackrock Muniholdings California Quality Fund",
			"MUE Blackrock Muniholdings Quality Fund II",
			"MUH Blackrock Muniholdings Fund II",
			"MUI Blackrock Muni Intermediate Duration Fund Inc",
			"MUJ Blackrock Muniholdings New Jersey Insured Fund",
			"MUR Murphy Oil Corp",
			"MUS Blackrock Muniholdings Quality Fund",
			"MUSA Murphy USA Inc. Common Stock Wh",
			"MUX Mcewen Mining Inc",
			"MVC MVC Capital",
			"MVCB MVC Capital Inc",
			"MVNR Mavenir Systems Inc. Common ST",
			"MVO Mv Oil Trust",
			"MVT Blackrock Munivest Fund II",
			"MW Men's Wearhouse",
			"MWA Mueller Water Products",
			"MWE Markwest Energy Partners LP",
			"MWG Morgan Stanley Cap TR IV Gtd Cap Secs",
			"MWO Morgan Stanley Cap TR V Gtd Cap Secs",
			"MWR Morgan Stanley Cap TR III Capital Trust Securiti",
			"MWV Meadwestvaco Corp",
			"MWW Monster Worldwide",
			"MX Magnachip Semiconductor Corp",
			"MXE Mexico Equity and",
			"MXF Mexico Fund",
			"MXL Maxlinear Inc",
			"MXT Maxcom Telecomunicaciones Sab De Cv",
			"MY China Ming Yang Wind Power Group Limited",
			"MYC Blackrock Muniyield California Fund",
			"MYCC Clubcorp Holdings Inc",
			"MYD Blackrock Muniyield Fund",
			"MYE Myers Industries",
			"MYF Blackrock Muniyield Investment Fund",
			"MYI Blackrock Muniyield Quality Fund III",
			"MYJ Blackrock Muniyield New Jersey Fund",
			"MYM Blackrock Muniyield Michigan Quality Fund II",
			"MYN Blackrock Muniyield New York Quality Fund",
			"MZF Managed Duration Investment Grade Fund",
			"N Netsuite Inc",
			"NAC Nuveen California Divadv Fund",
			"NAD Nuveen Divadv Fund",
			"NADL North Atlantic Drilling Ltd. Co",
			"NAN Nuveen New York Divadv Fund",
			"NAN-C Nuveen NY Div Advantage Muni F",
			"NAN-D Nuveen New York Dividend Advan",
			"NAT Nordic American Tanker Shipping Limited",
			"NAV Navistar International Corp",
			"NAV-D Navistar Intl Pfd D",
			"NAZ Nuveen Arizona Premium Fund",
			"NBB Nuveen Build America Bond Fund",
			"NBD Nuveen Build America Bond Opportunity Fund",
			"NBG National Bank of Greece Sa",
			"NBG-A Natl Bk of Gr Pfd Ad",
			"NBHC National Bank Holdings Corp",
			"NBL Noble Energy Inc",
			"NBR Nabors Industries",
			"NC Nacco Industries",
			"NCA Nuveen California Muni Value Fund",
			"NCFT Norcraft Companies Inc",
			"NCI Navigant Consulting",
			"NCO Nuveen California Muni Market Opportunity Fund",
			"NCP Nuveen California Performance Plus Fund",
			"NCR NCR Corp",
			"NCS NCI Building Systems",
			"NCT Newcastle Investment Corp",
			"NCT-B Newcastle Inv Pfd B",
			"NCT-C Newcastle Investment Corporatio",
			"NCT-D Newcastle Invt Corp",
			"NCU-C Nuveen California Premium Inco",
			"NCV Agic Convertible &",
			"NCZ Agic Convertible & II",
			"NDP Tortoise Energy Independence F",
			"NDRO Enduro Royalty Trust",
			"NDZ Nordion Inc",
			"NE Noble Corp",
			"NEA Nuveen Insured Tax-Free Advantage Fund",
			"NED Noah Education Holdings Ltd",
			"NEE Nextera Energy",
			"NEE-C Fpl Group Inc. 5 7/8% Preferre",
			"NEE-G Nextera Energy Capital Holding",
			"NEE-H Nextera Energy Capital Holding",
			"NEE-I Nextera Energy Capital Holding",
			"NEE-J Nextera Energy Capital Holding",
			"NEE-O Nextera Energy Inc",
			"NEE-P Nextera Energy Inc",
			"NEM Newmont Mining Corp",
			"NES Nuverra Environmental Solutions Inc",
			"NEU Newmarket Corp",
			"NEV Nuveen Enhanced Muni Value Fund",
			"NEWM New Media Investment Group Inc.",
			"NFG National Fuel Gas Company",
			"NFJ Nfj Dividend Interest & Premium Strategy Fund",
			"NFX Newfield Exploration Company",
			"NGG National Grid Transco Plc",
			"NGL Ngl Energy Partners LP",
			"NGLS Targa Resources Partners LP",
			"NGS Natural Gas Services Group",
			"NGVC Natural Grocers By Vitamin Cottage Inc",
			"NGX-C Nuveen Insured Massachusetts T",
			"NHF Nexpoint Credit Strategies Fund",
			"NHI National Health Investors",
			"NI NiSource Inc",
			"NID Nuveen Intermediate Duration M",
			"NIE Agic Equity & Convertible",
			"NIM Nuveen Maturities Fund",
			"NIO Nuveen Insured Muni Opportunity Fund",
			"NIQ Nuveen Intermediate Duration Q",
			"NJ Nidec Corp",
			"NJR Newjersey Resources Corp",
			"NKA Niska Gas Storage Partners Llc",
			"NKE Nike Inc",
			"NKG Nuveen Georgia Divadv Fund 2",
			"NKG-C Nuveen Georgia Div Adv Mun Fd",
			"NKG-D Nuveen Ga Div Advantage Muni F",
			"NKX Nuveen Insured California Tax-Free",
			"NL NL Industries",
			"NLS Nautilus Group",
			"NLSN Nielsen Holdings N.V.",
			"NLY Annaly Capital Management Inc",
			"NLY-A Annaly Capital Manag",
			"NLY-C Annaly Capital Management Inc",
			"NLY-D Annaly Capital Management Inc",
			"NM Navios Maritime Holdings Inc",
			"NM-G Navios Maritime",
			"NMA Nuveen Muni Advantage Fund",
			"NMBL Nimble Storage Inc.",
			"NMFC New Mountain Finance Corporati",
			"NMI Nuveen Muni",
			"NMK-B Niagara Mohawk Holdings Inc. P",
			"NMK-C Niagara Mohawk 3.60",
			"NMM Navios Maritime Partners LP",
			"NMO Nuveen Muni Market Opportunity Fund",
			"NMR Nomura Holdings Inc ADR",
			"NMT Nuveen Massachusetts Premium Fund",
			"NMT-C Nuveen Mass Prem Inc",
			"NMT-D Nuveen Massachusetts Premium In",
			"NMY Nuveen Maryland Premium Fund",
			"NMY-C Nuveen Maryland Premium Income",
			"NMY-D Nuveen Maryland Premium Income",
			"NMY-E Nuveen Maryland Premium Income",
			"NMY-F Nuveen Maryland Premium Income",
			"NMY-G Nuveen Maryland Premium Income",
			"NMY-H Nuveen Maryland Premium Income",
			"NNA Navios Maritime Acquisition Corp",
			"NNC Nuveen North Carolina Premium Fund",
			"NNI Nelnet Inc",
			"NNJ Nuveen New Jersey Premium Fund",
			"NNN National Retail Properties",
			"NNN-D National Retail Properties In",
			"NNN-E National Retail Properties Depo",
			"NNP Nuveen New York Performance Plus Fund",
			"NNY Nuveen New York Muni Value Fund",
			"NOA North American Energy Partners",
			"NOAH Noah Holdings Ltd",
			"NOC Northrop Grumman Corp",
			"NOK Nokia Corp",
			"NOM-C Nuveen Missouri Premium Income",
			"NOR Noranda Aluminum Holding Corp",
			"NORD Nord Anglia Education Inc.",
			"NOV National-Oilwell",
			"NOW Servicenow Inc",
			"NP Neenah Paper",
			"NPD China Nepstar Chain Drugstore Ltd",
			"NPF Nuveen Premier Muni",
			"NPI Nuveen Premium Fund",
			"NPK National Presto Industries",
			"NPM Nuveen Premium Fund II",
			"NPO Enpro Industries",
			"NPP Nuveen Performance Plus Fund",
			"NPT Nuveen Premium Fund IV",
			"NPTN Neophotonics Corp",
			"NPV Nuveen Virginia Premium Fund",
			"NQ Netqin Mobile Inc",
			"NQC Nuveen California Investment",
			"NQI Nuveen Insured Quality Fund",
			"NQJ Nuveen New Jersey Investment",
			"NQM Nuveen Investment Quality Fund",
			"NQP Nuveen Pennsylvania Investment",
			"NQP-C Nuveen Pennsylvania Investment",
			"NQP-D Nuveen Pennsylvania Investment",
			"NQS Nuveen Quality Fund",
			"NQU Nuveen Quality",
			"NR Newpark Resources",
			"NRF Northstar Realty Finance",
			"NRF-A Northstar Realty Pfd",
			"NRF-B Northstar Rlty Ser B",
			"NRF-C Northstar Realty Finance Corp",
			"NRF-D Northstar Realty Finance Corp",
			"NRG NRG Energy",
			"NRK Nuveen Insured New York Tax-Free",
			"NRK-C Nuveen Insured New York Tax-Fre",
			"NRP Natural Resource Partners LP",
			"NRT North European Oil Royality Trust",
			"NRZ New Residential Investment Corp",
			"NS Nustar Energy L.P.",
			"NSC Norfolk Southern Corp",
			"NSH Nustar Gp Holdings Llc",
			"NSL Nuveen Senior",
			"NSLP New Source Energy Partners L.P",
			"NSM Nationstar Mortgage Holdngs I",
			"NSP Insperity Inc",
			"NSR Neustar Inc",
			"NSS Nustar Logistics L.P.",
			"NTC Nuveen Connecticut Premium Fund",
			"NTE Nam Tai Electronics",
			"NTG Tortoise MLP Fund",
			"NTI Northern Tier Energy LP",
			"NTL Nortel Inversora Sa ADR",
			"NTT Nippon Telegraph and Telephone Corp",
			"NTX Nuveen Texas Quality",
			"NTX-C Nuveen Texas Quality Income Mu",
			"NTZ Natuzzi S.P.A.",
			"NU Northeast Utilities",
			"NUC Nuveen California Quality",
			"NUE Nucor Corp",
			"NUJ-C Nuveen New Jersey Dividend Adv",
			"NUM Nuveen Michigan Quality",
			"NUO Nuveen Ohio Quality",
			"NUS Nu Skin Enterprises",
			"NUV Nuveen Muni Value Fund",
			"NUW Nuveen Muni Value Fund",
			"NVC Nuveen California Quality Fund",
			"NVGS Navigator Holdings",
			"NVO Novo Nordisk A/S",
			"NVR NVR Inc",
			"NVS Novartis Ag",
			"NW-C Natl Wstmst Ads 19C3",
			"NWE Northwestern Corp",
			"NWHM New Home Co Llc",
			"NWL Newell Rubbermaid Inc",
			"NWN Northwest Natural Gas Company",
			"NWY New York & Company",
			"NX Quanex Building Products Corp",
			"NXC Nuveen California Tax-Free Income",
			"NXK-C Nuveen New York Dividend Advant",
			"NXN Nuveen Insured New York Tax-Free",
			"NXP Nuveen Tax Free Income Portfolio",
			"NXQ Nuveen Tax Free Income Portfolio II",
			"NXR Nuveen Tax Free Income Portfolio III",
			"NYCB New York Community Bancorp",
			"NYLD NRG Yield Inc",
			"NYT New York Times Company",
			"NZF-C Nuveen Dividend Advantage Muni",
			"O Realty Income Corp",
			"O-E Realty Income Pfd E",
			"O-F Realty Income Corp",
			"OAK Oaktree Capital Group Llc",
			"OAKS Five Oaks Investment Corp",
			"OAS Oasis Petroleum Inc",
			"OB Onebeacon Insurance Group",
			"OC Owens Corning Inc",
			"OCIP Oci Partners LP",
			"OCIR Oci Resources LP",
			"OCN Ocwen Financial Corp",
			"OCR Omnicare",
			"OCR-A Omnicare Cap TR 1",
			"OCR-B Omnicare Cap TR II",
			"ODC Oil-Dri Corporation of America",
			"ODP Office Depot",
			"OEH Orient-Express Hotels",
			"OFC Corporate Office Properties",
			"OFC-H Corp Off Pptys Pfd H",
			"OFC-L Corp Office Properties Trust",
			"OFG Oriental Financial Group",
			"OFG-A Oriental Fin Mips A",
			"OFG-B Oriental Finl Pfd B",
			"OFG-D Oriental Financial Group Inc",
			"OGE Oge Energy Corp",
			"OGS One Gas Inc.",
			"OHI Omega Healthcare Investors",
			"OI Owens-Illinois",
			"OIA Invesco Muni Income Trust",
			"OIB.C Oi Sa",
			"OIBR Oi S.A. Ads",
			"OII Oceaneering International",
			"OILT Oiltanking Partners L.P.",
			"OIS Oil States International",
			"OKE Oneok Inc",
			"OKS Oneok Partners L.P.",
			"OLN Olin Corp",
			"OLP One Liberty Properties",
			"OMC Omnicom Group Inc",
			"OME Omega Protein Corp",
			"OMG Om Group",
			"OMI Owens & Minor",
			"OMN Omnova Solutions Inc",
			"ONE Higher One Holdings",
			"OPK Opko Health Inc",
			"OPY Oppenheimer Holdings",
			"ORA Ormat Technologies",
			"ORAN Orange Ads",
			"ORB Orbital Sciences Corp",
			"ORCL Oracle Corp",
			"ORI Old Republic International Corp",
			"ORN Orion Marine Group Inc",
			"OSK Oshkosh Truck Corp",
			"OWW Orbitz Worldwide",
			"OXF Oxford Resource Partners LP",
			"OXM Oxford Industries",
			"OXY Occidental Petroleum Corp",
			"OZM Och-Ziff Capital Management",
			"P Pandora Media Inc",
			"PAA Plains All American Pipeline L.P.",
			"PAC Grupo Aeroportuario Del Pacifico",
			"PACD Pacific Drilling S.A.",
			"PAG Penske Automotive Group",
			"PAGP Plains Gp Holdings L.P.",
			"PAH Platform Specialty Products Corp.",
			"PAI Pacific American Income Shares",
			"PAM Pampa Energia S.A.",
			"PANW Palo Alto Networks Inc",
			"PAR Par Technology Corp",
			"PAY Verifone Systems",
			"PB Prosperity Bancshares",
			"PBA Pembina Pipeline Cor",
			"PBF PBF Energy Inc",
			"PBH Prestige Brand Holdings",
			"PBI Pitney Bowes Inc",
			"PBI-A Pitney Bowes Inc",
			"PBI-B Pitney Bowes Inc .6.70% Notes",
			"PBR Petroleo Brasileiro S.A.- Petrobras",
			"PBR.A Petroleo Brasileiro S.A.- Petrobras",
			"PBT Permian Basin Royalty Trust",
			"PBY Pep Boys-Manny Moe & Jack",
			"PBYI Puma Biotechnology",
			"PCF Putnam High Income Bond Fund",
			"PCG Pacific Gas & Electric Co.",
			"PCI Pimco Dynamic Credit Income Fun",
			"PCK Pimco California Muni II",
			"PCL Plum Creek Timber Company",
			"PCM Pimco Commercial Mortgage Securities",
			"PCN Pimco Corporate",
			"PCP Precision Castparts Corp",
			"PCQ Pimco California Muni",
			"PDH Petrologistics LP",
			"PDI Pimco Dynamic Income Fund",
			"PDM Piedmont Office Realty Trust",
			"PDS Precision Drilling Corp",
			"PDT John Hancock Premium Dividend Fund",
			"PEB Pebblebrook Hotel Trust",
			"PEB-A Pebblebrook Hotel Trust Pfd Ser",
			"PEB-B Pebblebrook Hotel Trust",
			"PEB-C Pebblebrook Hotel Trust",
			"PEG Public Service Enterprise Group Inc",
			"PEI Pennsylvania Real Estate Investment",
			"PEI-A Penn Real Estate Invest Trust",
			"PEI-B Pennsylvania Real Estate Inves",
			"PEO Petroleum Resources Corp",
			"PEP Pepsico Inc",
			"PER Sandridge Permian Trust",
			"PES Pioneer Energy Services Corp",
			"PF Pinnacle Foods Inc. Common Sto",
			"PFD Flaherty & Crumrine Preferred Inc",
			"PFE Pfizer Inc",
			"PFG Principal Financial Group Inc",
			"PFG-B Prin Fin Grp Ser B",
			"PFH Cabco TR Jcp 7.625",
			"PFK Prudential Financial Inflation-Linked",
			"PFL Pimco Income Strategy Fund",
			"PFN Pimco Income Strategy Fund II",
			"PFO Flaherty & Crumrine Preferred Fund",
			"PFS Provident Financial Services",
			"PFSI Pennymac Financial Services In",
			"PFX Phoenix Companies",
			"PG Procter & Gamble Company",
			"PGEM Ply Gem Holdings Inc",
			"PGH Pengrowth Energy Corp",
			"PGI Ptek Holdings",
			"PGP Pimco Global Stocksplus & Income",
			"PGR Progressive Corp",
			"PGZ Principal Real Estate Income F",
			"PH Parker-Hannifin Corp",
			"PHA Pultegroup",
			"PHD Pioneer Floating Rate Trust",
			"PHG Koninklijke Philips Electronics",
			"PHH Phh Corp",
			"PHI Philippine Long Distance Telephone",
			"PHK Pimco High",
			"PHM Pultegroup",
			"PHT Pioneer High Income Trust",
			"PHX Panhandle Royalty Company",
			"PII Polaris Industries Inc",
			"PIKE Pike Electric",
			"PIM Putnam Master Intermediate Income",
			"PIR Pier 1 Imports",
			"PIY Merrill Lynch Depositor",
			"PJC Piper Jaffray Companies",
			"PJH Prudential Financial Inc",
			"PJL Preferredplus TR",
			"PJS Preferredplus Trust",
			"PKD Parker Drilling Company",
			"PKE Park Electrochemical Corp",
			"PKG Packaging Corporation of America",
			"PKI Perkinelmer",
			"PKO Pimco Income Opportunity Fund",
			"PKX Pohang Iron & Steel Co.",
			"PKY Parkway Properties",
			"PL Protective Life Corp",
			"PL-B Plc Cap TR V",
			"PL-C Protective Life Corp",
			"PL-E Protective Life Corporation 6.0",
			"PLD Prologis Inc",
			"PLL Pall Corp",
			"PLOW Douglas Dynamics",
			"PLP Protective Life Corp",
			"PLT Plantronics",
			"PM Philip Morris International Inc",
			"PMC Pharmerica Corp",
			"PMF Pimco Muni",
			"PML Pimco Muni II",
			"PMM Putnam Managed Muni Income Trust",
			"PMO Putnam Muni Opportunities Trust",
			"PMT Pennymac Mortgage Investment Trust",
			"PMX Pimco Muni Income Fund III",
			"PNC PNC Bank",
			"PNC-P PNC Financial Services Group I",
			"PNC-Q The PNC Financial Services Gro",
			"PNC.W The PNC Financial Services Group",
			"PNF Pimco New York Muni",
			"PNI Pimco New York Muni II",
			"PNK Pinnacle Entertainment",
			"PNM PNM Resources Inc",
			"PNR Pentair Ltd",
			"PNTA Pennantpark Investment Corpora",
			"PNW Pinnacle West Capital Corp",
			"PNX Phoenix Companies",
			"PNY Piedmont Natural Gas Company",
			"POL Polyone Corp",
			"POM Potomac Electric Power Company",
			"POR Portland General Electric Company",
			"POST Post Holdings Inc.",
			"POT Potash Corp. of Saskatchewan Inc",
			"POWR Powersecure International Inc",
			"PPG PPG Industries",
			"PPL PPL Corp",
			"PPL-W PPL Corp",
			"PPO Polypore International Inc",
			"PPP Primero Mining Corp",
			"PPR ING Prime Rate Trust",
			"PPS Post Properties",
			"PPS-A Post Prop. 8.5 Pra",
			"PPT Putnam Premier Income Trust",
			"PPX PPL Capital Funding Inc",
			"PQ Petroquest Energy Inc",
			"PRA Pro-Assurance Corp",
			"PRE Partnerre Ltd",
			"PRE-D Partnerre Ltd Pfd D",
			"PRE-E Partnerre Ltd",
			"PRE-F Partnerre Ltd",
			"PRGO Perrigo Company",
			"PRH Prudential Financial Inc",
			"PRI Primerica Inc",
			"PRI.B Primerica Inc",
			"PRIS Promotora De Informaciones Sa",
			"PRLB Proto Labs Inc",
			"PRO Pros Holdings",
			"PRU Prudential Financial Inflation Retail",
			"PRY Prospect Capital Corp",
			"PSA Public Storage",
			"PSA-O Public Storage Depositary Share",
			"PSA-P Public Storage",
			"PSA-Q Public Storage",
			"PSA-R Depositary Shares Each Represe",
			"PSA-S Public Storage",
			"PSA-T Public Storage",
			"PSA-U Public Storage",
			"PSA-V Public Storage",
			"PSA-W Public Storage",
			"PSA-X Public Storage",
			"PSA-Y Public Storagedepositary Share",
			"PSB Business Parks",
			"PSB-R PS Business Parks Inc. 6.875%",
			"PSB-S PS Business Parks Inc",
			"PSB-T PS Business Parks Inc",
			"PSB-U PS Business Parks Inc",
			"PSB-V PS Business Pks Inc Calif Dep",
			"PSF Cohen & Steers Preferred Fund",
			"PSO Pearson Plc",
			"PSX Phillips 66 Common Stock",
			"PSXP Phillips 66 Partners LP",
			"PT Portugal Telecom Sgps S.A .",
			"PTP Platinum Underwriters Holdings Ltd",
			"PTR Petrochina Company Limited",
			"PTY Pimco Corporate Opportunity Fund",
			"PUK Prudential Public Limited Company",
			"PUK-A Pru Plc Perp Sub Cap",
			"PUK.P Prudential 6.75%",
			"PULS Pulse Electronics Corp",
			"PVA Penn Virginia Corp",
			"PVD Administradora De Fondos De Pensiones",
			"PVG Pretium Res Inc",
			"PVH Phillips-Van Heusen Corp",
			"PVR Pvr Partners LP",
			"PVTD Privatebancorp Inc",
			"PWE Penn West Petroleum Ltd",
			"PWR Quanta Services",
			"PX Praxair",
			"PXD Pioneer Natural Resources Company",
			"PYB Pplus Trust",
			"PYC Pplus Trust",
			"PYK Pplus Trust",
			"PYN Pimco New York Muni Income Fund III",
			"PYS Pplus Trust",
			"PYT Pplus Trust",
			"PYV Pplus Trust",
			"PYY Merrill Lynch Depositor",
			"PZB Merrill Lynch Depositor",
			"PZC Pimco California Muni Income Fund III",
			"PZE Petrobras Argentina S.A.",
			"PZN Pzena Investment Management Inc",
			"Q Quintiles Transitional Holdings",
			"QEP Qep Resources",
			"QEPM Qep Midstream Partners LP",
			"QIHU Qihoo 360 Technology Co. Ltd",
			"QRE Qr Energy LP",
			"QTM Quantum Corp",
			"QTS Qts Realty Trust Inc",
			"QTWO Q2 Holdings Inc",
			"QUAD Quad Graphics Inc",
			"R Ryder System",
			"RAD Rite Aid Corp",
			"RAI Reynolds American Inc",
			"RALY Rally Software",
			"RAS Rait Financial Trust",
			"RAS-A Rait Financial TR Pf",
			"RAS-B Rait Financial TR Pf",
			"RAS-C Rait Fin TR Pfd C",
			"RATE Bankrate Inc",
			"RAX Rackspace Hosting Inc",
			"RBA Ritchie Bros. Auctioneers Inc",
			"RBC Regal-Beloit Corp",
			"RBS Royal Bank Scotland Group Plc",
			"RBS-E RBS Cap Fndg TR V",
			"RBS-F Royal Bank Scotland F",
			"RBS-G RBS Capital Trustvii",
			"RBS-H Royal Bank Scot Hadssc",
			"RBS-I RBS Cap Fdg TR Vi",
			"RBS-L Royal Bank Scotland",
			"RBS-M Royal Bank Scotland M",
			"RBS-N RBS Series N Ads Pfd",
			"RBS-P Royal Bank Scotland",
			"RBS-Q Royal Bank ADR",
			"RBS-R Royal Bank Scotland",
			"RBS-S Royal Bank Scotland",
			"RBS-T Royal Bank Pfd",
			"RCAP RCS Capital Corp",
			"RCI Rogers Communication",
			"RCL Royal Caribbean Cruises Ltd",
			"RCS Rcm Strategic Global Government Fund",
			"RDC Rowan Companies",
			"RDN Radian Group Inc",
			"RDS.A Royal Dutch Shell Plc",
			"RDS.B Royal Dutch Shell",
			"RDY Dr. Reddy's Laboratories Ltd",
			"RE Everest Re Group",
			"REG Regency Centers Corp",
			"REG-F Regency Centers Corp",
			"REG-G Regency Centers Corporation Pfd",
			"REN Resolute Energy Corp",
			"REN.W Resolute Energy Corp",
			"RENN Renren Inc",
			"RES RPC Inc",
			"RESI Altisource Residential Corporat",
			"REV Revlon Inc",
			"REX Rex Stores Corp",
			"REXR Rexford Industrial Realty Inc",
			"RF Regions Financial Corp",
			"RF-A Regions Financial Corp",
			"RFI Cohen & Steers Total Return Realty Fund",
			"RFP Resolute Forest Products Inc",
			"RGA Reinsurance Group of America Inc",
			"RGC Regal Entertainment Group",
			"RGP Ross Group Plc",
			"RGR Sturm Ruger & Company",
			"RGS Regis Corp",
			"RGT Royce Global Value Trust Inc",
			"RH Restoration Hardware Holdings",
			"RHI Robert Half International Inc",
			"RHP Gaylord Entertainment Company",
			"RHT Red Hat Inc",
			"RICE Rice Energy Inc.",
			"RIG Transocean Inc",
			"RIO Rio Tinto Plc",
			"RIOM Rio Alto Mining Limited",
			"RIT Lmp Real Estate",
			"RJD Raymond James Financial Inc",
			"RJF Raymond James Financial",
			"RKT Rock-Tenn Company",
			"RKUS Ruckus Wireless Inc",
			"RL Ralph Lauren Corp",
			"RLD Reald Inc",
			"RLGY Realogy Holdings Corp",
			"RLH Westcoast Hospitality Corp",
			"RLH-A Red Lion Htls Cap TR",
			"RLI Rli Corp",
			"RLJ Rlj Lodging Trust",
			"RM Regional Managment Corp",
			"RMAX Re/Max Holdings Inc",
			"RMD Resmed Inc",
			"RMT Royce Micro-Cap Trust",
			"RNDY Roundy's Inc. Common Stock",
			"RNE Morgan Stanley East. Euro",
			"RNF Rentech Nitrogen Partners L.P",
			"RNG Ringcentral Inc",
			"RNO Rhino Resource Partners LP",
			"RNP Cohen & Steers REIT and Preferred",
			"RNR Renaissancere Holdings Ltd",
			"RNR-C Renaissancere 6.08 C",
			"RNR-E Renaissancere Holdings Ltd",
			"ROC Rockwood Holdings",
			"ROG Rogers Corp",
			"ROK Rockwell Automation Inc",
			"ROL Rollins",
			"ROP Roper Industries",
			"ROYT Pacific Coast Oil Trust",
			"RPAI Retail Properties of America",
			"RPM RPM International Inc",
			"RPT Ramco-Gershenson Properties Trust",
			"RPT-D Ramco-Gershenson Properties Tru",
			"RQI Cohen & Steers Quality Income Realty Fund Inc",
			"RRC Range Resources Corp",
			"RRMS Rose Rock Midstream L.P.",
			"RRTS Roadrunner Transportation Systems Inc",
			"RS Reliance Steel & Aluminum Company",
			"RSE Rouse Properties Inc. Common S",
			"RSG Republic Services",
			"RSH Radioshack Corp",
			"RSO Resource Capital",
			"RSO-A Resource Capital Corp",
			"RSO-B Resource Capital Corp.8.25% Se",
			"RSPP Rsp Permian Inc.",
			"RST Rosetta Stone",
			"RT Ruby Tuesday",
			"RTEC Rudolph Technologies",
			"RTI Rti International Metals",
			"RTN Raytheon Company",
			"RUBI The Rubicon Project Inc.",
			"RUK Reed Elsevier Plc",
			"RVT Royce Value Trust",
			"RWT Redwood Trust",
			"RXN Rexnord Corp",
			"RY Royal Bank of Canada",
			"RYL Ryland Group",
			"RYN Rayonier Inc. REIT",
			"RZA Reinsurance Group of America I",
			"S Sprint Corporation Series 1",
			"SA Seabridge Gold",
			"SAH Sonic Automotive",
			"SAIC Science Applications Internatio",
			"SALT Scorpio Bulkers Inc. Common Sto",
			"SAM Boston Beer Company",
			"SAN Banco Santander",
			"SAN-A Banco Santander S.A. 6.80% Non",
			"SAN-B Santander Finance Preferred Sa",
			"SAN-C Banco Santander S.A. 6.50% Non",
			"SAN-E Banco Santander S.A. Santander",
			"SAN-F Banco Santander S.A. Santander",
			"SAN-I Banco Santander Central Hispano",
			"SAP SAP Ag",
			"SAQ Saratoga Investment Corp",
			"SAR Saratoga Investment Corp",
			"SB Safe Bulkers Inc",
			"SB-B Safe Bulkers Inc",
			"SBGL Sibanye Gold Limited American D",
			"SBH Sally Beauty Holdings",
			"SBR Sabine Royalty Trust",
			"SBS Cia De Saneamento Basico Do Estado",
			"SBW Western Asset Worldwide Income Fund Inc",
			"SBY Silver Bay Realty Trust Corp",
			"SC Santander Consumer USA Holdings",
			"SCCO Southern Peru Copper Corp",
			"SCD Lmp Capital and Income Fund Inc",
			"SCE-F Sce Trust I",
			"SCE-G Sce Trust II",
			"SCE-H Sce Trust III 5.75%",
			"SCG Scana Corp",
			"SCH-B Schwab Charles Corporation Depo",
			"SCHW The Charles Schwab Corp",
			"SCI Service Corporation International",
			"SCL Stepan Company",
			"SCM Stellus Capital Investment Cor",
			"SCS Steelcase Inc",
			"SCU Scana Corp",
			"SCX L.S. Starrett Company",
			"SD Sandridge Energy Inc",
			"SDLP Seadrill Partners Llc",
			"SDR Sandridge Mississippian Trust",
			"SDRL Seadrill Limited",
			"SDT Sandridge Mississippian Trust I",
			"SE Spectra Energy Corp",
			"SEAS Seaworld Entertainment Inc. Co",
			"SEE Sealed Air Corp",
			"SEM Select Medical Holdings Corp",
			"SEM.W Select Medical Holdings Warrent",
			"SEMG Semgroup Corp",
			"SEP Spectra Energy Partners LP",
			"SF Stifel Financial Corp",
			"SFB Stifel Financial Corp.6.70% Se",
			"SFE Safeguard Scientifics",
			"SFG Stancorp Financial Group",
			"SFL Ship Finance International",
			"SFN Stifel Financial Corp",
			"SFUN Soufun Holdings",
			"SFY Swift Energy Company",
			"SGF Singapore Fund",
			"SGK Schawk Inc",
			"SGL Strategic Global",
			"SGM Stonegate Mortgage Corp",
			"SGU Star Gas Partners L.P.",
			"SGY Stone Energy Corp",
			"SGZA Selective Insurance Group Inc",
			"SHG Shinhan Financial Group Co Ltd",
			"SHI Sinopec Shangai Petrochemical Company Ltd",
			"SHO Sunstone Hotel Investors",
			"SHO-D Sunstone Hotel Investors Inc",
			"SHW Sherwin-Williams Company",
			"SI Siemens Ag",
			"SID National Steel Corp",
			"SIG Signet Jewelers Limited",
			"SIR Select Income REIT Common Share",
			"SIX Six Flags Entertainment Corp",
			"SJI South Jersey Industries",
			"SJM J.M. Smucker Company",
			"SJR Shaw Communications Inc",
			"SJT San Juan Basin Royalty Trust",
			"SJW SJW Corp",
			"SKH Skilled Healthcare Group",
			"SKM Sk Telecom Corp",
			"SKT Tanger Factory Outlet Centers",
			"SKX Skechers U.S.A.",
			"SLA American Select Portfolio",
			"SLB Schlumberger N.V.",
			"SLCA U.S. Silica Holdings Inc",
			"SLF Sun Life Financial Inc",
			"SLG SL Green Realty Corp",
			"SLG-I SL Green Realty Corp",
			"SLH Solera Holdings",
			"SLRA Solar Capital Ltd",
			"SLW Silver Wheaton Corp",
			"SM Sm Energy Company",
			"SMA Symmetry Medical Inc",
			"SMF Salient MLP and Energy Infrast",
			"SMFG Sumitomo Mitsui Financial Group Inc",
			"SMG Scotts Miracle-Gro Company",
			"SMI Semiconductor Manufacturing International",
			"SMLP Summit Midstream Partners LP",
			"SMM Salient Midstream & MLP Fund",
			"SMP Standard Motor Products",
			"SN Sanchez Energy Corp",
			"SNA Snap-On Inc",
			"SNE Sony Corp",
			"SNH Senior Housing Properties Trust",
			"SNHN Senior Housing Properties Trus",
			"SNI Scripps Networks Interactive Inc",
			"SNN Smith & Nephew Snats",
			"SNOW Intrawest Resorts Holdings Inc",
			"SNP China Petroleum & Chemical Corp",
			"SNV Synovus Financial Corp",
			"SNV-C Synovus Financial Corp. Fixed-",
			"SNX Synnex Corp",
			"SNY Sanofi-Aventis Sa",
			"SO Southern Company",
			"SOL Renesola Ltd",
			"SON Sonoco Products Company",
			"SOR Source Capital",
			"SOV-C Sovereign Banc Dep S",
			"SPA Sparton Corp",
			"SPB Spectrum Brands Holdings",
			"SPE Special Opportunities Fund Inc",
			"SPF Standard Pacific LP",
			"SPG Simon Property Group",
			"SPG-J Simon Prop Grp Pfd J",
			"SPH Suburban Propane Partners L.P.",
			"SPLP Steel Partners Hldgs",
			"SPN Superior Energy Services",
			"SPR Spirit Aerosystems Holdings",
			"SPW SPX Corp",
			"SQM Sociedad Quimica Y Minera S.A.",
			"SQNS Sequans Communications S A",
			"SR Standard Register Company",
			"SRC Spirit Realty Capital Inc",
			"SRE Sempra Energy",
			"SRF The Cushing Royalty & Income Fund",
			"SRI Stoneridge Inc",
			"SRLP Sprague Resources LP",
			"SRT Startek Inc",
			"SRV The Cushing MLP Total Return Fund",
			"SSD Simpson Manufacturing Company",
			"SSI Stage Stores",
			"SSL Sasol Ltd",
			"SSLT Sesa Goa Limited",
			"SSNI Silver Spring Networks Inc. Co",
			"SSP E.W. Scripps Company",
			"SSS Sovran Self Storage",
			"SSTK Shutterstock Inc",
			"SSW Seaspan Corp",
			"SSW-C Seaspan Corp",
			"SSW-D Seaspan Corp",
			"SSW-E Seaspan Corporation",
			"ST Sensata Technologies Holding N.V.",
			"STA-A Stag Industrial Inc. Preferred",
			"STA-E ST PAUL COMPANIES INC",
			"STAG STI Inc",
			"STAR Istar Financial Inc",
			"STAY Extended Stay America Inc",
			"STC Stewart Information Services Corp",
			"STE Steris Corp",
			"STI Suntrust Banks",
			"STI-A Suntrust Bks Dep Sh",
			"STI-E Suntrust Banks Inc. Series E",
			"STI.A Suntrust Banks Inc Class A",
			"STI.B Suntrust Banks Inc Class B",
			"STJ St. Jude Medical",
			"STK Columbia Seligman Premium Technology",
			"STL Sterling Bancorp",
			"STL-A Sterling Bncp TR I",
			"STM Stmicroelectronics N.V.",
			"STN Stantec Inc",
			"STNG Scorpio Tankers Inc",
			"STO Statoil ASA",
			"STON Stonemor Partners L.P.",
			"STR Questar Corp",
			"STRI Str Holdings Inc",
			"STT State Street Corp",
			"STT-C State Street Corporation Dep Sh",
			"STT-D State Street Corporation Serie",
			"STV China Digital TV Holding Co.",
			"STWD Starwood Property Trust",
			"STZ Constellation Brands Inc",
			"STZ.B Constellation Brd B",
			"SU Suncor Energy Inc",
			"SUI Sun Communities",
			"SUI-A Sun Communities Inc",
			"SUNE Sunedison Inc",
			"SUP Superior Industries International",
			"SUSP Susser Petroleum Partners LP",
			"SUSS Susser Holdings Corp",
			"SVM Silvercorp Metals Inc",
			"SVU Supervalu Inc",
			"SWAY Starwood Waypoint Residential T",
			"SWC Stillwater Mining Company",
			"SWFT Swift Transportation Company",
			"SWH Stanley Black & Decker Inc.",
			"SWI Solarwinds Inc",
			"SWJ Stanley Black & Decker Inc",
			"SWK Stanley Black & Decker Inc",
			"SWM Schweitzer-Mauduit International",
			"SWN Southwestern Energy Company",
			"SWS SWS Group",
			"SWU Stanley Black & Decker Inc",
			"SWX Southwest Gas Corp",
			"SWY Safeway Inc",
			"SWZ Swiss Helvetia Fund",
			"SXC Suncoke Energy Inc",
			"SXCP Suncoke Energy Partners L.P.",
			"SXE Southcross Energy Partners L.",
			"SXI Standex International Corp",
			"SXL Sunoco Logistics Partners LP",
			"SXT Sensient Technologies Corp",
			"SYA Symetra Financial Corp",
			"SYK Stryker Corp",
			"SYT Syngenta Ag",
			"SYX Systemax Inc",
			"SYY Sysco Corp",
			"SZC The Cushing Renaissance Fund",
			"T AT&T Inc",
			"TA Travelcenters of America Llc",
			"TAC Transalta Corp",
			"TAHO Tahoe Res Inc",
			"TAI Transamerica Income Shares",
			"TAL Tal International Group",
			"TAM Taminco Corporation Common Stoc",
			"TANN Travelcenters of America Llc 8.",
			"TAOM Taomee Holdings Limited",
			"TAP Molson Coors Brewing Company",
			"TAP.A Molson Coors Brewing Company",
			"TARO Taro Pharm Inds",
			"TBI Trueblue Inc",
			"TC Thompson Creek Metals Company Inc",
			"TC-T Thompson Creek Metals Co. Inc",
			"TCAP Triangle Capital Corp",
			"TCB TCF Financial Corp",
			"TCB-B TCF Financial Corp",
			"TCB-C TCF Financial Corp",
			"TCB.W TCF Financial Corp",
			"TCC Triangle Capital Coproration",
			"TCCA Triangle Capital Corp",
			"TCI Transcontinental Realty Investors",
			"TCK Teck Resources Ltd",
			"TCO Taubman Centers",
			"TCO-J Taubman Centers Inc Preferred",
			"TCO-K Taubman Centers Inc",
			"TCP Trident Performance Group",
			"TCS The Container Store Group Inc",
			"TD Toronto Dominion Bank",
			"TDA Telephone and Data Systems Inc",
			"TDC Teradata Corp",
			"TDE Telephone and Data Systems",
			"TDF Templeton Dragon Fund",
			"TDG Transdigm Group Inc",
			"TDI Telephone and Data Systems",
			"TDJ Telephone and Data Systems Inc",
			"TDS Telephone and Data Systems",
			"TDW Tidewater Inc",
			"TDY Teledyne Technologies Inc",
			"TE Teco Energy",
			"TEF Telefonica Sa",
			"TEG Integrys Energy Group",
			"TEI Templeton Emerging Markets",
			"TEL Te Connectivity Ltd",
			"TEN Tenneco Automotive",
			"TEO Telecom Argentina Stet - France Telecom S.A.",
			"TEP Tallgrass Energy Partners LP",
			"TER Teradyne Inc",
			"TEU Box Ships Inc",
			"TEU-C Box Ships Inc",
			"TEVA Teva Pharmaceutical Industries Ltd",
			"TEX Terex Corp",
			"TFG Fixed Income Trust For Goldman",
			"TFX Teleflex Inc",
			"TG Tredegar Corp",
			"TGH Textainer Group Holdings",
			"TGI Triumph Group",
			"TGP Teekay Lng Partners L.P.",
			"TGS Transportadora De Gas Sa Ord B",
			"TGT Target Corp",
			"THC Tenet Healthcare Corp",
			"THG The Hanover Insurance Group",
			"THGA The Hanover Insurance Group I",
			"THI Tim Hortons Inc",
			"THO Thor Industries",
			"THR Thermon Group Holdings Inc",
			"THS Treehouse Foods",
			"TI Telecom Italia S.P.A.",
			"TI.A Telecom Italia S.P.A.",
			"TIF Tiffany & Co.",
			"TISI Team Inc",
			"TJX Tjx Companies",
			"TK Teekay Shipping Corp",
			"TKC Turkcell Iletisim Hizmetleri As",
			"TKF Turkish Investment Fund",
			"TKR Timken Company",
			"TLI Lmp Corporate Loan Fund Inc",
			"TLK P.T. Telekomunikasi Indonesia Tbk.",
			"TLLP Tesoro Logistics LP Common Unit",
			"TLM Talisman Energy Inc",
			"TLP Transmontaigne Partners L.P.",
			"TLYS Tilly's Inc",
			"TM Toyota Motor Corp Ltd Ord",
			"TMH Team Health Holdings",
			"TMHC Taylor Morrison Home Corporatio",
			"TMK Torchmark Corp",
			"TMK-B Torchmark Corp",
			"TMO Thermo Fisher Scientific Inc",
			"TMUS T-Mobile US Inc",
			"TNC Tennant Company",
			"TNET Trinet Group Inc",
			"TNH Terra Nitrogen Company L.P.",
			"TNK Teekay Tankers Ltd",
			"TNP Tsakos Energy Navigation Ltd",
			"TNP-B Tsakos Energy Navigation Limit",
			"TNP-C Tsakos Energy Navigation Limit",
			"TOL Toll Brothers Inc",
			"TOO Teekay Offshore Partners L.P.",
			"TOO-A Teekay Offshore Partners L.P.",
			"TOT Totalfinaelf S.A.",
			"TOWR Tower International",
			"TPC Tutor Perini Corp",
			"TPH Tri Pointe Homes Inc. Common S",
			"TPL Texas Pacific Land Trust",
			"TPRE Third Point Reinsurance Ltd. Co",
			"TPVG Triplepoint Venture Growth Bdc",
			"TPX Tempur-Pedic International Inc",
			"TPZ Tortoise Power and Energy",
			"TR Tootsie Roll Industries",
			"TRC Tejon Ranch Company",
			"TREX Trex Company",
			"TRF Templeton Russia Fund",
			"TRGP Targa Resources",
			"TRI Thomson Reuters Corp",
			"TRK Speedway Motorsports",
			"TRLA Trulia Inc",
			"TRMR Tremor Video Inc",
			"TRN Trinity Industries",
			"TRN-A Terreno Realty Corporation Pref",
			"TRNO Terreno Realty Corp",
			"TROX Tronox Inc",
			"TRP Transcananda Pipelines",
			"TRQ Turquoise Hill Resources Ltd",
			"TRR Trc Companies",
			"TRV The Travelers Companies Inc",
			"TRW Trw Automotive Holdings Corp",
			"TS Tenaris S.A.",
			"TSI Tcw Strategic",
			"TSL Trina Solar Limited",
			"TSLF THL Credit Senior Loan Fund",
			"TSLX Tpg Specialty Lending Inc",
			"TSM Taiwan Semiconductor Manufacturing",
			"TSN Tyson Foods",
			"TSO Tesoro Petroleum Corp",
			"TSS Total System Services",
			"TSU Tim Participacoes S.A.",
			"TTC Toro Company",
			"TTF Thai Fund",
			"TTI Tetra Technologies",
			"TTM Tata Motors Ltd",
			"TTP Tortoise Pipeline & Energy Fund",
			"TU Telus Corp. Non Voting Shares",
			"TUMI Tumi Holdings Inc",
			"TUP Tupperware Corp",
			"TV Grupo Televisa S.A.",
			"TVC Tennessee Valley Authority",
			"TVE Tennessee Valley Authority",
			"TW Towers Watson & Co",
			"TWC Time Warner Cable Inc",
			"TWI Titan International",
			"TWN Taiwan Fund",
			"TWO Two Harbors Investments Corp",
			"TWTR Twitter Inc",
			"TWX Time Warner Inc",
			"TX Ternium S.A.",
			"TXI Texas Industries",
			"TXT Textron Inc",
			"TXTR Textura Corp",
			"TY Tri Continental Corp",
			"TY.P Tri Contl Cp 2.50 Pr",
			"TYC Tyco International Ltd",
			"TYG Tortoise Energy Infrastructure Corp",
			"TYG-B Tortoise Energy Infrastructure",
			"TYL Tyler Technologies",
			"TYN Tortoise North American Energy Corp",
			"TYY Tortoise Energy Capital Corp",
			"TYY-C Tortoise Energy Capital Copror",
			"TZF Bear Stearns Depositor",
			"UA Under Armour",
			"UAL United Continental Holdings",
			"UAM Universal American Financial",
			"UAN Cvr Partners LP Common Units R",
			"UBA Urstadt Biddle Properties Inc",
			"UBP Urstadt Biddle Properties Inc",
			"UBP-D Urstadt Biddle Prf D",
			"UBP-F Privatebancorp Inc",
			"UBS UBS Ag",
			"UBS-D UBS Pfd Fndg TR IV",
			"UCP Ucp. Inc",
			"UDR United Dominion Realty Trust",
			"UFI Unifi Inc",
			"UFS Domtar Corp",
			"UGI Ugi Corp",
			"UGP Ultrapar Participacoes S.A.",
			"UHS Universal Health Services",
			"UHT Universal Health Realty Income Trust",
			"UIL Uil Holdings Corp",
			"UIS Unisys Corp",
			"UL Unilever Plc",
			"UMC United Microelectronics Corp",
			"UMH Umh Properties",
			"UMH-A Umh Properties Inc. 8.25% Seri",
			"UN Unilever Nv",
			"UNF Unifirst Corp",
			"UNH Unitedhealth Group Inc",
			"UNM Unumprovident Corp",
			"UNP Union Pacific Corp",
			"UNS UniSource Energy Corp",
			"UNT Unit Corp",
			"UPL Ultra Petroleum",
			"UPS United Parcel Service",
			"URI United Rentals",
			"URS Urs Corp",
			"USA Liberty All-Star Equity Fund",
			"USAC USA Compression Partners LP",
			"USB U.S. Bancorp",
			"USB-A U.S. Bancorp Depositary Shares",
			"USB-H U.S. Bancorp Dep Sh",
			"USB-M U.S. Bancorp",
			"USB-N U.S. Bancorp",
			"USB-O U.S. Bancorp",
			"USG USG Corp",
			"USM United States Cellular Corp",
			"USNA Usana Health Sciences Inc",
			"USPH U.S. Physical Therapy",
			"USU Usec Inc",
			"UTF Cohen & Steers Infrastructure Fund",
			"UTI Universal Technical Institute Inc",
			"UTL Unitil Corp",
			"UTX United Technologies Corp",
			"UTX-A United Technologies Corporatio",
			"UVE Universal Insurance Holdings Inc",
			"UVV Universal Corp",
			"UZA United States Cellular Corp",
			"V Visa Inc",
			"VAC Marriot Vacations Worldwide Cor",
			"VAL Valspar Corp",
			"VAL.P Vale S.A.",
			"VALE Vale S.A.",
			"VAR Varian Medical Systems",
			"VBF Invesco Van Kampen Bond Fund",
			"VC Visteon Corp",
			"VCO Vina Concha Y Toro",
			"VCRA Vocera Communications Inc",
			"VCV Invesco California Value Muni Income Trust",
			"VE Veolia Environnement",
			"VEEV Veeva Systems Inc",
			"VEL-E Virginia El 5.00 10",
			"VET Vermilion Energy Inc",
			"VFC V.F. Corp",
			"VG Vonage Holdings",
			"VGI Virtus Global Multi-Sector Inc",
			"VGM Invesco Trust For Investment Grade Municipals",
			"VGR Vector Group Ltd",
			"VHI Valhi Inc",
			"VIPS Vipshop Holdings Limited",
			"VIV Telecomunicacoes De Sao Paulo S/A Ads",
			"VJET Voxeljet Ag",
			"VKQ Invesco Muni Trust",
			"VLO Valero Energy Corp",
			"VLP Valero Energy Partners LP",
			"VLRS Controladora Vuela Compaia De",
			"VLT Invesco High",
			"VLY Valley National Bancorp",
			"VLY.W Valley National Bancorp",
			"VMC Vulcan Materials Company",
			"VMEM Violin Memory Inc",
			"VMI Valmont Industries",
			"VMO Invesco Muni Opportunity Trust",
			"VMW Vmware Inc",
			"VNCE Vince Holding Corp. Common Stoc",
			"VNO Vornado Realty Trust",
			"VNO-G Vornado Rlty Pfd G",
			"VNO-I Vornado Rlty Pfd I",
			"VNO-J Vornado Realty Trust Pfd Cumula",
			"VNO-K Vornado Realty Trust",
			"VNO-L Vornado Realty Trust",
			"VNOD Vornado Realty LP",
			"VNTV Vantiv Inc",
			"VOC Voc Energy Trust",
			"VOYA ING US Inc",
			"VPG Vishay Precision Group",
			"VPV Invesco Pennsylvania Muni",
			"VR Validus Holdings",
			"VRS Verso Paper",
			"VRX Valeant Pharmaceuticals International",
			"VSH Vishay Intertechnology",
			"VSI Vitamin Shoppe Inc",
			"VTA Invesco Dynamic Credit Fund",
			"VTN Invesco Trust New York Muni",
			"VTR Ventas Inc",
			"VTRB Ventas Realty Limited Partner",
			"VVC Vectren Corp",
			"VVI Viad Corp",
			"VVR Invesco Senior Income Trust",
			"VZ Verizon Communications Inc",
			"VZA Verizon Communications Inc. 5.9",
			"WAB Wabtec Corp",
			"WAC Walter Investment Management Corp",
			"WAG Walgreen Company",
			"WAGE Wageworks Inc",
			"WAIR Wesco Aircraft Holdings Inc",
			"WAL Western Alliance Bancorporation",
			"WAT Waters Corp",
			"WBAI 500Wan.Com Limited",
			"WBC Wabco Holdings Inc",
			"WBK Westpac Banking Corp",
			"WBS Webster Financial Corp",
			"WBS-E Webster Financial Corp",
			"WCC Wesco International",
			"WCG Wellcare Group",
			"WCIC Wci Communities Inc",
			"WCN Waste Connections Inc",
			"WD Walker & Dunlop",
			"WDAY Workday Inc",
			"WDR Waddell & Reed Financial",
			"WEA Western Asset Bond Fund",
			"WEC Wisconsin Energy Corp",
			"WES Western Gas Partners LP",
			"WEX Wex Inc",
			"WF Woori Finance Holdings Co Ltd",
			"WFC Wells Fargo & Company",
			"WFC-J Wells Fargo Pfd J",
			"WFC-L Wells Fargo Pfd L",
			"WFC-N Wells Fargo & Company Dep Shs R",
			"WFC-O Wells Fargo & Company",
			"WFC-P Wells Fargo & Company Ser P",
			"WFC-Q Wells Fargo & Co.",
			"WFC-R Wells Fargo",
			"WFC.W Wells Fargo and Co",
			"WFT Weatherford International Ltd",
			"WG Willbros Group",
			"WGL WGL Holdings Inc",
			"WGO Winnebago Industries",
			"WGP Western Gas Eqty Partners LP",
			"WH WSP Holdings",
			"WHG Westwood Holdings Group Inc",
			"WHR Whirlpool Corp",
			"WHX Whiting USA Trust I",
			"WHZ Whiting USA Trust II",
			"WIA U.S. Treasury Inflation Prot Secs Fd",
			"WIT Wipro Limited",
			"WIW U.S Treasury Inflation Prot Secs Fd 2",
			"WLH William Lyon Homes",
			"WLK Westlake Chemical Corp",
			"WLL Whiting Petroleum Corp",
			"WLP Wellpoint Health Networks Inc",
			"WLT Walter Energy",
			"WM Waste Management",
			"WMB Williams Companies",
			"WMC Western Asset Mortgage Capital",
			"WMK Weis Markets",
			"WMT Wal-Mart Stores",
			"WNC Wabash National Corp",
			"WNR Western Refining",
			"WNRL Western Refining Logistics LP",
			"WNS Wns Limited",
			"WOR Worthington Industries",
			"WPC W.P. Carey & Co. Llc",
			"WPP Wausau-Mosinee Paper Corp",
			"WPT World Point Terminals LP",
			"WPX Wpx Energy Inc. Common Stock W",
			"WPZ Williams Partners L.P.",
			"WR Westar Energy",
			"WRB W.R. Berkley Corp",
			"WRB-B W.R. Berkley Corp",
			"WRD Weingarten Realty Investors",
			"WRE Washington Real Estate Investment",
			"WRI Weingarten Realty Investors",
			"WRI-F Weingarten Dep Shs",
			"WRT Winthrop Realty Trust 7.75% Sen",
			"WSH Willis Group Holdings",
			"WSM Williams-Sonoma",
			"WSO Watsco Inc",
			"WSO.B Watsco Inc Cl B",
			"WSR Whitestone REIT",
			"WST West Pharmaceutical Services",
			"WTI W&T Offshore",
			"WTM White Mountains Insurance Group",
			"WTR Aqua America",
			"WTS Watts Water Technologies",
			"WTW Weight Watchers International Inc",
			"WU Western Union Company",
			"WUBA 58.Com Inc",
			"WWAV The Whitewave Foods Company",
			"WWE World Wrestling Entertainment",
			"WWW Wolverine World Wide",
			"WX Wuxi Pharmatech [Cayman] Inc",
			"WY Weyerhaeuser Company",
			"WY-A Weyerhaeuser Co.",
			"WYN Wyndham Worldwide Corp",
			"X United States Steel Corp",
			"XAA American Muni Income Portfolio",
			"XCO Exco Resources NL",
			"XEC Cimarex Energy Co",
			"XEL Xcel Energy Inc",
			"XFP Lehman Abs Corp",
			"XIN Xinyuan Real Estate Co Ltd",
			"XKE Lehman Abs Corp",
			"XL XL Company Switzerland Gmbh",
			"XLS Exelis Inc. Common Stock New Wh",
			"XNY China Xiniya Fashion",
			"XOM Exxon Mobil Corp",
			"XON Intrexon Corp",
			"XOXO Xoxo Group Inc",
			"XPO Express-1 Expedited Solutions",
			"XRM Xerium Technologies",
			"XRS Tal Education Group",
			"XRX Xerox Corp",
			"XUE Xueda Education Group",
			"XVG Lehman Abs Corp",
			"XYL Xylem Inc. Common Stock New Whe",
			"Y Alleghany Corp",
			"YELP Yelp Inc",
			"YGE Yingli Green Energy Holding Company",
			"YOKU Youku.Com Inc",
			"YPF Ypf Sociedad Anonima",
			"YUM Yum! Brands",
			"YUME Yume Inc",
			"YZC Yanzhou Coal Mining Company",
			"ZA Zuoan Fashion Limited American",
			"ZB-A Zions Bc Dp Shs A",
			"ZB-F Zions Bancorporation",
			"ZB-G Zions Bancorporation",
			"ZB-H Zions Bancorporation",
			"ZBK Zion Bancorporation",
			"ZEP Zep Inc",
			"ZF Zweig Fund",
			"ZFC Zais Financial Corp. Common Sto",
			"ZLC Zale Corp",
			"ZMH Zimmer Holdings",
			"ZNH China Southern Airlines Company",
			"ZQK Quiksilver",
			"ZTR Zweig Total Return Fund",
			"ZTS Zoetis Inc. Class A Common Stoc",
			"ZX China Zenix Auto International"

		    ];
		    
var FTSETAGS = [
		   "01KG SCOTTISH AMERICAN INVESTMENT CO 8% DEB STK 2022,"
"01NN TEMPLE BAR INVESTMENT TRUST 5 1/2% SECURED BDS 8/3/2021 GBP(VAR),"
"01OK OESTERREICHISCHE KONTROLLBANK AG 5.75% NOTES 7/12/2028 GBP(VAR),"
"01OO NORDIC INVESTMENT BANK 5.25% BDS 26/11/2019 GBP(VAR),"
"02NG STATOILHYDRO ASA 6.125% NOTES 27/11/28 GBP(VAR),"
"04KY UK TREASURY STRIP 4% TREASURY STRIP 07/03/22 GBP PRINCIPAL,"
"04PZ EQUITY RELEASE FUNDING(NO.1) 5.70% CLASS`A2`MTG BKD  FRN 2/2031 GBP,"
"06GH BARCLAYS BANK PLC 9% PERM INT BEARING CAP BDS GBP(VAR)(BR),"
"06GL NATIONAL GRID GAS 8.75% BDS 27/6/25 GBP(VAR),"
"06HB HEMINGWAY DEBENTURE 10.375% 1ST MTG DEB STK 31/7/23,"
"06KY UK TREASURY STRIP UK 8% TREASURY STRIP 7/12/2015 PRINCIPAL,"
"08GG BARCLAYS BANK PLC UNDATED FLTG RATE PRIM CAP NTS`3` GBP BR,"
"08PK EUROPEAN BANK FOR REC & DEV 5.875% NOTES 4/8/2014 GBP(VAR),"
"09GE BLD PROPERTY HLDGS 9.125% 1ST MTG DEB STK 2020,"
"09HK PEEL SOUTH EAST 11.625% 1ST MTG DEB STK 2018,"
"09HL MANCHESTER SHIP CANAL CO 3.5% 1ST PERP MTG DEBS(REGD),"
"09IG SHAFTESBURY PLC 8.5% 1ST MTG DEB STK 31/3/24,"
"0AH7 BAYWA AG NPV(VINK),"
"0AI4 CARLSBERG `B`DKK20,"
"0APM DANIELI & C EUR1,"
"0AVG EXPLOSIFS ET DE PRODUITS CHIMIQUES EUR31(PTLY PD),"
"0B4R FUCHS PETROLUB AG NPV,"
"0B67 GALP ENERGIA SGPS EUR1 CLS`B`,"
"0BJP IMPREGILO SPA NPV,"
"0BKH ITALCEMENTI(FABBR RIUN CEM)SPA EUR1,"
"0BKR ITALMOBILIARE SPA EUR2.60,"
"0BNT KESKO OYJ NPV SER`B`,"
"0CHZ QSC AG NPV,"
"0CIJ RAISIO YHTYMA OYJ NPV(CNV)`V`,"
"0CSD INTERNATIONAL PLANTATIONS D`HEVEAS EUR22.86,"
"0CXC STORA ENSO OYJ SER`R`NPV,"
"0DFR INTEGRALIS AG NPV(REGD),"
"0DHC CARL ZEISS MEDITEC AG NPV,"
"0DHJ AUTOGRILL SPA EUR0.52,"
"0DJA ALGETA ASA NOK10,"
"0DJI ALM. BRAND DKK80,"
"0DJV ALTRI SGPS S.A. EUR0.25,"
"0DK6 AMBU INTERNATIONAL `B`DKK10,"
"0DK9 AMADEUS AG PERSONALDIENSTLEI NPV,"
"0DKX AEDIFICA NPV,"
"0DLI AMSTERDAM COMMODITIES NV EUR0.45,"
"0DME ASCOPIAVE SPA EUR1,"
"0DMQ ASTALDI EUR2,"
"0DN0 ALPHAFORM AG NPV,"
"0DNH ATOS ORIGIN EUR1,"
"0DNU AURIGA INDUSTRIES `B`DKK10,"
"0DNW AUSTEVOLL SEAFOOD ASA NOK0.50,"
"0DOL BIOFRONTERA AG NPV,"
"0DOS BANK HANDLOWY W WARSZAWIE PLN4,"
"0DP0 BANK PEKAO SA PLN1,"
"0DP4 BASWARE OYJ NPV,"
"0DPB BAVARIAN NORDIC RESEARCH INDSTITUTE DKK10,"
"0DPG BPI SOCIEDADE GESTORA PARTIC SOCIAI EUR1(REGD),"
"0DPM BECHTLE AG NPV,"
"0DPU BELGACOM NPV,"
"0DQ7 BEIERSDORF AG NPV,"
"0DQG BANCO ESPIRITO SANTO SA EUR5(REGD),"
"0DQH BE SEMICONDUCTOR INDUSTRIES NV EUR0.91,"
"0DQZ BANCA GENERALI EUR1,"
"0DRH BANK MILLENNIUM S.A. PLN1,"
"0DRM BANCA INTERMOBILIARE SPA EUR1,"
"0DUG BRUNEL INTERNATIONAL EUR0.05,"
"0DUK BIESSE EUR1,"
"0DV6 BULL SA EUR0.1,"
"0DVJ BWG HOMES ASA NOK0.1,"
"0DVR BANK ZACHODNI WBK PLN10,"
"0DWO CREDITO BERGAMASCO EUR3,"
"0DXG CROPENERGIES AG NPV,"
"0DYD CENTROTEC SUSTAINABLE NPV,"
"0DYL ACANTHE DEVELOPMENT NPV,"
"0DZC ACERIAS Y FORJAS DE AZCOITIA EUR0.25,"
"0DZL CLAVIS PHARMA NOK1 `A`,"
"0E1N DAVIDE CAMPARI EUR0.1,"
"0E1S CRAMO PLC NPV,"
"0E2N CITYCON OYJ NPV,"
"0E3C DATALOGIC SPA EUR0.52,"
"0E3G DANUBIUS HOTEL AND SPA HUF1000(REGD),"
"0E40 DEA CAPITAL SPA EUR1,"
"0E4J DELTICOM AG NPV (REGD),"
"0E4K DEUTZ AG NPV,"
"0E4L DFDS AS DKK100,"
"0E5M DE LONGHI EUR3,"
"0E5V DIGITAL MULTIMEDIA TECHNOLOGIES SPA ORD EUR0.10,"
"0E6Y DRILLISCH AG NPV,"
"0E7S DEVOTEAM SA EUR0.15,"
"0E80 ESTAVIS AG NPV,"
"0EA2 ELICA EUR0.2,"
"0EBQ ENAGAS SA EUR1.50,"
"0EBV ENGINEERING INGEGNERIA INFORMATICA EUR2.55,"
"0EDZ EUROBANK PROPERTIES REAL EST INV CO COM NPV,"
"0EEE CTS EVENTIM NPV,"
"0EEI EVN AG NPV,"
"0EEV EXMAR SA NPV,"
"0EGH FIERA MILANO EUR1,"
"0EHF FRED OLSEN ENERGY ASA NOK20,"
"0EIE F-SECURE OYJ NPV,"
"0EKA GETIN HOLDING SA PLN1,"
"0EL9 GERATHERM MEDICAL AG NPV,"
"0ELC NORBERT DENTRESSANGLE EUR1.60,"
"0ELN BOURBON SA NPV,"
"0ELP GROUPE PIZZORNO ENVIRONNEMENT EUR5.354,"
"0EM7 GRIFOLS SA ORD EUR0.5,"
"0EM8 GANGER ROLF ASA NOK1.25,"
"0EMK GAS PLUS SPA EUR0.52,"
"0ENN HORNBACH BAUMARKT AG NPV,"
"0EOF HEXAGON COMPOSITES ASA NOK0.10,"
"0EPW HOCHTIEF AG NPV,"
"0EUH INDUS-HOLDING AG NPV,"
"0EVI INNATE PHARMA A EUR0.05,"
"0EW0 INTESA SANPAOLO SPA DI RISP EUR0.52(NON CNV),"
"0EW1 ISRA VISION AG NPV,"
"0EWD INTERPUMP GROUP EUR0.52,"
"0EWO INVISION SOFTWARE AG NPV,"
"0EX7 JENOPTIK AG NPV,"
"0EXG JERONIMO MARTINS SGPS EUR1.,"
"0EXP JUNGHEINRICH NON VTG PRF SHS NPV,"
"0EYG KBC GROUPE SA NPV,"
"0EYI KONTRON AG ORD NPV,"
"0F08 KONGSBERG GRUPPEN ASA NOK5,"
"0F1N KWS SAAT AG NPV,"
"0F2Q LA DORIA SPA EUR1.22,"
"0F2S LINEDATA SERVICES EUR1,"
"0F4I KLEPIERRE EUR1.40,"
"0F6L MAUREL & PROM EUR0.77,"
"0F7F DURO FELGUERA EUR0.5,"
"0F89 METSO OYJ NPV1.70,"
"0FA0 MELEXIS NPV,"
"0FB0 MOTA ENGIL SGPS EUR1,"
"0FBS MOBISTAR NPV,"
"0FC9 MTU AERO ENGINES INVEST NPV (REGD),"
"0FDT NEMETSCHEK AG ORD NPV,"
"0FF9 NORDIC SEMICONDUCTOR NOK0.05,"
"0FFY NOKIAN RENKAA(NOKIAN TYRES) EUR0.2,"
"0FG8 AUDI AG NPV,"
"0FGH NORWEGIAN AIR SHUTLE ASA NOK0.10,"
"0FGK NEXTRADIOTV PROMESSES EUR0.04,"
"0FGL NEXUS AG NPV,"
"0FH7 OHB TELEDATA AG NPV,"
"0FI1 OPAP SA EUR0.30(CR),"
"0FI5 OPERA SOFTWARE SA NOK0.02,"
"0FIN ORKLA ASA NOK1.25,"
"0FIZ HELLENIC TELECOM.ORGANIZATION S.A. EUR2.39,"
"0FJ8 OUTOKUMPU OYJ `A`NPV,"
"0FJC PATRIZIA IMMOBILIEN AG NPV,"
"0FM1 PIAGGIO & C SPA EUR0.52,"
"0FMN POLSKI KONCERN NAFTOWY ORLEN SA PLN1.25,"
"0FMO POWSZECHNA KASA OSZCZED BK POLSKI PLN1,"
"0FO8 POEYRY OYJ NPV,"
"0FOS PRECIA NPV,"
"0FP9 BANCA PROFILO EUR0.52,"
"0FPB PARIS ORLEANS EUR2,"
"0FPQ PHOENIX SOLAR AG ORD (NPV),"
"0FQ8 PORTUGAL TELECOM SGPS SA EUR0.35(REGD),"
"0FQI PUBLICIS GROUPE SA EUR0.40,"
"0FQR PFEIFFER VACUUM TECHNOLOGY ORD NPV,"
"0FRE QUEST FOR GROWTH NPV,"
"0FRJ RATIONAL AG NPV,"
"0FRZ ROYAL UNIBREW A/S DKK10,"
"0FS8 RENEWABLE ENERGY CORP AS NOK1,"
"0FSU ROCKSOURCE ASA NOK0.252713,"
"0FUN RAUTARUUKKI OY `K`NPV,"
"0FUZ RWE AG(NEU) NON VTG PRF NPV,"
"0FV0 METALEUROP SA EUR3.81,"
"0FVZ SAFT GROUPE S.A. EUR1,"
"0FWF SMT SCHARF AG NPV (BR),"
"0FWY SALMAR ASA NOK0.25,"
"0FYM SECURIDEV EUR15,"
"0G0W SIAS EUR0.50,"
"0G29 SEMPERIT HLDGS AG NPV,"
"0G2X SOFINA NPV,"
"0G30 SOCFINASIA NPV,"
"0G33 SOLAR A/S `B`DKK100,"
"0G45 SPAREBANKEN SOR NOK10,"
"0G68 KENDRION N.V. EUR2,"
"0G6J SEKTKELLEREI SCHLOSS WACHENHEIM AG NPV,"
"0G6T SYMRISE AG NPV,"
"0G77 SALZGITTER AG ORD NPV,"
"0G7B SUDZUCKER AG NPV,"
"0G8C TELENOR ASA ORD NOK6,"
"0G91 TREVI FINANZIARIA INDUSTRIALE EUR0.50,"
"0G99 THROMBOGENICS NPV,"
"0G9J TAMBURI INVESTMENT PARTNERS EUR0.52,"
"0G9W GESTEVISION TELECINCO SA ORD EUR0.5,"
"0GA3 TELECOM ITALIA SPA(NEW) DI RISP EUR0.55,"
"0GAF TELENET NPV,"
"0GB6 TECHNOPOLIS OYJ NPV,"
"0GB7 TELEKOMUNIKACJA POLSKA PLN3,"
"0GC8 TAKKT AG NPV,"
"0GDR UNIQA VERSICHERUNG AG NPV,"
"0GE4 UNITED INTERNET AG NPV,"
"0GED VISCOM AG NPV,"
"0GEF VACON NPV,"
"0GEJ VALSOIA S.P.A. EUR0.33,"
"0GF6 VEIDEKKE NOK0.5,"
"0GKA YIT OYJ NPV,"
"0GM2 LEROY SEAFOOD GROUP NOK1,"
"0GMP HOMAG GROUP AG NPV,"
"0GN9 STRATEC BIOMEDICAL INC NPV,"
"0GNM REZIDOR HOTEL GROUP AB NPV,"
"0GNN CAT OIL AG NPV,"
"0GO4 SWEDISH MATCH AB NPV,"
"0GO5 KAPPAHL HLDG AB SEK0,"
"0GOW NIBE INDUSTRIER AB SER`B`NPV,"
"0GP0 KLOVERN AB NPV,"
"0GPE AIR BERLIN EUR1,"
"0GQE CLAS OHLSON AB SER `B` NPV,"
"0GRG KUNGSLEDEN NPV,"
"0GRK MILLICOM INTERNATIONAL CELLULAR BDR EACH REP 1 USD1.50 MILLICOM INTL,"
"0GRN ATLAS COPCO AB SER`A`NPV,"
"0GRX HEXAGON AB SER`B`NPV,"
"0GSU MEDA AB SER`A`NPV,"
"0GT1 CASTELLUM AB SEK0.50,"
"0GTM DIOS FASTIGHETER AB NPV,"
"0GTN BIOGAIA AG SER`B`NPV,"
"0GTO KAPSCH TRAFFICCOM AG NPV,"
"0GTP FINGERPRINT CARDS AB SER`B`NPV,"
"0GTR HUSQVARNA SER`B`NPV,"
"0GUV AARHUSKARLSHAMN AB NPV,"
"0GUX SKANDINAVISKA ENSKILDA BANKEN SER`C`NPV,"
"0GUY SCANIA AB SER`A`NPV,"
"0GUZ BILIA AB SER A NPV,"
"0GW0 NOBIA AB NPV,"
"0GW3 HUFVUDSTADEN AB SER`A`NPV,"
"0GWB LUNDBERGFORETAGEN AB SER`B`NPV,"
"0GWC AXIS AB ORD NPV,"
"0GWG WIHLBORG FASTIGHETER AB(PUBL) NPV,"
"0GWJ CLINICA BAVIERA SA EUR0.01,"
"0GWL SAAB AB SER`B`NPV,"
"0GWR SVOLDER AB SERIES`B`NPV,"
"0GWS BILLERUD AB NPV,"
"0GXF ADVANCED VISION TECH ILS2,"
"0GXJ MODERN TIMES GROUP(MTG) SER`B`NPV,"
"0GY8 AEFFE SPA EUR0.25,"
"0GYM ACKERMANS NPV(POST SPLIT),"
"0GZV GETINGE AB SER`B`NPV,"
"0GZW SCANIA AB SER`B`NPV,"
"0GZX DIASORIN S.P.A. EUR1,"
"0H00 BANCO DE SABADELL SA EUR0.125,"
"0H0F ORESUND INVESTMENT AB NPV,"
"0H13 INDUSTRIVARDEN AB SER`A`NPV,"
"0H19 OREXO AB NPV,"
"0H1Z QIAGEN NV EUR0.01,"
"0H22 BIOINVENT AB NPV,"
"0H2O MELKER SCHORLING AB NPV,"
"0H2Z FASTIGHETS BALDER AB NPV,"
"0H30 INDUTRADE AB NPV,"
"0H32 SVENSKA HANDELSBANKEN SER`B`NPV,"
"0H3Q DEUTSCHE POST AG NPV(REGD),"
"0H3T DEUTSCHE BOERSE AG NPV,"
"0H3X LINDE AG NPV,"
"0H4A DEUTSCHE LUFTHANSA AG NPV,"
"0H4N GAMESA CORPORACION TECNOLOGICA SA ORD EUR0.17,"
"0H50 ZELTIA SA EUR0.05(NEW),"
"0H59 ACCOR EUR3,"
"0H65 JUVENTUS FOOTBALL CLUB SPA EUR0.10,"
"0H6A BANCA MONTE DEI PASCHI DI SIENA EUR0.67,"
"0H6I TELECOM ITALIA SPA(NEW) EUR0.55,"
"0H6T SWEDBANK AB SER`A`NPV,"
"0H6U ASSA ABLOY AB SER'B'NPV,"
"0H6X TELIASONERA AB NPV,"
"0H78 ATLAS COPCO AB SER`B`NPV,"
"0H7B WINCOR NIXDORF NPV,"
"0H7D DEUTSCHE BANK AG ORD NPV(REGD),"
"0H7I LANXESS AG NPV,"
"0H7O BANKINTER SA EUR0.30(REGD),"
"0H9P INTRUM JUSTITIA AB NPV,"
"0H9X FRESENIUS MEDICAL CARE AG & CO.KGAA NPV,"
"0HA0 RWE AG(NEU) NPV`A`,"
"0HA8 CORPORACION FINANCIERA ALBA EUR1,"
"0HA9 INDRA SISTEMAS S.A EUR0.20'A',"
"0HAA FOMENTO DE CONSTRUCCIONES Y CONTRA EUR1,"
"0HAB INDUSTRIA DE DISENO TEXTIL SA EUR0.15,"
"0HAC ACS ACTIVIDADES DE CONSTRUCCION Y ORD EUR0.5,"
"0HAF NOKIA CORP NPV0.06,"
"0HAG SAMPO SER'A'NPV,"
"0HAH FORTUM OYJ EUR3.40,"
"0HAI CREDIT AGRICOLE EUR3,"
"0HAN BOUYGUES EUR1,"
"0HAP LAFARGE EUR4,"
"0HAR AXA EUR2.29,"
"0HAT PERNOD-RICARD NPV,"
"0HAU LVMH MOET-HENNESSY LOUIS VUITTON EUR0.30,"
"0HAZ CAP GEMINI EUR8,"
"0HB1 CASINO GUICHARD-PERRACHON EUR1.53,"
"0HB2 LAGARDERE GROUP S.C.A. EUR6.10(REGD),"
"0HB4 DASSAULT SYSTEMES SA EUR1,"
"0HB5 BNP PARIBAS EUR2,"
"0HBA EDF EUR0.50,"
"0HBC INTESA SANPAOLO SPA EUR0.52,"
"0HBF MEDIOBANCA SPA EUR0.50,"
"0HBM MEDIOLANUM EUR0.10,"
"0HBO GRUPPO EDITORIALE L'ESPRESSO EUR0.15,"
"0HBP HENNES & MAURITZ AB NPV 'B',"
"0HBT SKANSKA AB SER'B'NPV,"
"0HBV SVENSKA HANDELSBANKEN SER'A'NPV,"
"0HBY SKANDINAVISKA ENSKILDA BANKEN SER'A'NPV,"
"0HC0 SANDVIK AB NPV,"
"0HDJ MEKONOMEN AB NPV,"
"0HDP D/S NORDEN DKK1,"
"0HEZ EAST CAPITAL EXPLORER AB NPV,"
"0HF4 EOC LTD SGD0.00001,"
"0HG6 ORIFLAME COSMETICS SDR EACH REPR 1 ORD,"
"0HH1 UNIBET GROUP PLC SDR,"
"0HHI SURTECO SE NPV,"
"0HI8 ASIAN BAMBOO AG NPV (BR),"
"0HIT IBERDROLA SA EUR0.75,"
"0HNK ABLYNX N.V. NPV,"
"0HNZ ARSEUS NV NPV,"
"0HO3 COLEXON ENERGY AG NPV,"
"0HR3 DUNI AB SEK10,"
"0HTF NORWEGIAN ENERGY CO SA NOK3.10,"
"0HTP VOLVO(AB) SER`B`NPV,"
"0HV2 HERMES INTERNATIONAL NPV,"
"0HW0 KONGSBERG AUTOMOTIVE ASA NOK0.50,"
"0HXB TENARIS S.A. USD1,"
"0HY2 CEMENTIR SPA EUR1,"
"0HY6 EURO DISNEY S.C.A. EUR1,"
"0HYK SEADRILL LTD USD2,"
"0HZC EURAZEO ORD NPV,"
"0HZD WENDEL INVESTISSEMENT EUR4,"
"0HZW VIEL & CIE EUR0.20,"
"0I1W ROYAL CARIBBEAN CRUISES COM STK USD0.01,"
"0I2R ATLANTIA SPA EUR1,"
"0I3Z DEUTSCHE EUROSHOP AG NPV,"
"0I5O BERGMAN & BEVING AB SER B NPV,"
"0I8Y ELISA OYJ NPV,"
"0IAH SECURITAS AB SER`B`NPV,"
"0IB0 ARKEMA EUR10,"
"0ICL POHJOLA BANK PLC NPV SER`A`,"
"0ID8 GROUPE PARTOUCHE EUR2,"
"0IE9 SEMAPA SOC INVEST E GESTAO SGPS EUR1,"
"0IEB TECHNIP NPV,"
"0IGF NEXANS EUR1,"
"0IHK NATIXIS EUR1.6 (POST SUBDV),"
"0IHM ATRIUM LJUNGBERG SER`B`NPV (POST SPLIT),"
"0II2 KONE OYJ NPV ORD `B`,"
"0IIF VIVENDI EUR5.5,"
"0IIH PPR EUR4,"
"0IKH KOMERCNI BANKA CZK500,"
"0IKJ WARTSILA OYJ ABP EUR3.5,"
"0IKK DIGIA PLC NPV,"
"0ILL LABORATORIOS FARMACEUTOCOS ROVI SA EUR0.06,"
"0IM3 AKER PHILADELPHIA SHIPYARD NOK10,"
"0IN2 GROUPE BRUXELLES LAMBERT(NEW) NPV,"
"0INB ST MICROELECTRONICS EUR1.04,"
"0IPT AKER SOLUTIONS ASA NOK2,"
"0IQU MERCIALYS EUR1,"
"0IR5 LOGWIN AG NPV,"
"0IRF EVOTEC AG NPV,"
"0ISM HKSCAN CORP NPV,"
"0IT3 SCOR EUR7.876972,"
"0IU8 SAFRAN S.A. EUR0.20,"
"0IUE TOUR EIFFEL EUR48,"
"0IUQ CNP ASSURANCES EUR4,"
"0IVM SPAREBANKEN MIDT NORGE PRIMARY CAPITAL CERT NOK25,"
"0IW5 THALES EUR3,"
"0IWB CIMPOR CIMENTOS DE PORTUGAL EUR1(REGD),"
"0IWK ALTRAN TECHNOLOGIES EUR0.50,"
"0IWV VAN DE VELDE ORD NPV,"
"0IXY FONCIERE LYONNAISE EUR2,"
"0IXZ BOLLORE SA EUR16,"
"0IY1 ATRIA EUR1.70,"
"0IYN MOLOGEN HLDGS AG ORD NPV,"
"0IZ2 SONAE.COM SGPS S.A EUR1,"
"0IZ8 HENKEL AG & CO KGAA NPV(BR),"
"0IZC HENKEL AG & CO KGAA NON.V PRF NPV,"
"0J00 BRAIN FORCE HLDG AG NPV,"
"0J04 ALLGEMEINE BAUGESELLSCHAFT PORR AG NPV(VAR),"
"0J1N SPAREBANKEN NORD NORGE NOK50,"
"0J1Z ZON MULTIMEDIA SERVICIOS EUR0.01,"
"0J2R ALSTOM EUR14,"
"0J2W BIOTIE THERAPIES CORP EUR1,"
"0J35 GROUPE FLO EUR2,"
"0J3F SODEXHO EUR4,"
"0J3X COFINIMMO ORD NPV,"
"0J5B ELECTROMAGNETIC GEOSERVICES NOK0.25,"
"0J5V DEEP SEA SUPPLY PLC USD0.02,"
"0J5Y PROSAFE SE EUR0.25,"
"0J6V FONCIERE DES REGIONS GFR EUR3,"
"0J6X TELEPERFORMANCE EUR2.50,"
"0J6Y SOCIETE GENERALE EUR1.25,"
"0J7U LE BELIER EUR1.52,"
"0J9C DUERR AG NPV,"
"0J9O MANZ AUTOMATION AG NPV,"
"0JA9 KINNEVIK INVESTMENTS AB SER`A`NPV,"
"0JAA KINNEVIK INVESTMENTS AB SER`B`NPV,"
"0JBY ELANDERS AB SER`B`NPV,"
"0JEA HEXPOL CLS`B`NPV,"
"0JGL PCI BIOTECH HOLDING ASA NOK3,"
"0JH4 SPAR NORD BANK AS DKK10,"
"0JHU PORSCHE AUTOMOBIL HLDG SE NON VTG PRF NPV,"
"0JI3 BADGER EXPLORER ASA NOK0.125,"
"0JI9 THIN FILM ELECTRONICS ASA NOK0.11,"
"0JII SPECTRUM ASA NOK1,"
"0JJ5 VOLTA FINANCE LIMITED NPV,"
"0JK4 TAG TEGERNSEE IMMO AG NPV,"
"0JLQ SANOMA CORP NPV,"
"0JN9 DSV DKK1,"
"0JNI EUTELSAT COMMUNICATIONS EUR1,"
"0JNL NORDEA BANK AB NPV,"
"0JO1 SONAE INDUSTRIA EUR5,"
"0JOD JINHUI SHIPPING & TRANSPORTATION ORD USD0.05,"
"0JOE KUKA AG NPV,"
"0JOP RAMADA INVESTIMENTOS SGPS SA EUR1,"
"0JQQ ARCHER-DANIELS-MIDLAND CO COM STK NPV,"
"0JR9 REINET INVESTMENTS SCA NPV,"
"0JWO ATEA ASA NOK10,"
"0JX3 KINEPOLIS GROUP NPV,"
"0JXZ GALAPAGOS NV ORD NPV,"
"0JYO BB BIOTECH CHF1,"
"0JYZ LOOMIS AB NPV`B`,"
"0K4O ICADE (NEW) NPV,"
"0K4Y FUNCOM EUR0.04,"
"0K5E DRAGERWERK AG NON VTG PREF NPV,"
"0K6S REALDOLMEN SA NPV,"
"0K78 ASSICURAZIONI GENERALI SPA EUR1,"
"0K7F AURUBIS AG ORD NPV,"
"0K7I WILLIAM DEMANT HLDGS DKK1,"
"0K7Y AMER SPORTS CORP NPV`A`,"
"0K82 AUTOSTRADA TORINO-MILANO-SPA EUR0.50,"
"0K8K CERMAQ ASA NOK10,"
"0K8L CENTRAL EUROPEAN MEDIA ENTERPRISES COM STK USD0.08 CLASS`A`,"
"0K8Q CLUB MEDITERRANEE EUR4,"
"0K8W DERICHEBOURG EUR2,"
"0K93 CREDITO EMILIANO SPA EUR1,"
"0K96 GRUPO EMPRESARIAL ENCE SA EUR0.9,"
"0K97 ELECNOR SA EUR0.1,"
"0K9A EURONAV NPV,"
"0K9H FAES FARMA SA EUR0.1,"
"0K9P GN STORE NORD DKK4,"
"0K9Q GOLDEN OCEAN USD0.1,"
"0K9V HAL TRUST CERTS(1 UNIT),"
"0K9W HUHTAMAKI OYJ `I`NPV,"
"0KA0 INGENICO EUR1,"
"0KA3 IPSOS EUR0.25,"
"0KAV ARNOLDO MONDADORI EDITORE SPA EUR0.26,"
"0KB3 NEXITY EUR5,"
"0KB8 KONINKLIJKE TEN CATE NV EUR2.50,"
"0KBD ORCO PROPERTY GROUP NPV,"
"0KBO PROMOTORA DE INFORMACIONES(PRISA) EUR0.10,"
"0KBQ RATOS AB NPV SER `B`,"
"0KBS RECORDATI EUR0.125,"
"0KBT REDES ENERGETICAS NACIONAIS SGPS SA EUR1,"
"0KBX RAMIRENT OYJ NPV,"
"0KBZ REXEL PROMESSES EUR5,"
"0KC3 SPONDA OYJ NPV,"
"0KCO GROUPE STERIA EUR1,"
"0KCP TESSENDERLO CHEMIE NPV,"
"0KCQ TETRAGON FINANCIAL GROUP LIMITED ORD N/V USD0.001,"
"0KDK BARCO(NEW) NPV,"
"0KED INFINEON TECHNOLOGIES AG ORD NPV,"
"0KEH BROOKFIELD ASSET MANAGEMENT INC LIMITED VTG SHS NPV CL`A`,"
"0KFE MUNCHENER RUCKVERSICHERUNGS AG NPV(REGD),"
"0KFX DANONE ORD EUR0.25,"
"0KG0 TIETO OYJ ORD NPV,"
"0KHH GEOX S.P.A. ORD EUR0.1,"
"0KI5 UPONOR OYJ NPV,"
"0KII SSAB AB SER`A`NPV,"
"0KIZ NEW WAVE GROUP AB SER`B`NPV,"
"0KJ1 SONGA OFFSHORE EUR0.11,"
"0KJB MAN AG ORD NPV,"
"0KJL WALLENSTAM SER`B`NPV,"
"0KUR PSI AG ORD NPV,"
"0KUY PNE WIND AG NPV(REGD),"
"0KV7 TOMRA SYSTEMS ASA NOK1,"
"0KVG BLACK EARTH FARMING LTD SWEDISH DEP RECEIPT,"
"0KVR KLOEKNER & CO NPV,"
"0KVV EADS(EURO AERONAUTIC DEFENSE SPACE) EUR1,"
"0L9Q FISKARS AB OY NPV,"
"0LBF VALE SA ADR REPR 1 ORD SHS NPV SPON,"
"0LBM TRASMISSIONE ELETTRICITA RETE NAZIO ORD EUR0.22,"
"0LBN UNIONE DI BANCHE ITALIANE SCPA EUR2.5,"
"0LBS ALCATEL LUCENT EUR2`A`,"
"0LCR FUCHS PETROLUB AG NON VTG PRF NPV,"
"0LD0 GDF SUEZ EUR1,"
"0LD1 INDUSTRIA MACCHINE AUTOMATICHE(IMA) EUR0.52,"
"0LLP TISCALI SPA NPV,"
"0LN5 HUNTER DOUGLAS NV EUR0.24,"
"0LN7 AIR FRANCE - KLM EUR8.50(REGD),"
"0LN9 ROYAL DUTCH SHELL `A`ORD EUR0.07,"
"0LND AKZO NOBEL NV EUR2,"
"0LNG KONINKLIJKE PHILIPS ELECTRONICS NV EUR0.20,"
"0LNI EUROCOMMERCIAL PROPERTY NV CVA EUR0.50 (REP 10 SHS),"
"0LNJ VASTNED RETAIL EUR5,"
"0LNK CORIO NV EUR10,"
"0LNN ING GROEP N.V. CVA EUR0.24,"
"0LNQ BAM GROEP NV(KONINKLIJKE) ORD EUR0.10,"
"0LNT FUGRO NV EUR0.05,"
"0LO8 ROYAL BOSKALIS WESTMINSTER GROEP NV EUR0.8,"
"0LO9 AMG ADVANCED METALLURGICAL GROUP N. EUR0.02,"
"0LOC IMTECH NV EUR0.8,"
"0LQ1 CONTINENTAL AG NPV,"
"0LQ4 KRONES AG ORD NPV,"
"0LRI JUMBO SA EUR1.4,"
"0LS6 CINEMA CITY INTERNATIONAL N.V. EUR0.01,"
"0LVL LPP SA PLN2,"
"0M0A ROCKWOOL INTERNATIONAL `B`SHS DKK10,"
"0M0E ERCROS SA EUR1.60,"
"0M0Q SOS CORPORACION ALIMENTARIA SA EUR1.5025,"
"0M14 POLARCUS LTD USD0.02,"
"0M2O ORION CORPORATION SER`B`NPV,"
"0M2V ZOOPLUS AG NPV,"
"0M2Y LOTTOMATICA SPA EUR1,"
"0M2Z STATOIL ASA NOK2.50,"
"0M3P YOOX SPA EUR0.52,"
"0M5J DET NORSKE OLJESELSKAP ASA NOK0.20,"
"0M5U IMPRESA SGPS SA EUR0.5,"
"0M64 4 SC AG NPV,"
"0M69 OTP BANK HUF100,"
"0M6I HEIJMANS ORD,"
"0M6P S.E.S.SA FIDUCIARY DR EACH REP 1`A`SHS NPV,"
"0M6S ALLIANZ SE ORD SHS NPV(REGD),"
"0M8O ATMEL CORP COM STK USD0.001,"
"0M8V PHILIP MORRIS INTERNATIONAL INC NPV,"
"0M98 GERRY WEBER INTERNATIONAL AG NPV,"
"0M9A HANNOVER RUECKVERSICHERUNGS AG ORD NPV(REGD),"
"0MAK BANCO POPOLARE SOCIETA COOPERATIVA EUR3.6,"
"0MBG IQ POWER AG COM NPV,"
"0MC5 PUBLIC POWER CORP S.A. EUR4.60,"
"0MCG HAMBORNER REIT AG NPV,"
"0MCJ SVENSKA CELLULOSA AB-SCA SER`A`NPV,"
"0MCK SVENSKA CELLULOSA AB-SCA SER`B`NPV,"
"0MD9 NORTH ENERGY ASA NOK1,"
"0MDT ELECTROLUX AB SER`B`NPV,"
"0MEC NORDEX AG NPV(POST REVERSE-SPLIT),"
"0MET KONECRANES OYJ NPV,"
"0MF2 BRAIT NPV,"
"0MFG FAIVELEY TRANSPORT EUR1,"
"0MFI TIKKURILA OYJ NPV,"
"0MFT BEFIMMO SCA NPV SICAFI,"
"0MFU AGFA GEVAERT NV ORD NPV,"
"0MFW KBC ANCORA CVA NPV,"
"0MFY ARYZTA AG CHF0.02,"
"0MG0 AAREAL BANK EUR26,"
"0MG1 FIELMANN AG NPV,"
"0MG2 HEIDELBERGCEMENT AG NPV,"
"0MG5 ELRINGKLINGER AG NPV,"
"0MGB GENMAB AS DKK1(BR),"
"0MGC NKT HLDG AS DKK20,"
"0MGD JYSKE BANK AS DKK10,"
"0MGE SYDBANK AS DKK10,"
"0MGG KEMIRA OYJ NPV,"
"0MGH CARGOTEC CORPORATION NPV ORD `B`,"
"0MGI OUTOTEC OYJ NPV,"
"0MGJ VICAT EUR4,"
"0MGL M6-METROPOLE TELEVISION EUR0.40,"
"0MGO JC DECAUX SA NPV,"
"0MGP BIC EUR3.82,"
"0MGR FAURECIA EUR7,"
"0MGS SEB SA EUR1,"
"0MGT HAVAS EUR0.40,"
"0MGV ERAMET EUR3.05,"
"0MGX SOITEC NPV,"
"0MGY ILIAD SA EUR0.02,"
"0MH1 BUREAU VERITAS EUR0.12,"
"0MH4 PAGES JAUNES EUR0.2,"
"0MH6 IPSEN EUR1,"
"0MHA CIR-COMPAGNIE INDUSTRIALI SPA EUR0.50,"
"0MHC ERG SPA EUR0.10,"
"0MHD ACEA SPA EUR5.16,"
"0MHE EXOR SPA EUR0.52,"
"0MHJ AZIMUT HLDG SPA ORD NPV,"
"0MHM SCHIBSTED ASA NOK1,"
"0MHP DNO INTERNATIONAL ASA NOK0.25,"
"0MHQ SEVAN MARINE AS ORD NOK0.2,"
"0MHR PETROLEUM GEO SERVICES ASA NOK3,"
"0MHS NORWEGIAN PROPERTY AS NOK25,"
"0MHT PEAB AB SER`B`NPV,"
"0MHU INDUSTRIVARDEN AB SER`C`NPV,"
"0MHW VOLVO(AB) SER`A`NPV,"
"0MHX AF AB SER`B` NPV,"
"0MHZ SSAB AB SER`B`NPV,"
"0MI0 AUTOLIV INC USD1 SDR,"
"0MI1 ENIRO AB NPV,"
"0MI3 JM AB NPV,"
"0MI5 BOLIDEN AB NPV.,"
"0MI6 FABEGE AB NPV,"
"0MI7 LUNDIN MINING CORP SDR-EACH REPR 1 COM NPV,"
"0MIP CA IMMOBILIEN ANLAGEN AG NPV,"
"0MIQ CONWERT IMMOBILIEN INVEST SE NPV,"
"0MJ1 PALFINGER AG NPV,"
"0MJ5 RHI AG NPV,"
"0MJH ZUMTOBEL AG EUR10,"
"0MJK ERSTE GROUP BANK AG NPV,"
"0MJT ANTENA 3 TELEVISION EUR0.75,"
"0MJX AKER ASA SER `A` NOK28,"
"0MJZ ANDRITZ AG NPV (POST SPLIT),"
"0MK2 ATRIUM EUROPEAN REAL ESTATE LTD EUR5,"
"0MK5 CONSTRUCCIONES Y AUXILIAR DE FERR EUR3.01,"
"0MK9 DELTA LLOYD NV NPV,"
"0MKE IMMOFINANZ AG NPV,"
"0MKG OBRASCON HUARTE LAIN SA EUR0.60,"
"0MKH OMV AG NPV,"
"0MKM SLIGRO FOOD GROUP NV EUR0.06,"
"0MKO SOL MELIA S.A. EUR0.20,"
"0MKP STRABAG SE NPV,"
"0MKS TOMTOM NV NPV,"
"0MKT TECNICAS REUNIDAS EUR0.1,"
"0MKW VISCOFAN ENVOLTURAS CELULOSICAS SA EUR0.30,"
"0MKX VOEST-ALPINE AG NPV,"
"0MKZ WIENERBERGER AG NPV,"
"0ML0 SONAE SGPS SA EUR1,"
"0ML1 EDP RENOVAVEIS SA EUR5,"
"0MMJ TOM TAILOR HOLDING AG NPV,"
"0MN3 POLSKA GRUPA ENERGETYCZNA SA PLN10,"
"0MNA ROTO SMEETS NV EUR5,"
"0MNC RTL GROUP NPV,"
"0MNP BORYSZEW PLN0.1,"
"0MNQ CYFROWY POLSAT SA PLN0.04,"
"0MOP TDC A/S DKK1,"
"0MPH DEUTSCHE TELEKOM AG NPV(REGD),"
"0MPJ GEA GROUP AG NPV,"
"0MPL SGL CARBON SE NPV,"
"0MPM METRO AG NPV,"
"0MPN DEUTSCHE POSTBANK AG NPV,"
"0MPP E.ON AG NPV,"
"0MPT BRENNTAG AG NPV,"
"0MPU KABEL DEUTSCHLAND HLDG AG NPV,"
"0MQ0 NORTH MEDIA AS DKK5,"
"0MQ2 P/F BAKKAFROST DKK1,"
"0MQF LE BUONE SOCIETA SPA EUR0.52,"
"0MQY UNIT4 NV EUR0.05,"
"0MR4 BYGGMAX GROUP AB NPV,"
"0MR6 CHR HANSEN HOLD,"
"0MRM BANG & OLUFSEN HLDG DKK10 `B`,"
"0MSD COMPUGROUP MEDICAL AG NPV,"
"0MSJ TGS NOPEC GEOPHYSICAL CO ASA NOK0.25,"
"0MTD SWEDISH ORPHAN BIOVITRUM AB NPV,"
"0MTK INTERVEST OFFICES ORD NPV,"
"0MTT BANK OF PIRAEUS EUR4.77,"
"0MU2 WAREHOUSING & DISTRIBUTION DE PAUW NPV,"
"0MU6 BANCA POPOLARE DELL`EMILIA ROMAGNA EUR3,"
"0MUI RUBIS EUR5,"
"0MUM EDENRED ORD,"
"0MUN IREN SPA EUR1,"
"0MV2 FREENET AG NPV,"
"0MV5 VT GROUP ORD GBP0.05,"
"0MV8 TECHNICOLOR SA EUR0.10,"
"0MW2 STOCKMANN AB(OY) `B`EUR2,"
"0MW4 PIRELLI & CO SPA NPV,"
"0MW7 LEGRAND PROMESSE EUR4,"
"0MWK LINDAB INTL AB NPV,"
"0MYY POWSZECHNY ZAKLAD UBEZPIECZEN SA PLN1,"
"0MYZ STROER OUT-OF-HOME MEDIA AG NPV,"
"0MZX VIENNA INSURANCE GROUP NPV,"
"0N0K SCOTTISH SALMON,"
"0N1H KHD HUMBOLDT WEDAG INTL AG NPV,"
"0N2C WERELDHAVE BELGIUM NPV,"
"0N2L MEDICA EUR0.38939,"
"0N2Q BIJOU BRIGITTE NPV,"
"0N2S GAGFAH SA EUR1.25,"
"0N2X TAURON POLSKA ENERGIA SA PLN9,"
"0N2Z VOSSLOH AG NPV,"
"0N31 NORDEA BANK AB FDR EACH REPR 1 SHARE,"
"0N4I DANIELI & C DI RISP EUR1(NON CV),"
"0N4J EDISON SPA DI RISP EUR1,"
"0N4Y COLRUYT SA NPV,"
"0N54 A2A SPA EUR0.52,"
"0N5Z ALTAMIR AMBOISE EUR6,"
"0N61 AMPLIFON EUR0.02,"
"0N6B ARCADIS NV EUR0.02,"
"0N6K AVANQUEST SOFTWARE SA EUR1,"
"0N6L AXFOOD AB NPV,"
"0N6M BALDA AG NPV,"
"0N6O BASIC NET SPA EUR0.52,"
"0N6Y BINCKBANK NV EUR0.10,"
"0N70 BIOTEST AG NON VTG PRF DEM5,"
"0N73 BOLSAS Y MERCADOS ESPANOLES EUR3.23,"
"0N77 WESSANEN(KONINKLIJKE)NV CVA EUR1(POST CONSOLIDATION),"
"0N7D BURE EQUITY NPV,"
"0N7I CAIRO COMMUNICATIONS EUR0.052,"
"0N7N COMPAGNIE DES ALPES NPV,"
"0N7O COMDIRECT BANK AG NPV,"
"0N7Q C.E.G.I.D. EUR0.95(POST SUBDIV),"
"0N88 BANCA CARIGE SPA-CASSA RISP GENOVA EUR1,"
"0N8F CEWE COLOR HOLDING AG NPV,"
"0N9G ENDESA SA EUR1.2(REGD),"
"0N9I EL.EN. SPA EUR0.52,"
"0N9O EMAK EUR0.26,"
"0N9S ENI EUR1,"
"0N9Z EVS BROADCAST EQUIPMENT NPV,"
"0NAC FRANCOTYP-POSTALIA HOLDING AG EUR1,"
"0NAT GRENKELEASING AG NPV,"
"0NAV GAMELOFT EUR0.05,"
"0NB9 HAKON INVEST AB NPV,"
"0NBD HEINEKEN HLDG ORD EUR1.6,"
"0NBI HAMBURGER HAFEN UND LOGISTIK AG NPV (REGD),"
"0NBO HOLMEN AB SER`B`NPV,"
"0NBX IFIS EUR1,"
"0NC5 INVESTOR AB SER`A`NPV,"
"0NC6 INVESTOR AB SER`B`NPV,"
"0NCV LENZING AG NPV,"
"0ND2 LPKF LASER & ELECTRONICS AG NPV,"
"0ND3 LANDI RENZO SPA EUR0.10,"
"0ND5 LUNDBECK(H) A/S DKK5,"
"0ND7 LUXOTTICA GROUP EUR0.06,"
"0NDP MLP AG NPV,"
"0NDS MONTUPET EUR1.52,"
"0NDV MORPHOSYS NPV,"
"0NE1 MEDIASET SPA EUR0.52,"
"0NE5 NATRACEUTICAL SA EUR0.10,"
"0NEM NYRSTAR NV NPV,"
"0NES ORIOLA-KD CORPORATION SER`B`NPV,"
"0NEX ORPEA EUR2.5,"
"0NEZ OSTASIATISKE KOMPAGNI DKK70,"
"0NF3 PAION AG NPV(BR),"
"0NF8 CREDITO VALTELLINESE EUR3.5,"
"0NFP PRIMA INDUSTRIE SPA EUR2.5,"
"0NFS ESPRINET EUR0.15(POST SUBDIVISION),"
"0NHY REPLY SPA EUR0.52,"
"0NI0 RHJ INTERNATIONAL NPV,"
"0NI1 RHEINMETALL AG NPV,"
"0NIF SMA SOLAR TECHNOLOGY AG NPV (BR),"
"0NIR SARTORIUS NON VTG PFD NPV,"
"0NIS SBM OFFSHORE N.V. EUR0.25,"
"0NJ5 SAFILO GROUP EUR5,"
"0NJO SINGULUS TECHNOLOGIES AG EUR1,"
"0NJQ SOPRA GROUP EUR4,"
"0NJR SORIN EUR1,"
"0NJS SOFTWARE AG DARMSTADT NPV,"
"0NK7 SARTORIUS STEDIM BIOTECH EUR0.61,"
"0NK9 ANSALDO STS EUR0.5,"
"0NKL TELEKOM AUSTRIA(TA) NPV,"
"0NKT THERMADOR GROUPE EUR16,"
"0NL3 TRELLEBORG AB SER`B`NPV,"
"0NLA TUI AG NPV,"
"0NLK UNIBAIL-RODAMCO EUR5,"
"0NLS USG PEOPLE NV EUR0.5,"
"0NLV VITA 34 INTERNATIONAL AG NPV(REGD),"
"0NM6 FLUGHAFEN WIEN AG NPV,"
"0NM7 VIRBAC EUR1.25,"
"0NM8 VITTORIA ASSICURAZIONI EUR1,"
"0NMI VTG AG NPV,"
"0NMK VESTAS WIND SYSTEMS DKK1,"
"0NMR WERELDHAVE NV EUR10,"
"0NMU WOLTERS-KLUWER NV CVA EUR0.12,"
"0NNC ZIGNAGO VETRO EUR0.10,"
"0NNF ALFA LAVAL AB NPV,"
"0NNR LUNDIN PETROLEUM AB NPV,"
"0NO0 STOREBRAND ASA `A`NOK5,"
"0NO1 TKH GROUP CVA EUR0.25,"
"0NO3 ZETES INDUSTRIES NPV,"
"0NOF PROCTER & GAMBLE CO COM STK NPV,"
"0NOL ADVA AG NPV,"
"0NP8 ADP PROMESSES EUR3,"
"0NP9 AIXTRON AG ORD NPV,"
"0NPH CARREFOUR EUR2.5,"
"0NPL CHRISTIAN DIOR EUR2,"
"0NPP DSM NV EUR1.50,"
"0NPT EIFFAGE EUR4,"
"0NPV GAS NATURAL SDG SA EUR1,"
"0NPX IMERYS SA EUR2,"
"0NQ2 MAPFRE SA ORD EUR0.10,"
"0NQ5 NEOPOST EUR1,"
"0NQ9 PEUGEOT SA EUR1,"
"0NQB PARMALAT S.P.A EUR1,"
"0NQC PANDORA A/S DKK1,"
"0NQE PUMA AG NPV,"
"0NQF RENAULT(REGIE NATIONALE DES USINES) ORD EUR3.81,"
"0NQG REPSOL YPF SA EUR1,"
"0NQH RHOEN KLINIKUM AG ORD NPV,"
"0NQM VINCI EUR2.5,"
"0NQP SNAM RETE GAS EUR1,"
"0NQT TELEVISION FRANCAISE(T.F.1) EUR0.20,"
"0NQZ TITAN CEMENT CO EUR2,"
"0NR1 VERBUND AG CLASS`A`NPV,"
"0NR2 VALLOUREC(USIN A TUB DE LOR ESCAUT) EUR2,"
"0NR3 VALEO EUR3,"
"0NR4 WACKER CHEMIE AG NPV,"
"0NR6 ZODIAC AEROSPACE NPV,"
"0NR7 ZARDOYA-OTIS EUR0.10,"
"0NRE ENEL SPA EUR1,"
"0NRG BILFINGER BERGER SE NPV,"
"0NRN CATALANA OCCIDENTE SA DE SEGUROS EUR0.30,"
"0NRR INDESIT CO SPA EUR0.90,"
"0NRV SUEZ ENVIRONNEMENT CO EUR4,"
"0NSF ARCELORMITTAL SA NPV,"
"0NSI UMICORE SA NPV,"
"0NSS MARR EUR0.5,"
"0NT5 FOURLIS HLDG EUR1,"
"0NTI GERRESHEIMER GROUP NPV,"
"0NTM OESTERREICHISCHE POST AG NPV,"
"0NTR VI(Z)RT ILS0.01,"
"0NTU ELIA SYSTEM OPERATOR NPV,"
"0NUG MAGYAR TELEKOM TELECOMMUNICATIONS HUF100(REGD),"
"0NUI ABENGOA SA EUR0.25,"
"0NUK AVANZA BANK HLDG AB NPV,"
"0NUN C.M.B.(COMPANY MARITIME BELGE) NPV (POST-SPLIT),"
"0NUP DELHAIZE FRERES ET CIE(LE LION)SA NPV,"
"0NUT LEASEINVEST REAL ESTATE NPV,"
"0NUX PRYSMIAN SPA EUR0.10,"
"0NV0 SOGEFI EUR0.52,"
"0NV2 AXEL SPRINGER AG NPV,"
"0NV4 TOD`S SPA EUR2,"
"0NV5 UPM-KYMMENE OYJ NPV,"
"0NV9 BW OFFSHORE LTD COM STK USD0.01,"
"0NVC DANSKE BANK A/S DKK10,"
"0NVE ENEL GREEN POWER SPA EUR0.20,"
"0NVL UBISOFT ENTERTAINMENT NPV,"
"0NVQ BUZZI UNICEM SPA EUR0.60,"
"0NVR BUZZI UNICEM SPA EUR0.60 DI RISP(NON CNV),"
"0NVV HERA SPA EUR1,"
"0NW1 PLASTIC OMNIUM(CIE) EUR0.5,"
"0NW2 RANDSTAD HLDGS EUR0.10,"
"0NW4 SAP AG ORD NPV,"
"0NW7 SIXT AG ORD NPV,"
"0NWD ABERTIS INFRAESTRUCTURAS EUR3,"
"0NWF AIR LIQUIDE(L') EUR5.50,"
"0NWJ BANCA POPOLARE DI SONDRIO EUR3,"
"0NWR BANCA POPOLARE DI MILANO EUR3,"
"0NWS RED ELECTRICA DE ESPANA SA EUR2,"
"0NWV SCHNEIDER ELECTRIC EUR8,"
"0NWX SKF AB SER`B`NPV,"
"0NWY SAIPEM EUR1,"
"0NX1 AALBERTS INDUSTRIES EUR0.25,"
"0NX2 ABB LTD CHF1.03,"
"0NX3 ASM INTERNATIONAL NV EUR0.04,"
"0NX9 REED ELSEVIER NV EUR0.07,"
"0NXM UNILEVER NV CVA EUR0.16,"
"0NXR RAIFFEISEN BANK INTL AG NPV (REGD),"
"0NXV FALK RENEWABLES SPA EUR1,"
"0NXX DAIMLER AG ORD NPV(REGD),"
"0NY8 VEOLIA ENVIRONNEMENT EUR5,"
"0NYH EBRO FOODS SA EUR0.60,"
"0NYK IMMOBILIARE GRANDE DISTRIBUZIONE EUR1,"
"0NYX KONINKLIJKE AHOLD NV EUR0.30,"
"0NYY BANCO COMERCIAL PORTUGUES EUR1(REGD),"
"0NYZ BERTRANDT AG NPV,"
"0NZ7 MAYR-MELNHOF KARTON AG NPV,"
"0NZD AEDES(SPA LIG LOMB IMPRES E COSTR) NPV,"
"0NZF CEZ CZK100,"
"0NZM L`OREAL EUR0.20,"
"0NZR SOLVAY S.A. NPV,"
"0NZT UCB S.A. NPV,"
"0NZY ECKERT & ZIEGLER ORD NPV,"
"0O05 SCHOELLER BLECKMANN OILFIELD EUR1,"
"0O0C ASTARTA HOLDING NV EUR0.01,"
"0O0F CANCOM IT SYSTEM AG NPV,"
"0O0J LEONI AG NPV,"
"0O0N SCHOUW & CO DKK10 SER`B`,"
"0O0U BAYERISCHE MOTOREN WERKE AG EUR1,"
"0O0V BAYERISCHE MOTOREN WERKE AG NON VTG PREF EUR1,"
"0O14 MERCK KGAA NPV,"
"0O1C THYSSENKRUPP AG NPV,"
"0O1R FRAPORT AG NPV,"
"0O1W SAS AB NPV,"
"0O1Z ANHEUSER-BUSCH INBEV SA NPV,"
"0O26 HEINEKEN NV EUR1.60,"
"0O27 DR HOENLE AG NPV,"
"0O2D SARAS RAFFINERIE SARDE SPA NPV,"
"0O2G H & R WASAG AG NPV,"
"0O2R CREDIT AGRICOLE D`ILE-DE FRANCE EUR4(CERTS D`INVEST),"
"0O2T CFE NPV,"
"0O2V CGG VERITAS EUR0.40,"
"0O2X IMMSI SPA EUR0.52,"
"0O46 NESTE OIL NPV,"
"0O4L MAGYAR OLAJ-ES GAZIPARE RESZVENYTAR HUF1000,"
"0O4N SAF HOLLAND NPV,"
"0O59 SANOFI-AVENTIS EUR2,"
"0O5C AUSTRIA TECHNOLOGY SYSTEMTECHNIK NPV,"
"0O5H ELEKTA SER`B`NPV,"
"0O76 AP MOLLER-MAERSK A/S `A`DKK1000,"
"0O77 AP MOLLER-MAERSK A/S `B`DKK1000,"
"0O7A M-REAL OYJ `B`ORD EUR1.70,"
"0O7D YARA INTERNATIONAL ASA NOK1.7,"
"0O84 DNB NOR ASA NOK10,"
"0O87 TELEFONAKTIEBOLAGET LM ERICSSON NPV SER`B`,"
"0O89 HORNBACH HLDGS NON VTG PRF NPV,"
"0O8D KGHM POLSKA MIEDZ PLN10 BR,"
"0O8F KONINKLIJKE KPN NV EUR0.24,"
"0O8G MDXHEALTH SA NPV,"
"0O8V KONINKLIJKE VOPAK EUR0.50,"
"0O8X WIRE CARD AG NPV,"
"0O93 HALDEX AB ORD NPV,"
"0O98 SAVE SPA EUR0.65,"
"0O9B ALMIRALL SA EUR0.12,"
"0O9Q ALSTRIA OFFICE REIT-AG NPV (BR),"
"0OA1 PKC GROUP OYJ NPV,"
"0OA9 NOLATO AB SER`B`NPV,"
"0OAB NIEUWE STEEN INVESTMENTS NV EUR0.46,"
"0OAW MARINE HARVEST ASA NOK0.75,"
"0OBK BIOMERIEUX EUR1,"
"0OBQ DEUTSCHE WOHNEN AG NEW NPV,"
"0OBU EXACT HLDGS EUR0.02,"
"0OBV FIAT SPA EUR3.5,"
"0OC2 HEIDELBERGER DRUCKMASCHINEN AG NPV,"
"0OCM SKY DEUTSCHLAND AG NPV,"
"0OEY D AMICO INTERNATIONAL SHIPPING NPV,"
"0OF3 BENI STABILI SPA EUR0.1,"
"0OF7 ENERGIAS DE PORTUGAL SA EUR1,"
"0OFM MICHELIN(CIE GLE DES ETABL.) EUR2(REGD),"
"0OFP NCC SER`B`NPV,"
"0OFQ AUSY EUR1,"
"0OFR POLISH OIL & GAS PLN1,"
"0OFU SACYR VALLEHERMOSO SA EUR1,"
"0OG4 AFFINE(EX-IMMOBAIL) NPV,"
"0OGA GEMALTO EUR1,"
"0OGK SUBSEA 7 SA COM STK USD2,"
"0OHG NH HOTELES S.A. EUR2,"
"0OHL TELEFONICA O2 CZECH REPUBLIC A.S. CZK100,"
"0OHN TRYG AS DKK25,"
"0OIQ ACERINOX SA ORD EUR0.25,"
"0OIR ALK-ABELLO A/S DKK10 ORD `B`,"
"0OJA FLSMIDTH & CO AS DKK20,"
"0OJC GJENSIDIGE FORSIKRING ASA NOK2,"
"0OK1 VIANINI LAVORI EUR1,"
"0OK7 AKKA TECHNOLOGIES EUR1.53,"
"0OKB DINAMIA CAPITAL PRIVADO SCR SA EUR3,"
"0OKL ALPHA BANK A E EUR4.7,"
"0OKR HELLENIC EXCHANGES HLDGS EUR1.75,"
"0OLD ADIDAS AG NPV,"
"0OLF APERAM ORD,"
"0OLG BAUER AG NPV,"
"0OLJ BREMBO SPA EUR0.52,"
"0OLN DIALOG SEMICONDUCTOR GBP0.10,"
"0OM4 STADA ARZNEIMITTEL AG ORD NPV(REGD)(VINKULIERT),"
"0OMB CATTOLICA ASSICURAZIONI EUR3,"
"0OMK ESSILOR INTERNATIONAL EUR0.18,"
"0ON7 D`IETEREN NV NPV,"
"0ONG FINMECCANICA SPA EUR4.4,"
"0OO9 FRESENIUS AG NPV,"
"0OOJ ORDINA NV EUR0.10,"
"0OOS AD PEPPER MEDIA INTL NV EUR0.05,"
"0OP0 GILDEMEISTER AG NPV,"
"0OPB CELESIO AG NPV,"
"0OPE GECINA EUR7.50,"
"0OPJ ABC ARBITRAGE EUR0.016,"
"0OPS KORIAN EUR5,"
"0OQJ BEKAERT SA NPV,"
"0OQN DU PONT(E.I.)DE NEMOURS & CO COM STK USD0.30,"
"0OQS BOUSORAMA EUR0.40,"
"0OQV FRANCE TELECOM EUR4,"
"0OQX GRAMMER AG NPV,"
"0OR4 XING AG NPV,"
"1SBA ONESAVINGS BANK PLC 6.591% PERP SUB BDS GBP1000,"
"1SBB ONESAVINGS BANK PLC 7.875% PERP SUB BDS GBP1000,"
"30BF LCR FINANCE 5.1% GTD BDS 7/3/51 GBP(VAR),"
"30CG BARCLAYS BANK PLC 6% CALL PERP CORE TIER 1 NTS GBP(VAR),"
"30EE STANDARD LIFE PLC 6.75% PERP RESET SUB GTD BDS GBP(VAR),"
"30HJ ANGLIAN WATER SERVICE FINANCE 5.837% WRAPPED BDS 30/7/22 GBP(VAR)`A`,"
"30HN ANGLIAN WATER SERVICE FINANCE 6.293% UNWRAPPED BDS 30/7/30 GBP(VAR)`A`,"
"30PY BCP FINANCE BANK 6.25% SUB NOTES 29/3/2011 EUR(VAR),"
"31CL TESCO 5.5% NTS 13/12/19 GBP1000,"
"31CM TESCO 5.5% NTS 13/1/33 GBP(VAR),"
"31HI SOUTHERN WATER SERVICES FINANCE SUB CLS`A1`6.192% WRAPPD BDS 31/3/29 GBP,"
"31LS ROYAL BANK OF SCOTLAND SUBORD STEP-UP NTS 28/1/16 EUR(VAR),"
"31ML IMPERIAL TOBACCO FINANCE 6.25% NOTES 4/12/18 GBP(VAR),"
"31OL GKN HLDGS 6.75% BDS 28/10/2019 GBP(VAR),"
"31XT BROADGATE FINANCING CLS'C2'5.098% BDS 05/04/35 GBP5000,"
"31YI EUROFIMA 4.5% INST 06/03/15 USD(VAR),"
"32BL SEGRO PLC 5.5% NTS 20/06/18 GBP(VAR),"
"32DM WESTFIELD EUR FINANCE 5.5% GTD NTS 27/6/17 GBP50000,"
"32DP HSBC HLDGS 3.625% CALL SUB NTS 29/6/2020 EUR1000,"
"32NJ GREAT PORTLAND ESTATES PLC 5.625% 1ST MTG DEB STK 2029,"
"32OB ISRAEL(STATE OF) 3.75% NTS 12/10/15 EUR1000,"
"32OP JPMORGAN CHASE & CO SUB FLTG RATE NTS 12/10/15 EUR50000,"
"32RM RL FINANCE BONDS 6.125%/STP-UP CUM SUB GTD PERP NTS GBP,"
"32TF SOUTHERN ELECTRIC POWER DISTRIBUTIO 4.625% NTS 20/02/37 GBP1000,"
"32UM TESCO 5% NTS 24/03/23 GBP50000,"
"32UN TESCO 4.875% NTS 24/03/42 GBP1000,"
"32WM ROYAL BANK OF SCOTLAND FR SUB CALL STP UP NTS 11/04/16 USD,"
"32WY RSA INSURANCE GROUP PLC 6.701% PERP GTD SUB CAP SECS GBP50000,"
"32XF GE CAPITAL EUROPEAN FUNDING FLTG RATE NTS 17/05/21 EUR1000,"
"32ZH EDP FINANCE BV 4.625% INST 13/06/16 EUR50000,"
"33DR BRITISH LAND CO PLC 5.357% 1ST MTG DEB BDS 31/03/28 GBP1,"
"33ER CENTRICA PLC MUNICIPAL IDX LKD NTS 04/09/26 GBP50000,"
"33FX JPMORGAN CHASE BANK NATL ASS 5.375% SUB NTS 28/09/16 GBP50000,"
"33GC THAMES WATER UTILITIES FINANCE LD 5.125% GTD NTS 28/09/37 GBP50000,"
"33GI HBOS SUB CALL NTS 30/09/16 USD75000,"
"33GL BRITISH TELECOMMUNICATIONS 8.625% BDS 26/3/2020 GBP(VAR),"
"33HG ROYAL BANK OF SCOTLAND 4.35% SUBORD NTS 23/01/17 EUR50000,"
"33IU GE CAPITAL EUROPEAN FUNDING 4.35% NTS 03/11/21 EUR1000,"
"33KQ HBOS TREASURY SERVICES 4.875% SOC HOUSNG CVD BDS 08/11/16 GBP,"
"33LR JPMORGAN CHASE BANK NATL ASS 4.375%/FLTG RTE CALL SUB NT 14/11/21 EUR,"
"33TE NORTHERN ROCK (ASSET MANAGEMENT)PLC 4.125% CVD BDS 27/03/17 EUR50000,"
"33YX B.A.T.INTERNATIONAL FINANCE 5.375% NTS 29/06/17 EUR50000,"
"34AK GENERAL ELECTRIC CAPITAL CORP 5.5%/FLTG RTE SUB DEB 15/9/67 EUR`REGS`,"
"34AN GENERAL ELECTRIC CAPITAL CORP 6.5%/FLTG RTE SUB DEB 15/9/67 GBP `REGS`,"
"34FJ STANDARD CHARTERED BANK 7.75% SUBORD NTS 03/04/18 GBP50000,"
"34FU THAMES WATER UTILITIES CAYMAN FIN CLS`A`7.241%UNWRAP GTD BDS 09/04/58 GBP,"
"34FV ROYAL BANK OF SCOTLAND 6.934% SUBORD NTS 09/04/18 EUR50000,"
"34KY UK TREASURY STRIP UK TREASURY STRIP 7/6/2011 COUPON,"
"34MD GE CAPITAL UK FUNDING 6.75% NTS 06/08/18 GBP1000,"
"34VL STATKRAFT 5.5% NTS 02/04/15 EUR50000,"
"34WX EMIRATE OF ABU DHABI 6.75% NTS 08/04/19 USD100000`144A`,"
"34XM NORDIC INVESTMENT BANK 3% NTS 08/04/14 EUR1000,"
"34XZ SWEDBANK AB 3.375% GTD NTS 27/05/14 EUR50000,"
"34YQ BARCLAYS BANK PLC 5.25% NTS 27/05/14 EUR50000,"
"35BW HSBC HLDGS 6% SUBORD NTS 10/06/19 EUR50000,"
"35CE QTEL INTERNATIONAL FINANCE LTD 7.875% GTD NTS 10/06/19 USD100000 REG`S,"
"35DB ABBEY NATIONAL TREASURY SERVICES 5.5% SNR NTS 18/06/14 GBP50000,"
"35LK NORTHERN IRELAND ELECTRICITY 6.875% BDS 18/9/2018 GBP(VAR),"
"35LS HSBC BANK PLC 5.375% SUB NTS 22/8/33 GBP(VAR),"
"35PG FRIENDS PROVIDENT 6.875% STEP-UP TIER 1 INS CP SEC GBP VAR,"
"35PT PREMIERTEL CLS`B`6.175% BDS 8/5/32 GBP1000,"
"35SU GMAC LLC 5.375% NTS 06/06/11 EUR1000,"
"35VK RSA INSURANCE GROUP PLC 8.5% CUM STEP UP PERP NTS GBP(VAR)REG`S,"
"35VS SOUTH EAST WATER(FINANCE) 5.5834%WRAPPED BDS 29/03/29 GBP(VAR)`A2,"
"36EG ROYAL BANK OF SCOTLAND 4.875% SUB NTS 22/04/15 EUR(VAR),"
"36EL GLAXOSMITHKLINE CAPITAL 4% NTS 16/06/25 EUR(VAR),"
"36RW PEARL GROUP HLDGS (NO.1) LTD 6.5864%/FR PERP RESET CAP SECS GBP50000,"
"36TF WACHOVIA BANK NATIONAL ASSOC 5.25% SUBORD NTS 01/08/23 GBP50000,"
"36TG WELLS FARGO & CO 4.375% NTS 01/08/16 EUR50000,"
"36YW WM COVERED BOND PROGRAM 4% SERIES 2 CVD BDS 26/11/16 EUR50000,"
"37AR MERRILL LYNCH & CO INC 4.625% REG NTS 14/09/18 EUR50000,"
"37AU GENERAL ELECTRIC CAPITAL CORP 4.625%/FR EU SUB DEB 15/9/66 EUR`REGS`,"
"37QC MEADOWHALL FINANCE PLC CLS`A1`4.986% BDS 12/7/37 GBP50000,"
"37XS MORGAN STANLEY EURO FLTG RATE SNR NTS 02/05/14 EUR50000,"
"37ZC JPMORGAN CHASE BANK NATL ASS 4.625%/FR CALL SUBORD NTS 31/05/17 EUR,"
"38BX BARCLAYS BANK PLC 6.05% SUBORD NTS 04/12/17 USD `REGS`,"
"38JO ANGLO AMERICAN CAPITAL 6.875% GTD NTS 01/05/18 GBP50000,"
"38OG BANK OF AMERICA CORP 7% SNR NTS 31/07/28 GBP50000,"
"38RC ROYAL BANK OF CANADA 5.75% DEPOSIT NTS 25/07/11 EUR50000,"
"38SZ HSBC BANK PLC LEPO WTS 19/02/19(CHINA CITIC BANK)USD,"
"38WL VATTENFALL AB 6.25% NTS 17/03/21 EUR50000,"
"38XI UNILEVER 4% NTS 19/12/14 GBP2000,"
"38YE NOKIA CORP 6.75% NTS 04/02/19 EUR50000,"
"39AZ HSBC BANK PLC LEPO WTS 11/02/19(SHANGHAI PUDONG DEV),"
"39BB HSBC BANK PLC LEPO WTS 11/02/19(`A`DAQIN RAILWAY) USD,"
"39BD HSBC BANK PLC LEPO WTS 11/02/19(`A`SHENZHEN DEV BK)USD,"
"39BF HSBC BANK PLC LEPO WTS 11/2/19(CHINA SHENHUA ENGY) USD,"
"39BG HSBC BANK PLC LEPO WTS 11/02/19(`A`CHINA VANKE CO)USD,"
"39BQ G4S PLC 7.75% NTS 13/05/19 GBP50000,"
"39GJ 6.35% SEC BDS 08/07/41 GBP50000,"
"39GL PRUDENTIAL TIER 1 STEP UP UNDATED NTS USD1000,"
"39GP GAS NATURAL FINANCE BV 5.25% GTD NTS 09/07/14 EUR50000,"
"39OI UNITED UTILITIES WATER 5.375% BDS 14/5/18 GBP(VAR),"
"39ZJ LLOYDS TSB BANK PLC SUB CALL 5.75% TO FRN 9/7/25 GBP(VAR),"
"39ZK LLOYDS TSB BANK PLC SUB CALL FLTG RTE NTS 9/7/16 EUR(VAR),"
"3EC FT-SE E300 Euro Blanc,"
"3IN 3I INFRASTRUCTURE LTD ORD NPV WI,"
"3XEC FT-SE E300 ex-Euro Blanc,"
"3XUK FT-SE E300 ex-UK Index,"
"40BY STANDARD LIFE PLC 6.546% MUT ASS CAP SECS GBP(VAR),"
"40CT TRANSPORT FOR LONDON 5% NTS 31/03/35 GBP50000,"
"40CZ CATALYST HEALTHCARE(MANCHESTER)FIN 2.411% IDX LKD GTD SEC BDS 30/9/40 GBP,"
"40EM HBOS 4.50% STEP-UP SUB NTS 18/03/30 EUR(VAR),"
"40FD F&C COMMERCIAL PROPERTY FINANCE 5.23%SECD BDS 30/06/17 GBP50000,"
"40HK BAA LYNTON 10.25% 1ST MTG DEB STK 2017,"
"40IT UNILEVER NV 3.375% NTS 29/09/15 EUR(VAR),"
"40KP BANK OF AMERICA CORP 4%/FLTG RATE CALL SUB NTS 28/03/18 EUR,"
"40LV ANGLIAN WATER 6.875% BDS 21/8/2023 GBP(VAR)(BR),"
"40MF ONTARIO(PROVINCE OF) 4.75% BDS 19/01/16 USD5000,"
"40MG HUNGARY(REPUBLIC OF) 3.5% NTS 18/07/16 EUR(VAR),"
"40OS TESCO 6% MED TRM NTS 14/12/2029 GBP(VAR),"
"40PD SMITHS GROUP 7.25% BDS 30/6/2016 GBP(VAR),"
"40QG AGGREGATE INDUSTRIES 7.25% BDS 31/5/2016 GBP(VAR),"
"41DD MORGAN STANLEY EURO FLTG RATE SNR BR NTS 13/4/16 EUR`G`,"
"41DX BARCLAYS BANK PLC FR SUB STP-UP CALL NTS 28/6/16 USD'144A',"
"41KY UK TREASURY STRIP UK TREASURY STRIP 7/12/2014 COUPON,"
"41MV SYNGENTA LUXEMBOURG FINANCE SA 4.125% NTS 21/09/11 EUR50000,"
"41NB BBVA INTL PREFERRED SA UNIPERSONAL SER`B`STEP UP F/FLT NON CUM PERP PREF,"
"41NW SEVERN TRENT WATER UTILITIES FIN 6.25% GTD BDS 7/6/2029 GBP(VAR),"
"41TC SB CAPITAL SA 5.93% LN PART NTS 14/11/11 USD100000,"
"42DC GRANITE MASTER ISSUER CLS`3A2`FLTG RATE NTS 17/12/54EUR100000,"
"42HH HALIFAX 10.5% SUBORD BDS 16/2/2018 GBP(VAR),"
"42IF SCOTTISH INVESTMENT TRUST 4% PERP DEB STK,"
"42KJ HSBC HLDGS CALL SUB 6.375%/FLTG RT NTS 18/10/22 GBP,"
"42KY UK TREASURY STRIP UK TREASURY STRIP 7/6/2015 COUPON,"
"42PU BRITISH TELECOMMUNICATIONS 7.5% NTS 7/12/2016 GBP(VAR),"
"42XK NATIONAL GRID ELECTRICITY TRANS. 7.375% INST 13/01/31 GBP75000,"
"43EP HSBC BANK PLC LEPO WTS 7/01/19 (BHARAT HEAVY ELECT)USD,"
"43EZ ROLLS-ROYCE 6.75% GTD NTS 30/04/19 GBP50000,"
"43FF MOTABILITY OPERATIONS GROUP PLC 6.625% NTS 10/12/19 GBP50000,"
"43FO STANDARD CHARTERED 5.75% NTS 30/04/14 EUR50000,"
"43FR BARCLAYS BANK PLC SWITCHABLE FXD/FRN 30/04/14 EUR100,"
"43FS BARCLAYS BANK PLC 5% NTS 23/06/14 GBP1,"
"43FT VODAFONE GROUP 5.375% NTS 05/12/17 GBP50000,"
"43GO BRITISH TELECOMMUNICATIONS 6.125% NTS 11/07/14 EUR50000,"
"43KR UNIONE DI BANCHE ITALIANE SCPA 4.939% NTS 25/06/14 EUR50000,"
"43LA EDP FINANCE BV 4.75% NTS 26/09/16 EUR50000,"
"43LT SABMILLER 4.5% NTS 20/01/15 EUR50000,"
"43MB UBS AG LONDON BRANCH 6.375% NTS 20/07/16 GBP1000,"
"43OC COMMONWEALTH BANK OF AUSTRALIA 5.5% SUB NTS 06/08/19 EUR50000,"
"43QA WESTPAC BANKING CORP 4.25% INST 22/09/16 EUR50000,"
"43RC ABBEY NATIONAL TREASURY SERVICES 3.625% CVD BDS 14/10/16 EUR50000,"
"43RL EDF ENERGY NETWORKS(SPN) 6.125% SEN UNSEC NTS 12/11/31 GBP50000,"
"43RM EDF ENERGY NETWORKS(EPN) 6% SEN UEC NTS 12/11/36 GBP50000,"
"43RN EDF ENERGY NETWORKS(LPN) 5.125% SEN UNSEC NTS 11/11/16 GBP50000,"
"43SI BARCLAYS BANK PLC 5% NTS 22/10/14 GBP1,"
"43TD ABU DHABI NATIONAL ENERGY COMPANY 6.25% NTS 16/09/19 USD100000`REG S`,"
"43TG ABU DHABI NATIONAL ENERGY COMPANY 4.75% NTS 15/09/14 USD100000`REG S`,"
"43UN TUI TRAVEL PLC 6% CNV BDS 05/10/14(TUI TRAVEL)GBP100000,"
"43VI KUWAIT PROJECTS CO(CAYMAN) 8.875% NTS 17/10/16 USD100000,"
"43WB OLD MUTUAL 7.125% NTS 19/10/16 GBP50000,"
"43WX SOUTHERN GAS NETWORK 5.125% BDS 02/11/18 GBP50000,"
"43WZ PORTUGAL TELECOM INTL FINANCE BV 5% NTS 04/11/19 EUR50000,"
"43XB GAS NATURAL CAPITAL MARKETS SA 4.375% GTD NTS 02/11/16 EUR50000,"
"44AE PSB FINANCE SA 12.75% LOAN PTG NTS 27/5/15 USD100000`3`,"
"44BB TELEFONICA EMISIONES SAU 5.289% INST 09/12/22 GBP50000,"
"44CH AQUARIUS PLATINUM LIMITED 4% CNV BDS 18/12/15 USD100000,"
"44CQ HSBC BANK PLC LEPO WTS 12/11/19(OIL&NAT GAS)USD,"
"44CR HSBC BANK PLC LEPO WTS 12/11/19(WIPRO)USD,"
"44CV HSBC BANK PLC LEPO 25/11/19(INFOSYS TECH)USD0.000001,"
"44EP BARCLAYS BANK PLC 4% NTS 19/03/15 GBP1,"
"44ET GAS NATURAL CAPITAL MARKETS SA 4.5% NTS 27/01/20 EUR50000,"
"44EX BARCLAYS BANK PLC 0% NTS 19/03/15 GBP1,"
"44FK URENCO FINANCE NV 4% NTS 05/05/17 EUR50000,"
"44IF SCOTTISH INVESTMENT TRUST 5% PERP DEB STK,"
"44IU AUSTRALIA & NEW ZEALAND BANK GROUP 3.75% NTS 10/03/17 EUR50000,"
"44IY IRISH LIFE & PERMANENT 4% GTD NTS 10/03/15 EUR50000,"
"44JV DUNEDIN INCOME GROWTH INVEST TRUST 7.875% DEB STK 2019 GBP,"
"44KC BANK OF AMERICA CORP 4.75% SNR NTS 03/04/17 EUR50000,"
"44KF ISRAEL(STATE OF) 4.625% NTS 18/03/20 EUR50000,"
"44KH BARCLAYS BANK PLC 3.5% NTS 18/03/15 EUR50000,"
"44KR WESTPAC SECURITIES NZ LTD 3.875% INST 20/03/17 EUR50000,"
"44LW POHJOLA BANK PLC 3.125% INST 25/03/15 EUR50000,"
"44MU NORDEA BANK AB 4.5% SUBORD NTS 26/03/20 EUR50000,"
"44QB STADSHYPOTEK AB 2.75% BDS 30/04/15 EUR1000,"
"44RO TUI TRAVEL PLC 4.90% CNV BD 22/4/17(TUI TRAVEL)GBP10000,"
"44RQ DTEK FINANCE BV 9.5% NTS 28/04/15 USD1000 REGS,"
"44RR DTEK FINANCE BV 9.5% NTS 28/04/15 USD1000`144A`,"
"44SC MHP SA 10.25% NTS 29/04/15 USD1000`REG S`,"
"44WR LLOYDS TSB BANK PLC 6.50% SUB LOW TIER2NTS 14/9/20 USD REG`S,"
"44WS LLOYDS TSB BANK PLC 6.5% SUB LOW TIER2NTS 14/9/20 USD 144A,"
"44XY SKANDINAVISKA ENSKILDA BANKEN 2.5% NTS 17/06/15 EUR50000,"
"45CF BAHRAIN MUMTALAKAT HLDG CO BSC 5% NTS 30/06/15 USD100000,"
"45CR LEWIS(JOHN) 6.125% BDS 21/01/25 GBP50000,"
"45DB NATIONWIDE BUILDING SOCIETY 6.75% SUB NTS 22/07/20 EUR50000,"
"45EU AKBANK TURK ANONIM SIRKETI 5.125% NTS 22/07/15 USD100000`REG S`,"
"45EW BBVA SENIOR FINANCE SA UNIPERSONAL 3.875% NTS 06/08/15 EUR50000,"
"45EX INTERNATIONAL PERSONAL FINANCE PLC 11.5% GTD NTS 06/08/15 EUR50000,"
"45FP HSBC BANK PLC LEPO WTS 12/5/20(RURAL ELECTRIIATION)USD,"
"45FQ HSBC BANK PLC LEPO WTS 12/05/20(PIRAMAL HEALTHCARE)USD,"
"45FS HSBC BANK PLC LEPO WTS 11/06/20(HENAN SHUANGHUI INV &),"
"45KC ABBEY NATIONAL TREASURY SERVICES 4.125% NTS 14/09/17 GBP50000,"
"45KO NATIONWIDE BUILDING SOCIETY 2.875% NTS 14/09/15 EUR50000 2010-1,"
"45KS NORDEA BANK AB 4% SUB NTS 29/03/21 EUR1000 166,"
"45LI JPMORGAN CHASE & CO 3.875% NTS 23/09/20 EUR50000,"
"45LN SANTOS FINANCE LTD FXD TO FLTG RTE SUB NTS 22/9/70 EUR50000,"
"45LV ALFA BOND ISSUANCE 7.875%LN PTG NTS 25/9/17 USD REG`S,"
"45NJ QTEL INTERNATIONAL FINANCE LTD 4.75% NTS 16/02/21 USD200000 REG S,"
"45NK QTEL INTERNATIONAL FINANCE LTD 3.375% NTS 14/10/16 USD200000 REG S,"
"45OY LLOYDS TSB BANK 6.625% SUBORD NOTES 30/3/2015 GBP(VAR),"
"45PI STEEL CAPITAL SA 6.7% LN PART NTS 25/10/17 USD1000 REG S,"
"45QP CYPRUS(REPUBLIC OF) 3.75% NTS 01/11/15 EUR1000,"
"45SL QNB FINANCE LTD 3.125% GTD NTS 16/11/15 USD200000 REG S,"
"45ZS LLOYDS TSB BANK PLC 4.875% CVD BDS 13/01/23 EUR100000 2011-2,"
"46EA TURKIYE IS BANKASI 5.1% NTS 01/02/16 USD200000 REG`S,"
"46IR TRANSNET 4.5% NTS 10/02/16 USD200000 REG S,"
"46JC BARCLAYS BANK PLC 9.5% SUBORD BDS 7/8/2021 GBP(VAR),"
"47AG NORDEA HYPOTEK AB 3.5% CVD BDS 18/01/17 EUR50000,"
"47AR NATIONWIDE BUILDING SOCIETY 3.75% NTS 20/01/15 EUR50000,"
"47AS BARCLAYS BANK PLC 4% NTS 20/01/17 EUR50000,"
"47AT ROYAL BANK OF SCOTLAND 4.875% NTS 20/01/17 EUR50000,"
"47AW VODAFONE GROUP 4.65% NTS 20/01/22 EUR50000,"
"47KY UK TREASURY STRIP UK TREASURY STRIP 7/12/2017 COUPON,"
"47OG NORTHERN ROCK 6.375% NOTES 2/12/2019 GBP1000,"
"47PF ROLLS-ROYCE 7.375% NTS 14/6/2016 GBP(VAR),"
"47QK NATIONAL GRID ELECTRICITY TRANS. 6.5% BDS 27/7/2028 GBP(VAR),"
"47VU ENTERPRISE INNS 6.5% SNR UNSUB NTS 6/12/18 GBP REG `S`,"
"47YC PRUDENTIAL 6.5% PERP SUB CAP SECS USD(VAR),"
"48CT B.A.T.INTERNATIONAL FINANCE 6.375% NTS 12/12/19 GBP(VAR),"
"48DW RMPA SERVICES 5.337% GTD SEC BDS 30/9/38 GBP(VAR)REG`S,"
"48FD MARKS & SPENCER GROUP 5.625% NTS 24/03/14 GBP(VAR),"
"48FX HBOS FLTG RATE NTS 01/09/16 EUR1000,"
"48KY UK TREASURY STRIP UK TREASURY STRIP 7/6/2018 COUPON,"
"48MS AEGON NV 4.125% INST 8/12/14 EUR(VAR),"
"48UQ QUEBEC 5% GLOBAL NTS QD 01/03/16 USD1000,"
"49HF TELEFONICA EMISIONES SAU 5.375% INST 02/02/18 GBP50000,"
"49HI TELEFONICA EMISIONES SAU 5.375% INST 02/02/26 GBP50000,"
"49KY UK TREASURY STRIP UK TREASURY STRIP 7/12/2018 COUPON,"
"49LR PLACES FOR PEOPLE HOMES 6.625% SEC BDS 30/9/2038 GBP1000(BR),"
"49MY GE CAPITAL UK FUNDING 5.125% NTS 24/05/23 GBP1000,"
"49RA VODAFONE GROUP 4.75% NTS 14/06/16 EUR50000,"
"4EU5 FT-SE 4Good Europe 50 Index,"
"4GEU FT-SE 4Good Europe Index,"
"4GGL FT-SE 4Good Global Index,"
"4GL1 FT-SE 4Good Global 100 Index,"
"4GUK FT-SE 4Good UK Index,"
"4GUS FT-SE 4Good US Index,"
"4UK5 FT-SE 4Good UK 50 Index,"
"4US1 FT-SE 4Good US 100 Index,"
"50GP CRODA INTERNATIONAL PLC 5.9% CUM PRF GBP1,"
"50NC BRITISH SKY BROADCASTING GROUP 6% GTD NTS 21/05/27 GBP50000,"
"50PC DP WORLD SUKUK LTD TRUST CERTS 2/7/17 USD100000 REG`S,"
"50SC BANCO BILBAO VIZCAYA ARGENTARIA SA 5.75% CVD BDS 20/07/17 USD10000 `REGS`,"
"50UC ASTRAZENECA PLC 5.75% SNR UNSUB NTS 12/11/31 GBP50000,"
"50WS HSBC BANK PALMS 389 22/1/09(COMM BK QATAR)USD54.50,"
"51FS ROYAL BANK OF SCOTLAND 6.625% NTS 17/09/18 GBP50000,"
"51GE FIRSTGROUP 8.125% BDS 19/09/18 GBP50000,"
"51IF SCOTTISH MORTGAGE INVESTMENT TST 8%-14% STEPPED INT DEB STK 2020,"
"51KY UK TREASURY STRIP UK TREASURY STRIP 7/12/2019 COUPON,"
"51NL SEGRO PLC 6.25% BDS 30/9/2015 GBP(VAR),"
"51NS ONTARIO(PROVINCE OF) 4.75% INST 23/04/19 EUR50000,"
"51PA BG ENERGY CAPITAL 5.125% NTS 07/12/17 GBP50000,"
"51QO BARCLAYS BANK PLC 5.15% NTS 21/07/14 GBP1,"
"51TJ UNILEVER 4.75% NTS 16/06/17 GBP2000,"
"51UP STANDARD CHARTERED BANK USD STEP-UP CALL PERP PREF SECS USD1000,"
"51ZR VODAFONE GROUP 5% NOTES 4/6/18 EUR(VAR),"
"52CU DERBY HEALTHCARE 5.564% NTS 30/6/41 GBP1000,"
"52DJ KINGFISHER 5.625% UNSUB NTS 15/12/14 GBP(VAR),"
"52GO EDF ENERGY NETWORKS(EPN) 5.75% NTS 08/03/24 GBP(VAR),"
"52HX NORTHERN COUNTIES HOUSING ASSOC 9.125% GTD SEC STK 2025,"
"52VC STANDARD CHARTERED BANK 5.375%/FLTG RATE STEP-UP UNDATED NTS GBP,"
"52VE SEGRO PLC 5.75% NTS 20/06/35 GBP(VAR),"
"52VQ TELSTRA CORPORATION 3.875% NTS 24/07/15 EUR50000,"
"52VT THAMES WATER UTILITIES FINANCE LD 4.9% GTD NTS 30/06/15 GBP50000,"
"52WW HSBC BANK PLC 4.75% SUBORD NTS 24/03/46 GBP50000,"
"53CT HUNGARY(REPUBLIC OF) 5.75% NTS 11/06/18 EUR(VAR),"
"53CX RBS CAPITAL TRUST C 4.243%/FLTG RTE N-CUM TST PF SECS,"
"53LM URENCO FINANCE NV 5.375% NTS 22/05/15 EUR50000,"
"53PM NEXT 5.875% BDS 12/10/16 GBP50000,"
"53QA XSTRATA CAPITAL CORP A.V.V. 4% GTD CNV BDS 14/08/17 USD100000,"
"54FU BRITISH TELECOMMUNICATIONS CALL 5.25% NTS 23/06/14 EUR50000,"
"54FV BRITISH TELECOMMUNICATIONS CALL 6.625% NTS 23/06/17 GBP50000,"
"54HA SOCIETY OF LLOYDS(THE) PERP SUBORD CAPITAL SECS GBP50000,"
"54HB DAILY MAIL & GENERAL TRUST 6.375% BDS 21/06/27 GBP50000,"
"54HN IRISH LIFE ASSURANCE PLC STEP UP PERP CAP NTS EUR50000,"
"54JZ EUROFIMA 5% INST 03/04/17 USD2000,"
"54LJ STATKRAFT 4.625% NTS 22/09/17 EUR50000,"
"54TK WPP FINANCE SA 5.25% GTD BDS 30/01/15 EUR50000,"
"54VX TESCO 5.5% SNR NTS 15/11/17 USD100000 `144A`,"
"54XF GLAXOSMITHKLINE CAPITAL 5.625% NTS 13/12/17 EUR50000,"
"54XN JPMORGAN CHASE & CO 5.25% NTS 14/01/15 EUR50000,"
"54YE GE CAPITAL EUROPEAN FUNDING 5.25% NTS 18/05/15 EUR1000,"
"55AH QUEBEC SER`QG`4.625% GLB NTS 14/05/18 USD1000,"
"55FY SVENSKA HANDELSBANKEN 5.5% NTS 26/05/16 GBP50000,"
"55GR YORKSHIRE WATER SERVICES BRADFD FIN 6% GTD BDS 21/08/19 GBP50000,"
"55GT YORKSHIRE WATER SERVICES BRADFD FIN 6.375% GTD BDS 19/08/39 GBP50000,"
"55HB HONG KONG & SHANGHAI BANKING CORP PRIM CAP UNDATED FLTG RATE NTS USD(VAR),"
"55KN PHILIP MORRIS INTERNATIONAL INC 5.75% NTS 24/03/16 EUR50000,"
"55LE PEARSON FUNDING ONE PLC 6% GTD NTS 15/12/15 GBP50000,"
"55QN HSBC BANK LEPO WTS 20/2/18(BHARTI ARTL)USD0.000001,"
"55QQ HSBC BANK LEPO WTS 20/02/18(HDFC)USD0.000001,"
"55QR HSBC BANK LEPO WTS 20/02/18(ITC LTD)USD0.000001,"
"55RS STANDARD CHARTERED 5.5% SNR NTS 18/11/14 USD100000`REG S`,"
"55VR ENW CAPITAL FINANCE PLC 6.125% UNWRAPPED NTS 21/07/21 GBP50000,"
"55VS ENW CAPITAL FINANCE PLC 6.75% UNWRAPPED NTS 20/06/15 GBP1000,"
"56GP BRIXTON PLC 6% BDS 30/9/19 GBP(VAR),"
"56QG ROYAL BANK OF SCOTLAND 4.625% TO FLTG RATE SUB NTS 22/9/21 EUR,"
"56WC YORKSHIRE ELECTRICITY DIST 5.125% BDS 04/05/35 GBP(VAR),"
"56WD NORTHERN ELECTRIC FINANCE 5.125% BDS 4/5/35 GBP(VAR),"
"56YM MORGAN STANLEY EURO 4% SNR BEARER NTS 17/11/15 EUR50000,"
"57FK SEGRO PLC 5.625% NTS 07/12/20 GBP50000,"
"57HB HONG KONG & SHANGHAI BANKING CORP PRIM CAP UNDATED F/R NTS(3)USD(VAR)BR,"
"57PB ENTERPRISE INNS 6.875% SEC BDS 9/5/2025 GBP(VAR),"
"57SR MERRILL LYNCH & CO INC FLTG RATE NTS 25/08/14 EUR(VAR),"
"57ZX GE CAPITAL EUROPEAN FUNDING 4.125% NTS 27/10/16 EUR1000,"
"58BH MORGAN STANLEY 4.375% SNR NTS 12/10/16 EUR50000,"
"58FF MERRILL LYNCH & CO INC 5.5% SUB REGD NTS 22/11/21 GBP50000,"
"58GZ STANDARD CHARTERED ADS EACH REPR 1 NON-CUM PREF SHR `REGS`,"
"58SN MERRILL LYNCH & CO INC 4.875% NTS 30/05/14 EUR50000,"
"58TU REXAM 6.75% CAP SEC 29/06/67 EUR50000,"
"58UT DP WORLD LTD 6.85% NTS 02/07/37 USD100000 `REGS`,"
"58XK BARCLAYS BANK PLC 7.434% STP UP PERP RSV CAP INS USD REG`S,"
"58XL BARCLAYS BANK PLC 7.434% STP UP PERP RSV CAP INS USD 144A,"
"58XX STANDARD CHARTERED BANK 5.875% DATED NTS 26/09/17 EUR50000,"
"59BN B.A.T.INTERNATIONAL FINANCE 7.25% GTD NTS 12/03/24 GBP50000,"
"59GS EUROPEAN INVESTMENT BANK 8.75% BDS 25/8/2017 GBP(VAR),"
"59LG CENTRICA 7% NTS 19/09/18 GBP50000,"
"59VB BP CAPITAL MARKETS 4% GTD NTS 29/12/14 GBP1000,"
"59WH GE CAPITAL EUROPEAN FUNDING 5.375% NTS 16/01/18 EUR1000,"
"59XG VODAFONE GROUP 8.125% NTS 26/11/18 GBP50000,"
"59YI BARCLAYS BANK PLC 5.15% NTS 26/08/14 GBP1,"
"59ZW GE CAPITAL EUROPEAN FUNDING 4.75% NTS 30/07/14 EUR1000,"
"60BJ STADSHYPOTEK AB 3% CVD BDS 01/10/14 EUR50000 `15`,"
"60BT SWEDBANK MORTGAGE AB 3.625% S.O. BDS 05/10/16 EUR50000,"
"60CD BANCO COMERCIAL PORTUGUES 3.75% CVD BDS 08/10/17 EUR50000,"
"60DC ONTARIO(PROVINCE OF) 2.95% BDS 05/02/15 USD5000,"
"60DW BARCLAYS BANK PLC FXD TO FRN 03/09/19 EUR1000,"
"60FH GE CAPITAL EUROPEAN FUNDING 5.375% NTS 23/01/20 EUR1000,"
"60FZ BBVA INTL PREFERRED SA UNIPERSONAL SER`FNON FXD/FLTG RTE NON CUM PFD SEC,"
"60GA BBVA INTL PREFERRED SA UNIPERSONAL SER`E`NON FXD/FLTG RTE NON CUM PFD SEC,"
"60HD SUNCORP METWAY LIMITED 5.125% NTS 27/10/14 GBP50000,"
"60HU PROVIDENT FINANCIAL 8% GTD BDS 23/10/19 GBP1000,"
"60IY GE CAPITAL UK FUNDING 5.875% NTS 04/11/20 GBP2000,"
"60LU HSBC BANK PLC LEPO 25/11/19(KOTAK MAHINDRA BK)USD,"
"60PC HSBC BANK PLC LEPO WTS 12/11/19(GAIL INDIA LTD)USD,"
"60PE HSBC BANK PLC LEPO WTS 12/11/19(HINDALCO INDUST)USD,"
"60RR HSBC BANK PLC LEPO WTS 25/11/19(TATA CONSULTANCY SVS),"
"60RV NATIONAL EXPRESS GROUP 6.25% NTS 13/01/17 GBP50000,"
"60SJ HUNGARY(REPUBLIC OF) 6.25% NTS 29/01/20 USD1000,"
"60TO BARCLAYS BANK PLC 0% NTS 30/04/15 GBP1,"
"60TP BARCLAYS BANK PLC 4% NTS 30/04/15 GBP1,"
"60UG BARCLAYS BANK PLC 4.25% CVD BDS 02/03/22 EUR50000 2010-2,"
"60VZ COMMONWEALTH BANK OF AUSTRALIA 4.375% MTN 25/02/20 EUR1000,"
"60XC ALFA MTN ISSUANCE LTD 8% EMTN 18/03/15 USD100000,"
"60XE TELSTRA CORPORATION 4.25% NTS 23/03/20 EUR50000,"
"60XJ ROYAL BANK OF SCOTLAND 5.5% NTS 23/03/20 EUR50000,"
"60XQ HSBC BANK PLC LEPO WTS 20/08/19(INFRASTRUCTURE DEV)USD,"
"60XR HSBC BANK PLC LEPO WTS 29/07/19(HERO HONDA MOTORS LTD),"
"60XS HSBC BANK PLC LEPO WTS 07/01/19(STATE BANK INDIA)USD,"
"60XT HSBC BANK PLC LEPO WTS 14/1/19(MARUTI SUZUKI INDIA)USD,"
"60XV HSBC BANK PLC LEPO WTS 21/11/18(HCL TECHN)USD0.000001,"
"60XZ HSBC BANK PLC LEPO WTS 01/10/19(NTPC LTD)USD0.000001,"
"60YA HSBC BANK PLC LEPO WTS 19/06/19(JAIPRAKASH ASSOC)USD,"
"60ZI WALES&WEST 36 6.75% TO FLTG GTD NTS 17/12/18 GBP50000,"
"60ZP BAHRAIN(KINGDOM OF) 5.5% BDS 31/03/20 USD100000`REG S`,"
"60ZT MONDI FINANCE PLC 5.75% NTS 03/04/17 EUR1000,"
"61GL SB CAPITAL SA 5.499% LN PTG  07/07/15 USD100000,"
"61HE MAIL.RU GROUP LTD GDR EACH REPR 1 SHARE 144A (SPONS)WI,"
"61HK IPIC GMTN LTD 5% NTS 15/11/20 USD250000 REG S,"
"61HL IPIC GMTN LTD 5% NTS 15/11/20 USD250000 144A,"
"61HW SCOTTISH & SOUTHERN ENERGY STERLING CAP PERPETUAL SECS GBP,"
"61HX SCOTTISH & SOUTHERN ENERGY EURO CAP PERPETUAL SECS EUR50000,"
"61IE MACQUARIE BANK 6% SUBORD DEBT INST 21/09/20 EUR1000,"
"61KO SWEDBANK MORTGAGE AB 2.5% S O BDS 15/06/15 EUR50000,"
"61LH LLOYDS TSB BANK PLC 4% CVD BDS 25/06/18 EUR50000 2010-2,"
"61MK EUROPEAN BANK FOR REC & DEV 2.75% GBL NTS 20/04/15 USD1000,"
"61ML NORDEA BANK AB 3.875% NTS 15/12/15 GBP50000,"
"61MP LLOYDS TSB BANK PLC 7.625% NTS 22/04/25 GBP1000,"
"61PE NORDEA BANK AB 2.75% NTS 11/08/15 EUR50000,"
"61RH NOTTING HILL HOUSING TRUST 5.25% SECURED BDS 07/07/42 GBP50000,"
"61RN PSB FINANCE SA 11.25% LN PTG NTS 8/7/16 USD100000,"
"61ST UNIONE DI BANCHE ITALIANE SCPA 3.375% BDS 15/09/17 EUR1000,"
"61VZ MORGAN STANLEY 5.375% SNR NTS 10/08/20 EUR50000,"
"61WO LLOYDS TSB BANK PLC 3.75% NTS 07/09/15 EUR50000,"
"61XB POHJOLA BANK PLC 3% INST 08/09/17 EUR50000,"
"61XC HSBC BANK PLC LEPO WTS 17/08/20(LARGAN PRECISION)USD,"
"61XD ROYAL BANK OF SCOTLAND PLC 3% CVD BDS 08/09/15 EUR50000,"
"61YT DUBAI GOVERNMENT 7.75% BDS 05/10/20 USD1000,"
"61ZG GOLD FIELDS OROGEN HLDG LTD 4.875% NTS 07/10/20 USD1000 REG S,"
"61ZI TELEFONICA EMISIONES SAU 5.445% INST 08/10/29 GBP50000,"
"62AD FINLAND(REPUBLIC OF) 1.25% NTS 19/10/15 USD100000 REG S,"
"62AO QTEL INTERNATIONAL FINANCE LTD 5% GTD NTS 19/10/25 USD200000 REG S,"
"62CD BAA(SH)PLC 7.125% NTS 01/03/17 GBP50000,"
"62CH LUKOIL INTERNATIONAL FINANCE BV 6.125% BDS 09/11/20 USD1000 REG S,"
"62CJ NATIONAL COMPANY KAZMUNAYGAS JSC 6.375% NTS 09/04/21 USD200000 REG S,"
"62JT WITAN INVESTMENT TRUST 8.5% DEB STK 2016,"
"62NP UNIONE DI BANCHE ITALIANE SCPA 5.25% NTS 28/01/21 EUR1000,"
"62ZB HSBC BANK PLC LEPO 03/06/20(GREE ELECTRIC)USD0.000001,"
"63HS NATIONWIDE BUILDING SOCIETY 8.625% SUBORD NOTES 29/3/2018 GBP(VAR),"
"63NK PETROPAVLOVSK PLC 4% CNV BDS 18/02/15 USD100000,"
"63NS SVENSKA HANDELSBANKEN 3.75% NTS 24/02/17 EUR1000`280`,"
"63NY NORDEA BANK AB 3.75% NTS 24/02/17 EUR50000,"
"64BB LLOYDS TSB BANK 6.9% PERP CAP SECS 22/11/12 USD1000,"
"64DE HSBC HLDGS 5.75% EUR MED TRM NTS 20/12/27 GBP1000,"
"64IV SEVERN TRENT UTILITIES FINANCE PLC 5.25% NTS 8/12/14 GBP(VAR),"
"64KA UK TREASURY STRIP UK 4.75% TREASURY STRIP 7/9/15 PRNCP,"
"64ZR NORTHERN ROCK (ASSET MANAGEMENT)PLC 3.625% COVERED BDS 20/04/15 EUR50000,"
"65DI NETWORK RAIL INFRASTRUCTURE FINANCE 4.625% NOTES 21/07/20 GBP50000,"
"65HO HSBC BANK PLC UND F/R PRIM CAP NTS(3)USD(VAR)(BR),"
"65LF GENERAL ELECTRIC CAPITAL CORP 4.125% NTS 19/09/35 EUR(VAR),"
"65LH GENERAL ELECTRIC CAPITAL CORP 4.875% NTS 18/09/37 GBP(VAR),"
"65NX ITV 5.375% NTS 19/10/15 GBP50000,"
"65TH HAMMERSON PLC 5.25% BDS 15/12/16 GBP50000,"
"65TO TELEFONICA EMISIONES SAU 4.375% INST 02/02/16 EUR50000,"
"66IH SPAIN(GOVT OF) 11.75% LN STK 2010(BR),"
"66KT BANK OF AMERICA CORP 5.25% SUB NTS 09/11/16 GBP50000,"
"66MF QUEBEC 5.125% GBL NTS SER QE 14/11/16 USD1000,"
"66QU MORGAN STANLEY FLTG RATE SNR NTS 16/01/17 EUR50000,"
"66TJ KAZKOMMERTS INTERNATIONAL BV 6.875% SNR NTS 13/02/17 EUR50000,"
"66WL JPMORGAN CHASE & CO 6.128%/FLTG RTE SUB CALL NTS 30/5/17 GBP,"
"67GX NORTHGATE 5% CUM PRF 50P,"
"67LN KAZMUNAIGAZ FINANCE SUB 9.125% NTS 02/07/18 USD100000 `REGS`,"
"67RW HSBC HLDGS 6.75% SUBORD NTS 11/09/28 GBP50000,"
"67SR IMPERIAL TOBACCO FINANCE 8.125% GTD NTS 15/03/24 GBP50000,"
"67TC HSBC BANK LEPO WTS 12/11/18(LARSEN&TOUBRO)USD,"
"67TS DIAGEO FINANCE PLC 6.625% NTS 05/12/14 EUR50000,"
"67VL ATLANTIC FINANCE LTD 8.75% GTD NTS 27/05/14 USD100000`REG S`,"
"67VN VEDANTA RESOURCES JERSEY II LTD 4% GTD CNV BDS 30/03/17(VEDANTA)USD,"
"67ZC BARCLAYS BANK PLC NTS 29/05/14 EUR1000,"
"67ZE BARCLAYS BANK PLC 4% NTS 29/05/14 EUR1000,"
"67ZM PRUDENTIAL CALL DATED TIER 2 NTS 29/5/39 GBP50000,"
"67ZX SKANDINAVISKA ENSKILDA BANKEN 7.0922%/FLTG RT CAP CONTRIBUTION NTS EUR,"
"68BP HSBC HLDGS 6.25% SUBORD NTS 19/03/18 EUR50000,"
"68BR HBOS CAPITAL FUNDING NO 4 LP 9.54%/FLTG RTE NON VTG NON CUM PREF,"
"68CH BARCLAYS BANK PLC 10.179% SUB NTS 12/06/21 USD80000`REG S`,"
"68CT NOVARTIS FINANCE SA 4.25% NTS 15/06/16 EUR50000,"
"68DN LLOYDS TSB BANK 6.375% NTS 17/06/16 EUR50000,"
"68EO RSL FINANCE(NO 1) 6.625% SEC LN BKD BDS 31/3/2038 GBP,"
"68HN MENZIES(JOHN) 9% CUM PRF GBP1,"
"68MC PLACES FOR PEOPLE HOMES 5.09% SEC BDS 31/7/43 GBP1000`REGS`,"
"68OP WESSEX WATER SERVICES FINANCE 5.75% GTD BDS 14/10/33 GBP(VAR) REG`S`,"
"68PD INTEGRATED ACCOM SERVICE 6.48% GTD SEC BDS 31/3/2029 GBP(VAR),"
"68TU VATTENFALL TREASURY AB 5.375% GTD NTS 29/04/24 EUR(VAR),"
"68WN ROTHSCHILD CONTINUATION FINANCE EUR-TEC10 CNO IDX FRN PERP EUR1000,"
"69AU ANGLIAN WATER SERVICE FINANCE 5.25% UNWRAPPED BDS 30/10/15 GBP(VAR)'A',"
"69JA BANK OF AMERICA CORP FLTG RATE SNR NTS 18/05/16 EUR50000,"
"69WA BARCLAYS BANK PLC 6% SUB NTS 23/01/18 EUR50000,"
"69WR AVIVA 6.875%/FLTG RTE NTS 20/05/58 GBP50000,"
"69WU AVIVA 6.875%/FLTG RATE NTS 22/05/38 EUR50000,"
"70PZ F&C ASSET MANAGEMENT FXD/FLTG RTE SUB NTS 20/12/26 GBP50000,"
"70TD BRITISH TELECOMMUNICATIONS CALL 6.375% NTS 23/06/37 GBP50000,"
"70UL TELSTRA CORPORATION 4.75% NTS 21/03/17 EUR50000,"
"70ZK VODAFONE GROUP 5.375% NTS 06/06/22 EUR50000,"
"70ZL VODAFONE GROUP FLTG RATE NTS 06/06/14 EUR50000,"
"70ZX LUKOIL INTERNATIONAL FINANCE BV 6.356% NTS 07/06/17 USD100000 `REGS`,"
"70ZZ LUKOIL INTERNATIONAL FINANCE BV 6.656% NTS 07/06/22 USD100000 `REGS`,"
"71GL GABONESE REPUBLIC 8.20% NTS 12/12/17 USD100000 `REGS`,"
"71HP GE CAPITAL UK FUNDING 6.25% NTS 05/05/38 GBP1000,"
"71IA TORONTO-DOMINION BANK 5.375% DEP NTS 14/05/15 EUR50000,"
"71IL WPP GROUP 6.625% GTD BDS 12/05/16 EUR50000,"
"71PP LEGAL & GENERAL FINANCE 5.875% NOTES 11/12/2031 GBP(VAR),"
"71SF POHJOLA BANK PLC 4.5% INST 22/05/14 EUR50000,"
"71WG SANCTUARY CAPITAL PLC 6.697% SEC BDS 23/03/39 GBP50000,"
"71WI SWEDBANK AB 2.375% GTD NTS 24/03/11 EUR50000,"
"71ZC GLAXOSMITHKLINE CAPITAL 6.375% NTS 09/03/39 GBP50000,"
"72AF SHELL INTERNATIONAL FINANCE BV 4.375% GTD NTS 14/05/18 EUR1000,"
"72KU HSBC BANK PLC 5% SUB EUR MED TRM NTS 20/3/23 GBP(VAR),"
"72LC NORTHUMBRIAN WATER FINANCE 6.875% GTD BDS 6/2/2023 GBP(VAR)(BR),"
"72NS BRITISH TELECOMMUNICATIONS 5.75% BDS 7/12/2028 GBP(VAR)(BR),"
"72RK AVIVA 6.125% PERP SUB NTS GBP(VAR),"
"72RL AVIVA 5.7%/FLTG RTE PERP SUB NTS EUR(VAR),"
"72VH HAMMERSON PLC 6% BDS 23/2/26 GBP(VAR)`REGS`,"
"72YR TELSTRA CORPORATION 4.75% NTS 15/07/14 EUR50000,"
"73BA HSBC BANK PLC 5.375%CALL SUB STEP UP NTS11/30GBP1000,"
"73GG ABBEY NATIONAL TREASURY SERVICES 3.375% CVD BDS 08/06/15 EUR50000,"
"73IA HSBC BANK PLC 4.75% CALL SUB NTS 29/09/20 GBP1000,"
"73ID ROYAL BANK OF SCOTLAND 9.675% SUBORD BDS 2015 GBP(VAR),"
"73IH SOUTHERN GAS NETWORK 4.875% BDS 21/12/20 GBP50000,"
"73IJ SOUTHERN GAS NETWORK 4.875% BDS 29/03/29 GBP50000,"
"73IL SCOTLAND GAS NETWORK 4.750% BDS 21/02/17 GBP50000,"
"73JG UK TREASURY STRIP 4% TREASURY STRIP 07/09/16 PRINCIPAL,"
"73NA EUROPEAN BANK FOR REC & DEV 5.625% NOTES 7/12/28 GBP(VAR),"
"73QE CANARY WHARF FINANCE II 5.952% 1ST MTG DEB 10/2037 GBP`CLSA3`,"
"73RJ OLD MUTUAL 5%/FLTG STP-UP OPT`B`UNDATED NTS EUR,"
"73RU EVRAZ GROUP SA 8.25% GTD NTS 10/11/15 USD100000`REGS`,"
"73RZ PARKER-HANNIFIN CORP 4.125% BDS 11/11/15 EUR50000,"
"73SA NORTHERN ROCK 3.875% CVD BDS 16/11/21 EUR50000,"
"74JH REED ELSEVIER(INVESTMENTS)PLC 5.625% GTD NTS 20/10/16 GBP50000,"
"74LB BARCLAYS BANK PLC 5.926% S/U PERP RES CAP INST USD`UNREST`,"
"74SJ IMPERIAL TOBACCO FINANCE 5.5% GTD NTS 22/11/16 GBP50000,"
"74YT NATIONWIDE BUILDING SOCIETY 4.375% CVD BDS 28/02/23 EUR50000,"
"74ZF TESCO 5.2% NTS 05/03/57 GBP50000,"
"75AT LEGAL & GENERAL GROUP PERP PREF CALL CAP SECS GBP50000,"
"75BR BANCO COMERCIAL PORTUGUES FLTG RATE NTS 09/05/14 EUR1000,"
"75GU FIRST HYDRO FINANCE 9% GTD SEC BDS 31/7/2021 GBP(VAR),"
"75GV ASTRAZENECA PLC 5.125% NTS 15/01/15 EUR50000,"
"75NI EVRAZ GROUP SA 9.5% NTS 24/04/18 USD100000 `REGS`,"
"75OP HSBC BANK LEPO 11/4/18(HINDUSTAN UNILEVER)USD,"
"75ST CADBURY SCHWEPPES FINANCE 7.25% NTS 18/07/18 GBP50000,"
"75VO VODAFONE GROUP 6.25% NTS 15/01/16 EUR50000,"
"75ZH SOUTHERN WATER SERVICES FINANCE SUB CLS`A11`6.125% UNWRAP BDS 31/3/19GBP,"
"76AH LLOYDS TSB BANK 13% STEP-UP PERP CAP SECS  GBP100000,"
"76AL SEVERN TRENT UTILITIES FINANCE PLC 6% GTD NTS 22/01/18 GBP75000,"
"76EP VEDANTA RESOURCES JERSEY LTD 5.5% GTD CNV BDS 13/7/16(VEDNT RES)USD,"
"76II HSBC BANK LEPO WTS 22/10/18(UTD SPIRTS)USD0.000001,"
"76JG BARCLAYS BANK PLC 4% NTS 30/06/14 EUR100,"
"76LZ BARCLAYS BANK PLC 5%/FRN 09/08/19 EUR1000,"
"76MV ROYAL BANK OF SCOTLAND 5.375% NTS 30/09/19 EUR50000,"
"76NH BARCLAYS BANK PLC FXD RTE NTS 30/09/14 EUR100`SN17101`,"
"76RO LLOYDS TSB BANK PLC 5.375% NTS 03/09/19 EUR50000,"
"76SF INTER AMERICAN DEVELOPMENT BANK 3.875% NTS 17/09/19 USD1000,"
"76SQ BARCLAYS BANK PLC 4.25% NTS 24/11/14 GBP1,"
"76SX BARCLAYS BANK PLC 4% CVD BDS 07/10/19 EUR50000,"
"76TZ HOCHSCHILD MINING PLC 5.75% CNV BD 20/10/14(HOCHSCHILD MNG)USD,"
"76VT SILVERSTONE MASTER ISSUER PLC 2009-1 CL`A2` RES MTG BKD FRN 21/01/55,"
"76WN HSBC BANK PLC 3.75% NTS 30/11/16 EUR50000`3264`,"
"76XS INVESTOR AB 4.875% NTS 18/11/21 EUR50000,"
"76YN CBQ FINANCE LTD 7.5% SUB NTS 18/11/19 USD100000`REG S`,"
"76ZG MARKS & SPENCER 6.125% MTN 02/12/19 GBP50000,"
"76ZH ANGLO AMERICAN CAPITAL 4.375% GTD NTS 02/12/16 EUR50000,"
"76ZU BARCLAYS BANK PLC 4.25% NTS 09/02/15 GBP1`GSN21299`,"
"77AG LBG CAPITAL NO.1 PLC FLTG RATE ENH CAP NTS USD100000`REGS`,"
"77BT BARCLAYS BANK PLC 3.125% CVD BDS 14/01/15 EUR SER 2010-1,"
"77EC TMK BONDS SA 5.25% CB 11/2/15(GDR REP 4 SHS)USD`REGS`,"
"77FO INTER AMERICAN DEVELOPMENT BANK 3.875% NTS 14/02/20 USD1000,"
"77HW EDP FINANCE BV 3.25% NTS 16/03/15 EUR50000,"
"77KB HSBC HLDGS 6% SUBORD NTS 29/03/40 GBP50000,"
"77KH SWEDISH COVERED BOND CORPORATION 3.25% NTS 30/03/17 EUR50000,"
"77KU BARCLAYS BANK PLC 0% NTS 28/05/15 GBP1,"
"77MP THOMAS COOK GROUP PLC 7.75% GTD NTS 22/06/17 GBP50000,"
"77MQ THOMAS COOK GROUP PLC 6.75% GTD NTS 22/06/15 EUR50000,"
"77ND BARCLAYS BANK PLC FRN 27/04/16 USD1000,"
"77OA RUSSIA 3.625% BDS 29/04/15 USD100000`144A`,"
"77OB RUSSIAN FEDERATION MINISTRY FINANCE 5% BDS 29/04/20 USD100000`REG S`,"
"77OC RUSSIA 5% BDS 29/04/20 USD100000`144A`,"
"77OH KAZMUNAIGAZ FINANCE SUB 7% NTS 05/05/20 USD100000`REG S`,"
"77QN ROYAL BANK OF SCOTLAND 6.875% NTS 17/05/25 GBP50000,"
"77QO ROYAL BANK OF SCOTLAND PLC 6% NTS 17/05/17 GBP50000,"
"77TX HSBC BANK PLC LEPO 09/06/20(CHONGQING CHANGAN AUTO)USD,"
"77WW STANDARD CHARTERED BANK HONG KONG 5.875% MTN 24/06/20 USD1000,"
"77YF ROYAL BANK OF SCOTLAND GROUP PLC 6.4% SNR NTS 21/10/19 USD100000,"
"77YT HSBC BANK PLC LEPO 22/06/20 (SH PHARM)USD 0.000001,"
"77YX UBS AG LONDON BRANCH 3.5% BDS 15/07/15 EUR1000,"
"77ZE HSBC BANK PLC 4% NTS 15/01/21 EUR50000,"
"78AD B.A.T.INTERNATIONAL FINANCE 5.75% GTD NTS 05/07/40 GBP50000,"
"78AQ HYDE HOUSING ASSOCIATION LTD 5.125% SEC BDS 23/07/40 GBP50000,"
"78BQ ONTARIO(PROVINCE OF) 2.7% BDS 16/06/15 USD5000,"
"78FF SKANDINAVISKA ENSKILDA BANKEN 2.5% NTS 01/09/15 EUR1000,"
"78GL CAFFYNS 6.5% CUM 1ST PRF GBP1,"
"78HP BURGAN FINANCE NO 1(JERSEY)LTD 7.875% SUB NTS 29/09/20 USD100000`REG S`,"
"78HZ ONTARIO(PROVINCE OF) 3% INSTRUMENT 28/09/20 EUR1000,"
"78IH GE CAPITAL UK FUNDING 4.125% NTS 28/09/17 GBP2000,"
"78II COVENTRY BUILDING SOCIETY 5.875% NTS 28/09/22 GBP50000,"
"78JT BARCLAYS BANK PLC INFLATION LKD NTS 15/10/20 GBP1000,"
"78KI SKANDINAVISKA ENSKILDA BANKEN 2.625% CVD BDS 16/10/17 EUR50000,"
"78MB RUSHYDRO FINANCE LTD 7.875% LOAN PART NTS 28/10/15 RUB2500000,"
"78ZE ABBEY NATIONAL TREASURY SERVICES 4.375% BDS 24/01/18 EUR100000,"
"79GL CAFFYNS 10% CUM PRF GBP1,"
"79QK ANGLO AMERICAN CAPITAL 9.375% SNR NTS 08/04/19 USD100000`144A`,"
"79QL FIRSTGROUP 8.750% BDS 08/04/21 GBP50000,"
"79SF NESTLE HLDGS INC 7.25% NTS 31/01/11 AUD2000,"
"79ZU BRITISH COLUMBIA(PROVINCE OF)CANADA 2.85% BDS 15/6/15 USD50000 BCUSG-4,"
"80AH SCF CAPITAL LTD 5.375% SNR NTS 27/10/17 USD200000 REG S,"
"80MF STANDARD BANK PLC 8.125% SUBORD MTN 02/12/19 USD100000,"
"80ML 6.75% BDS 03/12/28 GBP50000,"
"80TW ARTESIAN FINANCE II 6% NTS 30/9/33 GBP(VAR),"
"80VA DAILY MAIL & GENERAL TRUST 5.75% BDS 7/12/18 GBP(VAR),"
"80ZX FIRSTGROUP 6.125% BDS 18/1/19 GBP(VAR) REG`S`,"
"81CE LEGAL & GENERAL GROUP 5.875% UNDATED RESET SUBNTS GBP(VAR),"
"81GV HBOS CALL 4.375%/FRN 30/10/19 EUR(VAR),"
"81HJ LLOYDS TSB BANK PLC PRIM CAP UNDATED FLTG RATE NTS`2`USD,"
"81QV INTER AMERICAN DEVELOPMENT BANK 4.25% NTS 14/09/15 USD1000,"
"81SN BRITISH AMERICAN TOBACCO HLDGS(NL) 5.5% NTS 15/09/16 GBP50000,"
"81SO BRITISH AMERICAN TOBACCO HLDGS(NL) 4.375% SNR NTS 15/9/14 EUR50000,"
"81XM SCOTTISH WIDOWS PLC STEP UP PERP SUB NTS GBP50000,"
"82ET COMMONWEALTH BANK OF AUSTRALIA ACCRED FLTG RATE NTS 08/02/11 GBP50000,"
"82HM URUGUAY 7.625% BDS 21/03/36 USD1,"
"82HS EUROFIMA 5.25% INST 07/04/16 USD2000,"
"82JM ANNINGTON FINANCE NO 1 8% SECURED BDS 2/10/2021 GBP10000,"
"82LJ BARCLAYS BANK PLC FR SUB STP-UP CALL NTS 28/6/16 USD`REGS`,"
"82LO MONKS INVESTMENT TRUST 6.375% DEB STK 2023,"
"82NJ LCR FINANCE 4.5% GTD BDS 7/12/2038 GBP1000 REG'S',"
"83DA GRANITE MASTER ISSUER CLS`6A1`5.6% BDS 24/12/54 GBP100000,"
"83GI GLAXOSMITHKLINE CAPITAL 5.25% NTS 10/04/42 GBP50000,"
"83GK BET 5% PERP DEB STK,"
"83HC TESCO 5.125% NTS 10/04/47 EUR50000,"
"83HG MORGAN STANLEY STLG 5.75% SNR REGD NTS 14/02/17 GBP,"
"83HH COMPAGNIE DE ST-GOBAIN 4.75% NTS 11/04/17 EUR50000,"
"83IR GE CAPITAL UK FUNDING 5.625% NTS 25/04/19 GBP1000,"
"83NL SEVERN TRENT WATER UTILITIES FIN 6.125% GTD BDS 26/2/2024 GBP(VAR),"
"83VA ANGLO AMERICAN CAPITAL 5.875% GTD NTS 17/04/15 EUR50000,"
"83VX LLOYDS TSB BANK CALL SUBORD 6.9625%/FR NTS 29/5/20 GBP,"
"83WE MORGAN STANLEY EURO 6.5% SNR NTS 28/12/18 EUR50000,"
"83WI 3I GROUP 3.625% CNV BDS 29/5/11(3I GROUP)GBP50000,"
"84BH LLOYDS TSB BANK PLC 5.8% SNR NTS 13/01/20 USD100000`144A`,"
"84DG GE CAPITAL EUROPEAN FUNDING 6% NTS 15/01/19 EUR50000,"
"84FX TESCO 6.125% NTS 24/02/22 GBP50000,"
"84GA TESCO 5.125% NTS 24/02/15 EUR50000,"
"84LA ADECCO INTERNATIONAL FINANCIAL SVCS 7.625% NTS 28/04/14 EUR50000,"
"84LM ROYAL BANK OF SCOTLAND 7.5% NTS 29/04/24 GBP100000,"
"84QZ ONTARIO(PROVINCE OF) 2.75% BDS 22/02/11 USD5000,"
"84RC LONDON STOCK EXCHANGE GROUP 9.125% NTS 18/10/19 GBP50000,"
"84RM ANHEUSER-BUSCH INBEV SA 6.5% NTS 23/06/17 GBP1000,"
"84SJ SAINSBURY(J) 4.25% CNV BDS 16/7/14(JSAINSBURY ORD)GBP,"
"85BH UK TREASURY STRIP UK 5% TREASURY STRIP 2014 PRINCIPAL,"
"85FA PERMANENT FINANCING (NO.4) 3.9615%/FRN 6/42 EUR SER`5`CLS`A1`,"
"85GO MERRILL LYNCH & CO INC 5.75% NTS 12/12/14 GBP(VAR),"
"85MJ NETWORK RAIL INFRASTRUCTURE FINANCE 4.75% NTS 29/11/35 GBP50000,"
"85MK NETWORK RAIL INFRASTRUCTURE FINANCE 4.875% NTS 27/11/15 GBP50000,"
"85OY NETWORK RAIL INFRASTRUCTURE FINANCE 4.75% NTS 22/01/24 GBP1000,"
"85QJ BRITISH AIRWAYS 7.25% BDS 23/8/16 GBP(VAR),"
"85QV BROADGATE FINANCING CLS`A3`4.851% BDS 05/04/33 GBP5000,"
"85TO STANDARD LIFE FUNDING BV 6.14% GTD PERP SUB NTS GBP50000,"
"85UE VATTENFALL TREASURY AB 5.25%/FLTG RATE PERP BDS EUR1000,"
"85UG FRIENDS PROVIDENT 6.292%/VAR RTE PERP NTS GBP1000,"
"85VU LLOYDS TSB BANK 6.75% NTS 24/10/18 GBP50000,"
"85WZ COMPAGNIE DE ST-GOBAIN 4.875% SER`B`BDS 31/5/16 EUR50000,"
"85YR NETWORK RAIL INFRASTRUCTURE FINANCE 4.375% NTS 09/12/30 GBP50000,"
"86GK BRITISH EMPIRE SEC & GENERAL TRUST 8.125% DEB STK 2023,"
"86HF KILROOT ELECTRIC 9.5% SEC DEB STK 2006/10,"
"86JZ XSTRATA FINANCE CANADA 6.25% GTD NTS 27/05/15 EUR50000,"
"86NJ LCR FINANCE 4.5% GTD BDS 7/12/2028 GBP1000 REG'S',"
"87FQ NORTHERN ROCK (ASSET MANAGEMENT)PLC 5.625% CVD BDS 22/06/18 USD100000 `REGS`,"
"87FR NORTHERN ROCK (ASSET MANAGEMENT)PLC 5.625% CVD BDS 22/06/18 USD100000 `144A`,"
"87GO CO-OPERATIVE GROUP(CWS) 7.625% 1ST MTG DEB STK 2018,"
"87HJ LLOYDS TSB BANK PRIM CAP UNDATED FLTG RATE NTS USD10000,"
"87IM SVENSK EXPORTKREDIT AKTIEBOLAGET 5.125% GLOBAL NTS 01/03/17 USD2000,"
"87LV NETWORK RAIL INFRASTRUCTURE FINANCE 1.375% IDX LKD NTS 22/11/37 GBP50000,"
"87PN BARCLAYS BANK PLC 7.125% UNDATED SUBORD NTS GBP(VAR),"
"87PR LINDE FINANCE BV 6.5% NTS 29/1/2016 GBP(VAR),"
"87UD GHANA (REPUBLIC OF) 8.5% NTS 04/10/17 USD100000 `REGS`,"
"888 888 holdings ord gbp0.005,"
"88CB CLS`A`5.225% UNWRP BDS 15/02/25GBP`REGS`,"
"88CJ CLS`A`4.6% UNWRP BDS 30/09/16 EUR`REG S`,"
"88CN CLS`A`4.6% UNWRP BDS 15/02/20 EUR`REG S`,"
"88EI JARDINE STRATEGIC HLDGS ORD USD0.05,"
"88FV ICAP GROUP HLDGS PLC 7.50% NTS 28/07/14 EUR50000,"
"88GM SANTANDER FINANCE PREFERRED SA UNIP SER`8`FXD/FR N.CUM PERP GTD PFD SECS GBP,"
"88HB HSBC BANK PLC LEPO WTS 24/10/18(SUN PHARM INDUST) USD,"
"88JL REED ELSEVIER(INVESTMENTS)PLC 7% GTD NTS 11/12/17 GBP50000,"
"88JQ TELEFONICA EMISIONES SAU 5.496% INST 01/04/16 EUR50000,"
"88JR BHP BILLITON FINANCE 6.375% NTS 04/04/16 EUR50000,"
"88MH IMPERIAL TOBACCO FINANCE 9% GTD NTS 17/02/22 GBP50000,"
"88MI IMPERIAL TOBACCO FINANCE 8.375% GTD NTS 17/02/16 EUR50000,"
"88QT HSBC HLDGS 6.50% NTS 20/05/24 GBP50000 `15`,"
"88QZ RSA INSURANCE GROUP PLC FXD RTE GTD SUB STEP UP NTS 20/5/39 GBP,"
"88RJ BARCLAYS BANK PLC 10% SUB NTS 21/05/21 GBP50000,"
"88VK LEGAL & GENERAL GROUP 9.325% SUB NTS 23/07/41 GBP50000,"
"88VS KAZMUNAIGAZ FINANCE SUB 11.75% NTS 23/01/15 USD100000`REG S`,"
"88WB YORKSHIRE WATER SERVICES ODSAL FIN 6.6011% BDS 17/04/31 GBP50000,"
"89DG NATS(EN)ROUTE 5.25% GTD SEC AMORT BDS 31/3/26 GBP(VAR),"
"89LX NATIONAL WESTMINSTER BANK 6.5% NOTES 7/9/2021 GBP(VAR),"
"89RB SOCIETY OF LLOYDS(THE) 5.625%/FR SUB NTS 17/11/24 EUR50000,"
"90FE NATIONWIDE BUILDING SOCIETY 3.5% CVD BDS 07/12/16 EUR50000,"
"90JH NORTHERN GAS NETWORKS FINANCE 4.875% GTD BDS 30/06/27 GBP50000,"
"90RP WELLS FARGO BANK NA FLTG RATE NTS 19/09/11 EUR50000,"
"91EM WACHOVIA CORP 4.375% SUB NTS 27/11/18 EUR50000,"
"91ET WACHOVIA CORP 4.875% SUB NTS 29/11/35 GBP50000,"
"91RH BANK OF AMERICA CORP 4.75%/FLTG RTE NTS 23/5/17 EUR50000,"
"91XN BANCO COMERCIAL PORTUGUES 4.75% CVD BDS 29/10/14 EUR50000,"
"91ZF BARCLAYS BANK PLC 6.75%/FLTG RTE SUB CALL NTS 16/01/23 GBP,"
"92AX QUEBEC 4.75% NTS 29/04/18 EUR50000,"
"92BB MERRILL LYNCH & CO INC 7.75% NTS 30/04/18 GBP50000,"
"92BW SVG CAPITAL 8.25% CNV BDS 05/06/16 GBP50000,"
"92CN HSBC HLDGS 7% SUBORD NTS 07/04/38 GBP50000,"
"92IG LLOYDS TSB BANK PLC FRN 6/05/11 GBP100000,"
"92IL SKANDINAVISKA ENSKILDA BANKEN 5.5% NTS 06/05/14 EUR50000,"
"92IV VATTENFALL TREASURY AB 4.25% NTS 19/05/14 EUR50000,"
"92IZ UBS AG LONDON BRANCH 5.625% NTS 19/05/14 EUR1000,"
"92JL HSBC BANK PLC LEPO WTS 11/02/19(INDUS & COMM BK) USD,"
"92JO HSBC BANK PLC LEPO WTS 17/04/19(POLY REAL EST)USD,"
"92MU STATOILHYDRO ASA 4.375% NTS 11/03/15 EUR50000,"
"92NE SAFEWAY 6.125% BDS 17/12/2018 GBP(VAR),"
"92OD SAFEWAY 6.50% NOTES 5/8/2014 GBP(VAR),"
"92PG ANHEUSER-BUSCH INBEV SA 9.75% NTS 30/07/24 GBP75000,"
"92SA NATIONAL GRID GAS 6.375% INST 03/03/20 GBP50000,"
"92TI NORDEA BANK AB 4.5% UNSUB NTS 12/05/14 EUR50000,"
"92TM HSBC BANK PLC LEPO WTS 19/02/19(KWEICHOW MOUTAI)USD,"
"92TN HSBC BANK PLC LEPO WTS 11/02/19(CHINA PETROL&CHEM) USD,"
"92TT HSBC BANK PLC LEPO WTS 11/02/19(`A`WULIANGYE YIBIN)USD,"
"92TU HSBC BANK PLC LEPO WTS 11/02/19(CH MINSHENG BKG)USD,"
"92TV HSBC BANK PLC LEPO WTS 11/02/19(CH MERCHANTS BK) USD,"
"92VF GE CAPITAL UK FUNDING 5.875% NTS 18/01/33 GBP1000,"
"92XQ BUPA FINANCE 7.5% BDS 04/07/16 GBP50000,"
"92XS TDIC FINANCE LTD 6.5% NTS 02/07/14 USD100000`REG S`,"
"92YJ GLAXOSMITHKLINE CAPITAL 3.875% NTS 06/07/15 EUR50000,"
"93AD BARCLAYS BANK PLC 4.875% NTS 13/08/19 EUR50000,"
"93CW NATIONWIDE BUILDING SOCIETY 5.625% NTS 09/09/19 GBP50000,"
"93DF AUSTRALIA & NEW ZEALAND BANK GROUP 5.125% SUBORD DATED NTS 10/09/19 EUR,"
"93DR BARCLAYS BANK PLC STEP UP CALL FXD NTS 09/09/19 EUR50000,"
"93EC NORDEA BANK AB NON CUM FXD STP UP CAP CONT SECS USD2000,"
"93EV WILLIAM HILL PLC 7.125% GTD NTS 11/11/16 GBP50000,"
"93FA MOTABILITY OPERATIONS GROUP PLC 5.25% NTS 28/09/16 GBP50000,"
"93FQ BARCLAYS BANK PLC 4.25% NTS 06/01/15 GBP1,"
"93GR EASTERN GROUP 8.5% BDS 31/3/25 GBP(VAR),"
"93GS LUKOIL INTERNATIONAL FINANCE BV 6.375% GTD 05/11/14 USD1000`REG S`,"
"93GT LUKOIL INTERNATIONAL FINANCE BV 7.25% NTS 05/11/19 USD100000`REG S`,"
"93IA WERELDHAVE PROPERTY CORP 9.5% 1ST MTG DEB STK 2015,"
"93IH COMMONWEALTH BANK OF AUSTRALIA 4.25% NTS 10/11/16 EUR50000,"
"93IJ ONTARIO(PROVINCE OF) 4% BDS 07/10/19 USD5000,"
"93KP HSBC BANK PLC LEPO WTS 12/11/19(BAJAJ AUTO LTD)USD,"
"93MA SEGRO PLC 6.75% NTS 23/11/21 GBP50000,"
"93MU LBG CAPITAL NO.1 PLC 7.875% ENH CAP NT 1/11/20 USD `REGS`,"
"93MV LBG CAPITAL NO.1 PLC 7.875% ENH CAP NTS 1/11/20 USD`144A`,"
"93NC HSBC BANK PLC LEPO 25/11/19(JINDAL STEEL&POWER)USD,"
"93OB BARCLAYS BANK PLC 0% NTS 09/02/15 GBP1,"
"93RV EXPERIAN FINANCE PLC 4.75% GTD NTS 04/02/20 EUR50000,"
"93TH ALLIANCE OIL CO LTD 9.875% GTD NTS 11/03/15 USD`REG S`,"
"93TR 3I GROUP 5.625% NTS 17/03/17 EUR50000,"
"93TS LLOYDS TSB BANK PLC 3.375% CVD BDS 17/03/15 EUR50000,"
"93VF GE CAPITAL EUROPEAN FUNDING 4.25% NTS 01/03/17 EUR1000,"
"93WA LLOYDS TSB BANK PLC 6.5% SUBORD NTS 24/03/20 EUR50000,"
"93WK TELEFONICA EMISIONES SAU 3.406% INST 24/03/15 EUR1000,"
"93WQ GO-AHEAD GROUP 5.375% BDS 29/09/17 GBP1000,"
"94FM HSBC BANK PLC 3.125% NTS 15/11/17 EUR50000,"
"94GL YORKSHIRE BUILDING SOCIETY 3.25% GBL CVD BDS 22/09/15 EUR100000,"
"94HJ LLOYDS TSB BANK 9.625% SUBORD BDS 6/4/2023 GBP(VAR)(BR),"
"94HS SB CAPITAL SA 5.4% LN PTG 24/3/17 USD100000 REG`S,"
"94JC NATIONAL EXPRESS GROUP 6.625% MTN 17/06/20 GBP50000,"
"94KH INTER AMERICAN DEVELOPMENT BANK 2.25% NTS 15/07/15 USD1000,"
"94KI STANDARD CHARTERED 3.625% NTS 15/12/15 EUR50000,"
"94LQ YORKSHIRE WATER SERVICES BRADFD FIN 6% FXD/FLTG RTE NTS 24/04/25 GBP50000 B1,"
"94MD ANHEUSER-BUSCH INBEV SA 4% NTS 26/04/18 EUR1000,"
"94MJ BBVA SENIOR FINANCE SA UNIPERSONAL 3.25% NTS 23/04/15 EUR50000,"
"94NS GE CAPITAL TRUST II 5.5%FLTG 9/67 TST SEC GE CAP II EUR REGS,"
"94OR BARCLAYS BANK PLC 6% NTS 14/01/21 EUR50000,"
"94RL BANK OF AMERICA CORP 4.625% SNR NTS 07/08/17 EUR50000,"
"94VY BAA FUNDING 18 6.25% BDS 10/09/18 GBP50000 B-1,"
"94WR BP CAPITAL MARKETS 3.1% GTD NTS 07/10/14 EUR50000 69,"
"94WS BP CAPITAL MARKETS 3.83% GTD NTS 06/10/17 EUR50000 70,"
"94XC KAZAKHSTAN TEMIR ZHOLY 6.375% NTS 06/10/20 USD200000 REG`S,"
"94YD BAA FUNDING.18 4.125% NTS 12/10/18 EUR50000,"
"94YR ABBEY NATIONAL TREASURY SERVICES 3.375% SNR NTS 20/10/15 EUR1000,"
"94ZI DUBAI ELECTRICITY & WATER AUTHORITY 6.375% NTS 21/10/16 USD100000 REG S,"
"94ZK DUBAI ELECTRICITY & WATER AUTHORITY 7.375% NTS 21/10/20 USD100000 REG S,"
"95BT NORDEA BANK FINLAND 2.25% CVD BDS 16/11/15 EUR50000,"
"95DO BG ENERGY CAPITAL 5.125% MTN 01/12/25 GBP1000,"
"95KZ LUKOIL INTERNATIONAL FINANCE BV 2.625% CNV BDS 16/6/15(LUKOIL ADR)USD,"
"95LS ANGLIAN WATER (OSPREY)FINANCING PLC 7% GTD SEC NTS 31/01/18 GBP100000,"
"95LZ EXPERIAN FINANCE PLC 4.75% GTD NTS 23/11/18 GBP1000,"
"96DU LLOYDS TSB BANK 7.50% NTS 15/04/24 GBP100000,"
"96DV VATTENFALL AB 6.875% NTS 15/04/39 GBP50000,"
"96GL CABLE & WIRELESS INTERN FINANCE BV 8.625% BDS 25/3/2019 GBP10000,"
"96QU GE CAPITAL EUROPEAN FUNDING 2.875% NTS 17/09/15 EUR1000,"
"97KI GUOMAN HOTELS LTD 7.875% 1ST MTG DEB STK 2022,"
"97OI EUROFIMA 6.125% NOTES 14/10/2014 GBP100000,"
"98HC ITALY(REPUBLIC OF) 10.5% BDS 28/4/2014 GBP(VAR)(BR),"
"98IV HALIFAX 9.375% SUBORD BDS 15/5/2021 GBP(VAR)(BR),"
"99GT FUNDING FOR HOMES 10.125% DEB STK 2018,"
"AA07 FTSE Advanced Emerging,"
"AA18 BARCLAYS BANK PLC 5.75% SUB NOTES 14/9/2026 GBP(VAR),"
"AAA All Asia Asset Capital L,"
"AADV Albion Development Vct Plc,"
"AAEV Albion Enterprise Vct Plc,"
"AAIF Aberdeen Asian Income Fund Ltd,"
"AAL Anglo American Plc,"
"AAM Artemis Vct Plc,"
"AAS Aberdeen Asian Smaller Companies Investm,"
"AASC Aberdeen Asian Smaller Companies Investm,"
"AASI Amundi Investment Solutions,"
"AASU Amundi Investment Solutions,"
"AATG Albion Technology & General Vct Plc,"
"AAU Ariana Resources Plc,"
"AAVC Albion Venture Capital Tst Plc,"
"AAZ Anglo Asian Mining Plc,"
"ABBY Abbey Plc,"
"ABC Abcam Plc,"
"ABD Aberdeen New Dawn Investment Trust Plc,"
"ABDP Ab Dynamics Plc,"
"ABF Associated British Foods Plc,"
"ABG African Barrick Gold Plc,"
"ABM Albemarle & Bond Holdings Plc,"
"ABND SSGA SPDR ETFS Europe I Plc,"
"ABT Abbott Laboratories,"
"ABTX Aqua Bounty Technologies Inc.,"
"AC24 FTSE Japan LMS Index,"
"ACC Access Intelligence Plc,"
"ACD Acencia Debt Strategies Ltd,"
"ACE Auhua Clean Energy Plc,"
"ACHL Asian Citrus Holdings Limited,"
"ACID ACER INC GDR EACH REPR 5 ORD TWD10 REG`S`(CIT),"
"ACIM SSGA SPDR ETFS Europe I Plc,"
"ACL Acal Plc,"
"ACM Accumuli Plc,"
"ACMG Acm Shipping Group Plc,"
"ACNAN FTSE North America All C,"
"ACNANCH FTSE North America All C,"
"ACNANEU FTSE North America All C,"
"ACNANUK FTSE North America All C,"
"ACP Armadale Capital Plc,"
"ACSO Accesso Technology Group,"
"ACT Actual Experience Plc,"
"ACTA Acta S.P.A,"
"ACU African Copper Plc,"
"ACWD SSGA SPDR ETFS Europe I Plc,"
"ACWI SSGA SPDR ETFS Europe I Plc,"
"AD01 FTSE Developed,"
"AD02 FTSE Developed ex US,"
"AD03 FTSE Developed ex North America,"
"AD04 FTSE Developed ex UK,"
"AD05 FTSE Developed ex Japan,"
"AD06 FTSE Developed Europe,"
"AD07 FTSE Developed Europe ex UK,"
"AD09 FTSE Dev LMS ex US Index,"
"AD13 FTSE Dev Europe LMS Index,"
"AD17 FTSE Dev LMS ex NA Index,"
"AD20 FTSE Dev Europe LMS ex UK Index,"
"ADA Adams Plc,"
"ADAM Adamas Finance Asia Limi,"
"ADI Alexander David Investments Plc,"
"ADM Admiral Group Plc,"
"ADMF Advance Developing Markets Fund Limited,"
"ADN Aberdeen Asset Management Plc,"
"ADT Adept Telecom Plc,"
"AE01 FTSE Emerging,"
"AE57 AVIVA 6.125% RESET SUB NTS 14/11/2036 GBP(VAR),"
"AEC Aec Education Plc,"
"AEEM Amundi Investment Solutions,"
"AEFS Alcentra European Floating Rate Income F,"
"AEG Active Energy Group Plc,"
"AEJ Lyxor International Asse,"
"AEJL Lyxor International Asse,"
"AEN Andes Energia Plc,"
"AEO Aeorema Communications Plc,"
"AEP Anglo-Eastern Plantations Plc,"
"AERL Aer Lingus Group Plc,"
"AEX Aminex Plc,"
"AEXK Amundi Investment Solutions,"
"AEY Antrim Energy Inc,"
"AFC Afc Energy Plc,"
"AFCR African Consolidated Resources Plc,"
"AFE African Eagle Resources Plc,"
"AFID AFI DEVELOPMENT PLC GDR EACH REPR 1 ORD `REGS`,"
"AFMF Advance Frontier Markets Fund Limited,"
"AFN Advfn Plc,"
"AFPO African Potash Limited,"
"AFR Afren Plc,"
"AFRB Afi Development Plc,"
"AFRI Afriag Plc,"
"AFRK Afarak Group Plc,"
"AFS Amiad Water Systems Ltd,"
"AFSL Lyxor International Asse,"
"AFSU Lyxor International Asse,"
"AG01 FTSE All-Emerging,"
"AG02 FTSE All-Emerging Latin America,"
"AG03 FTSE All-Emerging Asia Pacific,"
"AG14 FTSE All-Emer LMS Index,"
"AG15 FTSE All-Emer Latin America LMS Idx,"
"AG16 FTSE All-Emer Asia Pacific LMS Idx,"
"AG41 NORTHUMBRIAN WATER FINANCE 6% GTD BDS 11/10/2017 GBP(VAR),"
"AG93 SAFEWAY 6% NOTES 10/1/2017 GBP(VAR),"
"AG99 GLAXOSMITHKLINE CAPITAL 5.25% GTD NTS 19/12/33 GBP1000,"
"AGA Aga Rangemaster Group Plc,"
"AGAP ETFS Commodity Securities Limited,"
"AGCP ETFS Commodity Securities Limited,"
"AGD Anglogold Ashanti Ld,"
"AGGP ETFS Commodity Securities Limited,"
"AGGS Barclays Bank Plc,"
"AGIT Aberforth Geared Income Trust Plc,"
"AGIZ Aberforth Geared Income Trust Plc,"
"AGK Aggreko Plc,"
"AGL Angle Plc,"
"AGM Applied Graphene Materia,"
"AGOL Ashmore Global Opportunities Limited,"
"AGOU Ashmore Global Opportunities Limited,"
"AGP Asian Growth Properties Limited,"
"AGQ Arian Silver Corporation,"
"AGR Assura Group Ld,"
"AGRI Etfx Fund Company Plc,"
"AGRO Ros Agro Plc,"
"AGRP Etfx Fund Company Plc,"
"AGTA Agriterra Ld,"
"AGY Allergy Therapeutics Plc,"
"AH09 SOUTHERN ELECTRIC POWER DISTRIBUTIO 5.5% BDS 7/6/2032 GBP(VAR),"
"AHCG Action Hotels Plc,"
"AHT Ashtead Group Plc,"
"AI68 NATIONAL GRID GAS 6% INSTRUMENTS 7/6/2017 GBP(VAR),"
"AIE Anite Plc,"
"AIEA Airea Plc,"
"AIF Acorn Income Fund Ld,"
"AIFZ Acorn Income Fund Ld,"
"AIGA ETFS Commodity Securities Limited,"
"AIGC ETFS Commodity Securities Limited,"
"AIGE ETFS Commodity Securities Limited,"
"AIGG ETFS Commodity Securities Limited,"
"AIGI ETFS Commodity Securities Limited,"
"AIGL ETFS Commodity Securities Limited,"
"AIGO ETFS Commodity Securities Limited,"
"AIGP ETFS Commodity Securities Limited,"
"AIGS ETFS Commodity Securities Limited,"
"AIGX ETFS Commodity Securities Limited,"
"AIM1 FTSE-AIM UK100 Index,"
"AIM5 FTSE-AIM UK50 Index,"
"AIND Amundi Investment Solutions,"
"AIP Air Partner Plc,"
"AIS Alternative Investment Strategies Ld,"
"AJG Atlantis Japan Growth Fund Ld,"
"AJIT Aberdeen Japan Investmen,"
"AK44 ENTERPRISE INNS 6.375% SEC BDS 26/9/2031 GBP1000,"
"AKR Akers Biosciences Inc.,"
"AKRN ACRON JSC GDR EACH REPR 0.1 SH `REGS`,"
"AKT Ark Therapeutics Group Plc,"
"ALAI Aberdeen Latin American Income Fund Limi,"
"ALAS Aberdeen Latin American Income Fund Limi,"
"ALAT Amundi Investment Solutions,"
"ALAU Amundi Investment Solutions,"
"ALBA Alba Mineral Resources Plc,"
"ALBH Aluminium Bahrain B.S.C.,"
"ALK Alkane Energy Plc,"
"ALL Allocate Software Plc,"
"ALLG All Leisure Group Plc,"
"ALNT Alent Plc,"
"ALO Alecto Minerals Plc,"
"ALPH Alpha Pyrenees Trust Ltd,"
"ALR Alternative Energy Limited,"
"ALT Altitude Group Plc,"
"ALTE Etfx Fund Company Plc,"
"ALTP Etfx Fund Company Plc,"
"ALU Alumasc Group Plc,"
"ALUM ETFS Commodity Securities Limited,"
"ALUU UBS Ag,"
"ALY Ashley [Laura] Holdings Plc,"
"AMA Amara Mining Plc,"
"AMC Amur Minerals Corporation,"
"AMEC Amec Plc,"
"AMED Amedeo Resources Plc,"
"AMER Amerisur Resources Plc,"
"AMI African Minerals Limited,"
"AML Amlin Plc,"
"AMO Amino Technologies Plc,"
"AMP Amphion Innovations Plc,"
"AMR Armour Group Plc,"
"AMS Advanced Medical Solutions Group Plc,"
"AN ALTERNATIVE NETWORKS ORD GBP0.00125,"
"AN26 TALISMAN ENERGY INC 6.625% SNR UNSUB NTS 5/12/17 GBP(VAR),"
"AN94 BARCLAYS BANK PLC 6.125% SUB NTS PERP GBP(VAR),"
"AN95 BARCLAYS BANK PLC 6.375% UND SUB NTS GBP(VAR),"
"ANA All Nippon Airways Co Ld,"
"ANCR Animalcare Group Plc,"
"ANH Al Noor Hospitals Group,"
"ANP Anpario Plc,"
"ANR Altona Energy Plc,"
"ANRJ Amundi Investment Solutions,"
"ANTO Antofagasta Plc,"
"ANW Aberdeen New Thai Investment Trust Plc,"
"ANX Amundi Investment Solutions,"
"ANXU Amundi Investment Solutions,"
"AOF Africa Opportunity Fund Limited,"
"AOL Africa Oilfield Logistic,"
"AOMD AO MOSENERGO ADR EACH REP 100 ORD LVL1(BNY),"
"AOR Aortech International Plc,"
"APC Advanced Power Components Plc,"
"APEF Aberdeen Private Equity Fund Ld,"
"APF Anglo Pacific Group Plc,"
"APH Alliance Pharma Plc,"
"API Api Group Plc,"
"APR Apr Energy Plc,"
"APT Axa Property Trust Limited,"
"AQP Aquarius Platinum Ld,"
"ARBB Arbuthnot Banking Group Plc,"
"ARC Arcontech Group Plc,"
"ARCH Arc Capital Holdings Limited,"
"ARCL Altus Resource Capital Limited,"
"ARDN Arden Partners Plc,"
"ARG Argos Resources Limited,"
"ARGO Argo Group Limited,"
"ARGP Alpha Returns Group Plc,"
"ARL Atlantis Resources Limit,"
"ARM Arm Holdings Plc,"
"ARMS Bumi Plc,"
"ARP Ashcourt Rowan Plc,"
"ARR Aurora Investment Trust Plc,"
"ARTA Artilium Plc,"
"ARTL Alpha Real Trust Limited,"
"ARW Arrow Global Group Plc,"
"ASAT FTSE Asian Autos & Trucks Index,"
"ASBA FTSE Asian Banks Index,"
"ASBE Associated British Engineering Plc,"
"ASBR FTSE Asian Basic Resources Index,"
"ASC Asos Plc,"
"ASCH Aberdeen Smaller Companies High Income T,"
"ASCM FTSE Asian Construction & Materials Inde,"
"ASDV SSGA SPDR ETFS Europe I,"
"ASECE Ftse/Athex Capped 20 Index,"
"ASECU Ftse/Athex 20 Capped Index,"
"ASFS FTSE Asian Financial Services Index,"
"ASH Ashley House Plc,"
"ASHC FTSE Asian Health Care Index,"
"ASHM Ashmore Group Plc,"
"ASHR DB X-Trackers,"
"ASIA SSGA SPDR ETFS Europe I Plc,"
"ASIG FTSE Asian Industrial Goods & Services I,"
"ASIL Lyxor International Asse,"
"ASIU Lyxor International Asse,"
"ASL Aberforth Smaller Companies Trust Plc,"
"ASMT FTSE Asian Marine Transportation Index,"
"ASOG FTSE Asian Oil & Gas Index,"
"ASPH FTSE Asian Personal & Household Goods In,"
"ASPL Aseana Properties Limited,"
"ASPR FTSE Asian Personal & Household Goods In,"
"ASRE FTSE Asian Retail Index,"
"AST Ascent Resources Plc,"
"ASTA Astar Minerals Plc,"
"ASTC FTSE Asian Telecommunications Index,"
"ASTE FTSE Asian Technology Index,"
"ASTL FTSE Asian Travel Leisure & Media Index,"
"ASTO Assetco Plc,"
"ASUT FTSE Asian Utilities Index,"
"ASW Advanced Computer Software Grp Plc,"
"ASX FTSE All-Share,"
"ASXX FTSE All-Share [Exit],"
"ASY Andrews Sykes Group Plc,"
"AT03 LLOYDS TSB BANK 5.875% SUB NOTES 20/6/2014 GBP(VAR),"
"ATAD Oao Tatneft,"
"ATC Atlantic Coal Plc,"
"ATI Amati Vct Plc,"
"ATK Atkins [Ws] Plc,"
"ATMA Atlas Mara Co-Nvest Limi,"
"ATMW Atlas Mara Co-Nvest Limi,"
"ATR Asian Total Return Inves,"
"ATS Artemis Alpha Trust Plc,"
"ATSS Artemis Alpha Trust Plc,"
"ATST Alliance Trust Plc,"
"ATY Athelney Trust Plc,"
"AUCA Auction Gilt,"
"AUCO Etfx Fund Company Plc,"
"AUCP Etfx Fund Company Plc,"
"AUDP ETFS Foreign Exchange Limited,"
"AUE Aureus Mining Inc.,"
"AUEM Amundi Investment Solutions,"
"AUG Augean Plc,"
"AUGB ETFS Foreign Exchange Limited,"
"AUK Aukett Fitzroy Robinson Group Plc,"
"AUKD Amundi Investment Solutions,"
"AUKT Aberdeen UK Tracker Trus,"
"AUMP Alpha UK Multi Property Trust Plc,"
"AUP3 ETFS FOREIGN EXCHANGE LTD ETFS 3X LONG AUD SHORT GBP,"
"AUR Aurum Mining Plc,"
"AURR Aurora Russia Limited,"
"AV Aviva,"
"AV.A Aviva Plc,"
"AV.B Aviva Plc,"
"AVA Avanti Capital Plc,"
"AVAP Avation Plc,"
"AVCT Avacta Group Plc,"
"AVG Avingtrans Plc,"
"AVGR AVANGARDCO INVESTMENTS PUBLIC LTD GDRS EACH 10 REPR 1 SH `REG S` WI,"
"AVM Avocet Mining Plc,"
"AVN Avanti Communications Group Plc,"
"AVO Advanced Oncotherapy Plc,"
"AVON Avon Rubber Plc,"
"AVP Armstrong Ventures Plc,"
"AVR Avarae Global Coins Plc,"
"AVS Avesco Group Plc,"
"AVV Aveva Group Plc,"
"AW01 FTSE All World,"
"AW02 FTSE All World ex US,"
"AW03 FTSE All World ex UK,"
"AW04 FTSE All World ex Japan,"
"AW05 FTSE All World ex South Africa,"
"AW06 FTSE All World Asia Pacific,"
"AW07 FTSE All World Asia Pacific ex Japan,"
"AW08 FTSE All World Asia Pac ex Jap India&Pa,"
"AW09 FTSE All World Asia Pac ex Jap Ind Pak,"
"AW10 FTSE All World Greater China,"
"AW11 FTSE All World Europe,"
"AW12 FTSE All World Europe ex UK,"
"AW13 FTSE All World Europe ex Eurobloc,"
"AW14 FTSE All World Eurobloc,"
"AWAMERS FTSE Americas Index,"
"AWDEURSG FTSE Developed Europe In,"
"AWDPACXJ FTSE All-World Devlop Asia Pacific Exclu,"
"AWDPCXJE FTSE Developed Asia Paci,"
"AWDPCXJG FTSE Developed Asia Paci,"
"AWNAMERS FTSE All-World North America Index,"
"AWPXJANN FTSE Asia Pacific Ex Jap,"
"AXB Axis Bank Limited,"
"AXM Alexander Mining Plc,"
"AXS Accsys Technologies Plc,"
"AXX FTSE Aim All-Share Index,"
"AYM Anglesey Mining Plc,"
"AZEM Az Electronic Materials S.A.,"
"AZN Astrazeneca Plc,"
"AZO Azonto Petroleum Ltd,"
"B034 BARCLAYS BANK PLC SIMPLE 1136 NTS 23/03/15(FTSE 100)GBP1,"
"BA Bae Systems Plc,"
"BA18 THAMES WATER UTILITIES FINANCE LD 6.5% GTD BDS 9/2/2032 GBP100000,"
"BAB Babcock International Group Plc,"
"BABE Bluecrest Allblue Fund Limited,"
"BABS Bluecrest Allblue Fund Limited,"
"BABU Bluecrest Allblue Fund Limited,"
"BAC Bank of America Corporation,"
"BACT Bacit Limited,"
"BAE Beale Plc,"
"BAF British & American Investment Trust Plc,"
"BAG Barr [A.G.] Plc,"
"BAO Baobab Resources Plc,"
"BAR Eclectic Bar Group Plc,"
"BARC Barclays Plc,"
"BATS British American Tobacco Plc,"
"BAUD BAJAJ AUTO GDR EACH REPR 1 SHS INR10 REG'S',"
"BAV Baronsmead Vct 5 Plc,"
"BB50 BARCLAYS BANK PLC 14% STEP-UP CALL PERP RCI GBP50000,"
"BB67 CLYDEPORT OPERATIONS 3% IRRD STK,"
"BB77 NATIONAL WESTMINSTER BANK 7.875% SUB NTS 9/9/2015GBP(VAR),"
"BB86 CLYDEPORT OPERATIONS 4% IRRD STK,"
"BB90 LEWIS(JOHN) 5% 1ST CUM PRF STK GBP1,"
"BBA Bba Aviation Plc,"
"BBGI Bilfinger Berger Global Infrastructure S,"
"BBOX Tritax Big Box REIT Plc,"
"BBTS Bluecrest Bluetrend Limited,"
"BBTU Bluecrest Bluetrend Limited,"
"BBY Balfour Beatty Plc,"
"BBYB Balfour Beatty Plc,"
"BC18 SCOTTISH & SOUTHERN ENERGY 5.875% BDS 22/9/2022 GBP(VAR),"
"BC32 LEWIS(JOHN) 7% CUM PRF STK GBP1,"
"BC41 PRUDENTIAL 6 7/8% BDS 20/1/2023 GBP(VAR)(BR),"
"BC82 COMPASS GROUP 7% BDS 8/12/2014 GBP(VAR),"
"BC94 SAMSUNG ELECTRONICS CO GDR EACH REP 1/2 KRW(REG`S`/144A) REGD,"
"BCAP Better Capital Pcc Limited,"
"BCB Bcb Holdings Limited,"
"BCGR Blue Capital Global Rein,"
"BD12 UNITED UTILITIES ELECTRICITY LTD 8.875% BDS 25/3/26 GBP(VAR),"
"BD26 BRISTOL WATER 4% CONS DEB STK IRRD,"
"BD45 LEWIS(JOHN)PARTNERSHIP 5% CUM PRF STK GBP1,"
"BD52 AVIVA 9.50% GTD BDS 20/6/2016 GBP(VAR)(BR),"
"BD56 NATIONAL GRID ELECTRICITY TRANS. 5.875% BDS 2/2/2024 GBP(VAR),"
"BD83 BRISTOL WATER 4% PERP DEB STK,"
"BDEV Barratt Developments Plc,"
"BDI Bond International Software Plc,"
"BDV Baronsmead Vct Plc,"
"BE70 BIRMINGHAM AIRPORT(FINANCE) 6.25% GTD BDS 22/2/2021 GBP(VAR),"
"BEE Baring Emerging Europe Plc,"
"BEEP Blackrock Emerging Europ,"
"BEG Begbies Traynor Group Plc,"
"BEM Beowulf Mining Plc,"
"BES Blavod Wines and Spirits Plc,"
"BEST Best of The Best Plc,"
"BET Betfair Group Plc,"
"BEZ Beazley Plc,"
"BFA Basf Se,"
"BG BG Group,"
"BG91 PEARSON 7% BDS 27/10/2014 GBP(VAR),"
"BGBL Bglobal Plc,"
"BGEO Bank of Georgia Holdings Plc,"
"BGFD Baillie Gifford Japan Trust Plc,"
"BGHL Boussard & Gavaudan Holding Limited,"
"BGHS Boussard & Gavaudan Holding Limited,"
"BGL Bullabulling Gold Limited,"
"BGO Bango Plc,"
"BGS Baillie Gifford Shin Nippon Plc,"
"BHCG Bh Credit Catalysts Limited,"
"BHCU Bh Credit Catalysts Limited,"
"BHGE Bh Global Limited,"
"BHGG Bh Global Limited,"
"BHGU Bh Global Limited,"
"BHME Bh Macro Limited,"
"BHMG Bh Macro Limited,"
"BHMU Bh Macro Limited,"
"BHR Beacon Hill Resources Plc,"
"BHUE Blackrock Hedge Selector Ltd,"
"BHY Boot [Henry] Plc,"
"BILL Billing Services Group Limited,"
"BILN Billington Holdings Plc,"
"BIOG Biotech Growth Trust [The] Plc,"
"BIOM Biome Technologies Plc,"
"BISI Bisichi Mining Plc,"
"BJU Brainjuicer Group Plc,"
"BKG Berkeley Group Holdings [The] Plc,"
"BKIC Bank of Ireland [Governor & Company of T,"
"BKIR Bank of Ireland [Governor & Company of T,"
"BKM BANK MUSCAT GDR EACH REPR 4 ORD REG`S`,"
"BKSA Black Sea Property Fund Limited [The],"
"BKY Berkeley Resources Limited,"
"BL23 SCOTTISH POWER UK 8.375% BDS 20/2/2017 GBP(VAR)(BR),"
"BLBD BLOM BANK SAL GDS EACH REPR 1 ORD`B`SHS(REG`S`),"
"BLCK Blackstar Group Se,"
"BLEY Bailey [C.H.] Plc,"
"BLND British Land Company Plc,"
"BLNX Blinkx Plc,"
"BLP Blue Planet International Financials Inv,"
"BLT Bhp Billiton Plc,"
"BLU Blue Star Capital Plc,"
"BLUR Blur (Group) Plc,"
"BLV Belvoir Lettings Plc,"
"BLVN Bowleven Plc,"
"BMD Baronsmead Vct 3 Plc,"
"BMK Benchmark Holdings Plc,"
"BMN Bushveld Minerals Limited,"
"BMR Berkeley Mineral Resources Plc,"
"BMS Braemar Shipping Services Plc,"
"BMT Braime [T.F. & J.H.] [Holdings] Plc,"
"BMTO Braime [T.F. & J.H.] [Holdings] Plc,"
"BMY Bloomsbury Publishing Plc,"
"BMZ Black Mountain Resources Limited,"
"BNC Banco Santander S.A.,"
"BNK Bankers Petroleum Limited,"
"BNKR Bankers Investment Trust Plc,"
"BNS Baronsmead Vct 4 Plc,"
"BNZL Bunzl Plc,"
"BO46 SEGRO PLC 6.75% NOTES 23/2/2024 GBP(VAR),"
"BOD Botswana Diamonds Plc,"
"BODD BANCO DE CHILE ADR EACH REP 600 ORD NPV,"
"BOE Boeing Co.,"
"BOI Bank of Ireland [Governor & Company of T,"
"BOIL Baron Oil Plc,"
"BOK Booker Group Plc,"
"BON Bonmarche Holdings Plc,"
"BOO Boohoo.Com Plc,"
"BOR Borders & Southern Petroleum Plc,"
"BOX Boxhill Technologies Plc,"
"BOY Bodycote Plc,"
"BP Bp - British Petroleum Plc,"
"BP.A BP Plc,"
"BP.B BP Plc,"
"BPC Bahamas Petroleum Company Plc,"
"BPI British Polythene Industries Plc,"
"BPKD BANK PEKAO SA GDS EACH REPR 1 PLN1  REG`S,"
"BPM B.P. Marsh & Partners Plc,"
"BPTY Bwin.Party Digital Entertainment Plc,"
"BQ59 NORDIC INVESTMENT BANK 5.75% NOTES 16/12/2014 GBP(VAR),"
"BQAD BANK AUDI SAL(AUDI-SARADAR GP) GDR REPR 1`B`SHR LBP2000(REG S),"
"BQE Bioquell Plc,"
"BR06 HSBC BANK PLC 6.5% SUB NTS 7/7/2023 GBP(VAR),"
"BRAM Brammer Plc,"
"BRBY Burberry Group Plc,"
"BRCI Blackrock Commodities Income Investment,"
"BRD Bluerock Diamonds Plc,"
"BRDX RBS Market Access,"
"BRDY Brady Exploration Plc,"
"BREE Breedon Aggregates Ld,"
"BRFI Blackrock Frontiers Investment Trust Plc,"
"BRGE Blackrock Greater Europe Investment Trus,"
"BRGS Blackrock Greater Europe,"
"BRH Braveheart Investment Group Plc,"
"BRIC Ishares II Plc,"
"BRIG Blackrock Income and Growth Investment T,"
"BRIT Brit Plc,"
"BRK Brooks Macdonald Group Plc,"
"BRLA Blackrock Latin American Investment Trus,"
"BRNA Blackrock North American,"
"BRNT ETFS Commodity Securities Limited,"
"BRSC Blackrock Smaller Co Trust Plc,"
"BRSN Berendsen Plc,"
"BRT Brightside Group Plc,"
"BRW Brewin Dolphin Holdings Plc,"
"BRWM Blackrock World Mining Trust Plc,"
"BRY Brady Plc,"
"BRZ Amundi Investment Solutions,"
"BS41 3I GROUP 6.875% BDS 9/3/23 GBP1000,"
"BSC British Smaller Companies Vct2 Plc,"
"BSE Base Resources Limited,"
"BSET British Assets Trust Plc,"
"BSIF Bluefield Solar Income F,"
"BSRT Baker Steel Resources Trust Limited,"
"BSV British Smaller Companies Vct Plc,"
"BSY British Sky Broadcasting Group Plc,"
"BT.A Bt Group Plc,"
"BTEM British Empire Securities & General Trus,"
"BTG Btg Plc,"
"BULL ETFS Commodity Securities Limited,"
"BULP ETFS Commodity Securities Limited,"
"BUPF Bupa Finance Plc,"
"BUR Burford Capital Limited,"
"BUT Brunner Investment Trust Plc,"
"BVA Banco Bilbao Vizcaya Argentaria Sa,"
"BVC Batm Advanced Communications Ld,"
"BVIC Britvic Plc,"
"BVM Belgravium Technologies Plc,"
"BVS Bovis Homes Group Plc,"
"BVT Baronsmead Vct 2 Plc,"
"BWNG Brown [N] Group Plc,"
"BWRA Bristol Water Plc,"
"BWSA Bristol & West Plc,"
"BWY Bellway Plc,"
"BWYA Bellway Plc,"
"BXP Beximco Pharmaceuticals Limited,"
"BYG Big Yellow Group Plc,"
"BYOT Byotrol Plc,"
"BZM Bellzone Mining Plc,"
"BZT Bezant Resources Plc,"
"C21 21ST CENTURY TECHNOLOGY PLC ORD GBP0.10,"
"CAD Cadogan Petroleum Plc,"
"CADP ETFS Foreign Exchange Limited,"
"CAF China Africa Resources Plc,"
"CAGB ETFS Foreign Exchange Limited,"
"CAGP Cheltenham & Gloucester Plc,"
"CAL Capital & Regional Plc,"
"CAM Camellia Plc,"
"CAMB Cambria Automobiles Plc,"
"CAMK Camkids Group Plc,"
"CAML Central Asia Metals Plc,"
"CAP Clean Air Power Limited,"
"CAPC Capital & Counties Properties Plc,"
"CAPD Capital Drilling Limited,"
"CAR Carclo Plc,"
"CARB ETFS Oil Securities Limited,"
"CARP ETFS Oil Securities Limited,"
"CAT Catco Reinsurance Opportunities Fund Lim,"
"CATF ETFS Commodity Securities Limited,"
"CATL ETFS Commodity Securities Limited,"
"CAU Centaur Media Plc,"
"CAU1 CS ETF(IE) MSCI AUSTRALIA USD(GBP),"
"CAY Charles Stanley Group Plc,"
"CAZA Caza Oil & Gas Inc,"
"CBE0 CS ETF(IE) IBOXX EUR GOVT 7-10 EUR,"
"CBE3 CS ETF(IE) IBOXX EUR GOVT 1-3 EUR,"
"CBE7 CS ETF(IE) IBOXX EUR GVT 3-7 EUR,"
"CBG Close Brothers Group Plc,"
"CBIE CS ETF [Ie] Plc,"
"CBIU CS ETF [Ie] Plc,"
"CBKD COMMERCIAL INTL BANK(EGYPT)S.A.E GDR EACH REPR 1 ORD EGP10 REG`S`,"
"CBQS COMMERCIAL BANK OF QATAR GDR EACH REPR 0.20 ORD `REGS`,"
"CBR1 CS ETF(IE) MSCI BRAZIL USD(GBP),"
"CBU0 CS ETF(IE) IBOXX USD GOVT 7-10 USD,"
"CBU3 CS ETF(IE) IBOXX USD GOVT 1-3 USD,"
"CBU7 CS ETF(IE) IBOXX USD GOVT 3-7 USD,"
"CBUY Cloudbuy Plc,"
"CCAP Charlemagne Capital Limited,"
"CCC Computacenter Plc,"
"CCCG Cvc Credit Partners Euro,"
"CCDS Nationwide Building Soci,"
"CCE Camco Clean Energy Plc,"
"CCH Coca-Cola Hbc Ag,"
"CCL Carnival Plc,"
"CCL1 CS ETF(IE) MSCI CHILE USD(GBP),"
"CCP Celtic Plc,"
"CCPA Celtic Plc,"
"CCPC Celtic Plc,"
"CCPE Cvc Credit Partners Euro,"
"CCPG Cvc Credit Partners Euro,"
"CCR C&C Group Plc,"
"CCSL Chenavari Capital Soluti,"
"CCT Character Group Plc,"
"CDC Copper Development Corporation,"
"CDFF Cardiff Property Plc,"
"CDI Candover Investments Plc,"
"CDY Casdon Plc,"
"CE01 CS ETF(IE) IBOXX EUR GOVT 7-10 EUR(GBP),"
"CE31 CS ETF(IE) IBOXX EUR GOVT 1-3 EUR(GBP),"
"CE71 CS ETF(IE) IBOXX EUR GVT 3-7 EUR(GBP),"
"CEA1 CS ETF(IE) MSCI EM ASIA USD(GBP),"
"CEB Clean Energy Brazil Plc,"
"CEBA Nationwide Building Society,"
"CEBB Nationwide Building Society,"
"CECD Lyxor International Asse,"
"CECL Lyxor International Asse,"
"CEIR COMPAL ELECTRONICS INC GDR EACH REPR 5 ORD SHS `REG S`,"
"CEL1 CS ETF(LUX) MSCI EMU LARGE CAP EUR(GBP),"
"CEM1 CS ETF(LUX) MSCI EMU MID CAP EUR(GBP),"
"CEMA CS ETF [Ie] Plc,"
"CEML CS ETF [Ie] Plc,"
"CEPS Ceps Plc,"
"CES1 CS ETF(IE) MSCI EMU SMALL CAP EUR(GBP),"
"CEU CS ETF [Ie] Plc,"
"CEU1 CS ETF(IE) MSCI EMU EUR(GBP),"
"CEUL CS ETF [Lux],"
"CEUM CS ETF [Lux],"
"CEUR Amundi Investment Solutions,"
"CEUS CS ETF [Ie] Plc,"
"CEY Centamin Plc,"
"CF CANACCORD FINANCIAL INC COM NPV,"
"CFC China Food Company Plc,"
"CFHL Cityfibre Infrastructure,"
"CFHS CATHAY FINANCIAL HLDG CO GDR EACH REPR 10 ORD SHS REG`S`(BNY),"
"CFR Amundi Investment Solutions,"
"CFU Ceramic Fuel Cells Limited,"
"CFX Colefax Group Plc,"
"CFYN Caffyns Plc,"
"CGG Coburg Group Plc,"
"CGH Chaarat Gold Holdings Ltd,"
"CGI Canadian General Investments Ld,"
"CGL Catlin Group Ltd,"
"CGNR Conroy Gold & Natural Resources Plc,"
"CGOP China Growth Opportunities Ld,"
"CGS Castings Plc,"
"CGT Capital Gearing Trust Plc,"
"CGVD CROMPTON GREAVES GDR-EACH REPR 5 ORD SHS(REG'S'),"
"CGW Chelverton Growth Trust Plc,"
"CHA Concha Plc,"
"CHAR Chariot Oil & Gas Limited,"
"CHE Ojsc Cherkizovo Group,"
"CHFP ETFS Foreign Exchange Limited,"
"CHG Chemring Group Plc,"
"CHGB ETFS Foreign Exchange Limited,"
"CHGG CHAGALA GROUP LTD GDR EACH REPR 4 ORD `REGS`,"
"CHH Churchill China Plc,"
"CHL Churchill Mining Plc,"
"CHNA Source Csop Markets Plc,"
"CHNP Source Csop Markets Plc,"
"CHRR China Rerun Chemical Gro,"
"CHRT Cohort Plc,"
"CHW Chime Communications Plc,"
"CHZN CHELIABINSK ELEKTROLIT ZINK PLANT GDR EACH REPR 1 ORD SHS`REGS`,"
"CIC Conygar Investment Company Plc [The],"
"CICC Cic Capital Ltd.,"
"CICZ Conygar Zdp Plc,"
"CID1 CS ETF(IE) DOW JONES INDUST AVE TM USD(GBP),"
"CIE1 CS ETF(IE) IBOXX EUR INFLATION LKD EUR(GBP),"
"CIFU Carador Income Fund Plc,"
"CIN City of London Group Plc,"
"CIND CS ETF [Ie] Plc,"
"CINE Cineworld Group Plc,"
"CIR Circassia Pharmaceutical,"
"CIRC Circle Holdings Plc,"
"CIU Cape Plc,"
"CIU1 CS ETF(IE) IBOXX USD INFLATION LKD USD(GBP),"
"CJPL CS ETF [Ie] Plc,"
"CJPS CS ETF [Ie] Plc,"
"CKN Clarkson Plc,"
"CKR1 CS ETF(IE) MSCI KOREA USD(GBP),"
"CLA Capital Lease Aviation Plc,"
"CLDN Caledonia Investments Plc,"
"CLI Cls Holdings Plc,"
"CLIG City of London Investment Group Plc,"
"CLIN Clinigen Group Plc,"
"CLL Cello Group Plc,"
"CLLN Carillion Plc,"
"CLNR Cluff Natural Resources Plc,"
"CLON Clontarf Energy Plc,"
"CLP Clear Leisure Plc,"
"CLTV Cellcast Plc,"
"CM1 CS ETF(LUX) MSCI EMERGING MKTS USD(GBP),"
"CMB Cambria Africa Plc,"
"CMB1 CS ETF(IE) FTSE MIB EUR(GBP),"
"CMCG UBS Ag,"
"CMCI UBS Ag,"
"CMCL Caledonia Mining Corporation,"
"CMFP Etfx Fund Company Plc,"
"CMH Chamberlin Plc,"
"CMHY City Merchants High Yield Trust Limited,"
"CMIB CS ETF [Ie] Plc,"
"CMIP Capital Management & Investment Plc,"
"CML Cml Microsystems Plc,"
"CML1 CS ETF(IE) MSCI EM LATIN AMERICA USD(GBP),"
"CMS Communisis Plc,"
"CMU Amundi Investment Solutions,"
"CMX Catalyst Media Group Plc,"
"CMX1 CS ETF(IE) MSCI MEXICO CAPPED USD(GBP),"
"CMXC CS ETF [Ie] Plc,"
"CN2H CONSOLIDATED 2 1/2% STK,"
"CN4 CONSOLIDATED 4% LN,"
"CNA Centrica Plc,"
"CNC Concurrent Technologies Plc,"
"CNDX CS ETF [Ie] Plc,"
"CNE Cairn Energy Plc,"
"CNEL China New Energy Limited,"
"CNG China Nonferrous Gold Li,"
"CNIC Centralnic Group Plc,"
"CNKS Cenkos Securities Plc,"
"CNKY CS ETF [Ie] Plc,"
"CNMI Camper & Nicholsons Marina Investments L,"
"CNN Caledonian Trust Plc,"
"CNR Condor Gold Plc,"
"CNS Corero Network Security Plc,"
"CNSD China Steel Corporation,"
"CNX1 CS ETF(IE) NASDAQ 100 USD(GBP),"
"COAL Etfx Fund Company Plc,"
"COAP Etfx Fund Company Plc,"
"COB Cobham Plc,"
"COCE UBS Ag,"
"COCG UBS Ag,"
"COCO ETFS Commodity Securities Limited,"
"COCU UBS Ag,"
"COD Compagnie De Saint Gobain Sa,"
"COFF ETFS Commodity Securities Limited,"
"COG Cambridge Cognition Hold,"
"COLT Colt Group S.A.,"
"COMF Etfx Fund Company Plc,"
"COMS Coms Plc,"
"CON Connemara Mining Company Plc,"
"COP Circle Oil Plc,"
"COPA ETFS Commodity Securities Limited,"
"COPG Societe Generale Effekten Gmbh,"
"COPU Societe Generale Effekten Gmbh,"
"CORN ETFS Commodity Securities Limited,"
"CORP Ishares Plc,"
"COS Collagen Solutions Plc,"
"COSG Multi Units France,"
"COST Costain Group Plc,"
"COTN ETFS Commodity Securities Limited,"
"COUK Multi Units France,"
"CPG Compass Group Plc,"
"CPI Capita Plc,"
"CPJ1 CS ETF(IE) MSCI PACIFIC EX JPN USD(GBP),"
"CPP Cppgroup Plc,"
"CPR Carpetright Plc,"
"CPS Cpl Resources Plc,"
"CPW Carphone Warehouse Group Plc,"
"CPX Cap-Xx Limited,"
"CPXJ CS ETF [Ie] Plc,"
"CQS Cqs Diversified Fund Limited,"
"CQSU Cqs Diversified Fund Limited,"
"CR3 core vct iii ord gbp0.0001,"
"CR3B core vct iii `b`shs gbp0.0001,"
"CR4 CORE VCT IV PLC ORD GBP0.0001,"
"CR5 CORE VCT V PLC ORD GBP0.0001,"
"CRA Corac Group Plc,"
"CRAW Crawshaw Group Plc,"
"CRBL Lyxor International Asse,"
"CRBU Lyxor International Asse,"
"CRCL Caracal Energy Inc.,"
"CRDA Croda International Plc,"
"CRDG Societe Generale Effekten Gmbh,"
"CRDU Societe Generale Effekten Gmbh,"
"CRE Creston Plc,"
"CREI Custodian REIT Plc,"
"CRES Coalfield Resources Plc,"
"CRH CRH Plc,"
"CRHL Creat Resources Holdings Ld,"
"CRL Creightons Plc,"
"CRM Carr's Milling Industries Plc,"
"CRND Central Rand Gold Limited,"
"CRNE UBS Ag,"
"CRNG UBS Ag,"
"CRNL Lyxor International Asse,"
"CRNO Lyxor International Asse,"
"CRNU UBS Ag,"
"CRPH Ishares Vi Plc (The Comp,"
"CRPR Cropper [James] Plc,"
"CRPS Ishares Plc,"
"CRS Crystal Amber Fund Limited,"
"CRST Crest Nicholson Holdings,"
"CRU Coral Products Plc,"
"CRU1 CS ETF(IE) MSCI RUSSIA USD(GBP),"
"CRUD ETFS Commodity Securities Limited,"
"CRV Craven House Capital Plc,"
"CRW Craneware Plc,"
"CRWN Crown Place Vct Plc,"
"CRWU Ossiam Lux,"
"CRX Cyprotex Plc,"
"CS51 CS ETF(IE) DOW JONES EURO STOX`50` EUR(GBP),"
"CSAU CS ETF [Ie] Plc,"
"CSBR CS ETF [Ie] Plc,"
"CSCA CS ETF [Ie] Plc,"
"CSCL CS ETF [Ie] Plc,"
"CSE1 CS ETF(IE) MSCI EUROPE EUR(GBP),"
"CSEM CS ETF [Lux],"
"CSEU CS ETF [Ie] Plc,"
"CSFG Csf Group Plc,"
"CSG Sweett Group Plc,"
"CSIA Multi Units France,"
"CSIL Multi Units France,"
"CSJP CS ETF [Ie] Plc,"
"CSKR CS ETF [Ie] Plc,"
"CSN Chesnara Plc,"
"CSP1 CS ETF(IE) S&P 500 USD(GBP),"
"CSPX CS ETF [Ie] Plc,"
"CSR Csr Plc,"
"CSRT Consort Medical Plc,"
"CSRU CS ETF [Ie] Plc,"
"CSSG Croma Security Solutions Group Plc,"
"CSUK CS ETF [Ie] Plc,"
"CSUS CS ETF [Ie] Plc,"
"CSW Amundi Investment Solutions,"
"CSWD CS ETF [Ie] Plc,"
"CSX5 CS ETF(IE) DOW JONES EURO STOX`50` EUR,"
"CSZA CS ETF [Ie] Plc,"
"CTAG Cloudtag Inc,"
"CTEK China Chaintek United Co. Ltd.,"
"CTFA Cientifica Plc,"
"CTG Christie Group Plc,"
"CTH Caretech Holdings Plc,"
"CTI Cathay International Holdings Ld,"
"CTO Clarke [T.] Plc,"
"CTP Castleton Technology Plc,"
"CTR Charles Taylor Plc,"
"CTY City of London Investment Trust Plc,"
"CU01 CS ETF(IE) IBOXX USD GOVT 7-10 USD(GBP),"
"CU1 CS ETF(IE) MSCI USA USD(GBP),"
"CU31 CS ETF(IE) IBOXX USD GOVT 1-3 USD(GBP),"
"CU71 CS ETF(IE) IBOXX USD GOVT 3-7 USD(GBP),"
"CUK Amundi Investment Solutions,"
"CUKL CS ETF [Ie] Plc,"
"CUKS CS ETF [Ie] Plc,"
"CUKX CS ETF [Ie] Plc,"
"CUL1 CS ETF(IE) MSCI USA LARGE CAP USD(GBP),"
"CUP Cupid Plc,"
"CUS1 CS ETF(IE) MSCI USA SMALL CAP USD(GBP),"
"CUSL CS ETF [Ie] Plc,"
"CUSS CS ETF [Ie] Plc,"
"CV3H CONVERSION 3.5% LN,"
"CVB Coventry Building Society,"
"CVBP Coventry Building Society,"
"CVR Conviviality Retail Plc,"
"CVSG CVS Group Plc,"
"CWC Cable & Wireless Communications Plc,"
"CWD Countrywide Plc,"
"CWD1 CS ETF(IE)PLC MSCI WORLD GBP,"
"CWE Amundi Investment Solutions,"
"CWF Amundi Investment Solutions,"
"CWK Cranswick Plc,"
"CWR Ceres Power Holdings Plc,"
"CXM Conexion Media Group Plc,"
"CYAN Cyan Holdings Plc,"
"CYN City Natural Resources High Yield Trust,"
"CYNC City Natural Resources High Yield Trust,"
"CYS Chrysalis Vct Plc,"
"CZA Coal of Africa Limited,"
"CZA1 CS ETF(IE) MSCI SOUTH AFRICA USD(GBP),"
"CZB Commerzbank Ag,"
"DAB Dexion Absolute Ltd,"
"DABE Dexion Absolute Ltd,"
"DABU Dexion Absolute Ltd,"
"DAIP Daily Internet Plc,"
"DAL Dalata Hotel Group Plc,"
"DAN Daniel Stewart Securities Plc,"
"DAY Daisy Group Plc,"
"DBRC Ishares II Plc,"
"DCC Dcc Plc,"
"DCD Dcd Media Plc,"
"DCG Dairy Crest Group Plc,"
"DCI Dolphin Capital Investors Limited,"
"DCP Diamondcorp Plc,"
"DDD DDD Group Plc,"
"DDDD 4D Pharma Plc,"
"DDV1 AIM DISTRIBUTION TRUST ORD GBP0.25,"
"DEB Debenhams Plc,"
"DEIN Ishares II Plc,"
"DEL2 ETFS FUND COMPANY PLC DAX 2X LONG FD SHS EUR(EUR),"
"DEMG Deltex Medical Group Plc,"
"DEMV Ossiam Lux,"
"DES2 ETFS FUND COMPANY PLC DAX 2X SHORT FD SHS EUR(EUR),"
"DGB Digital Barriers Plc,"
"DGE Diageo Plc,"
"DGED Diageo Plc,"
"DGO Dragon Oil Plc,"
"DGS Digital Globe Services,"
"DH2O EUROPEAN EXCHANGE-TRADED FUND CO ISHARES S&P GLOBAL WATER USD,"
"DIA Dialight Plc,"
"DIG Dunedin Income Growth Investment Trust P,"
"DIGS Gcp Student Living Plc,"
"DISG Multi Units Luxembourg,"
"DISW Multi Units Luxembourg,"
"DIV Multi Units France,"
"DIVI Diverse Income Trust [The] Plc,"
"DJAN Daejan Holdings Plc,"
"DJEL Lyxor International Asse,"
"DJEU Lyxor International Asse,"
"DJMC Ishares Plc,"
"DJSC Ishares Plc,"
"DJUB Barclays Bank Plc,"
"DKL Dekeloil Public Limited,"
"DKUS FTSE Nasdaq Dubai Kuwait 15 Shariah Inde,"
"DKUW FTSE Nasdaq Dubai Kuwait 15 Index,"
"DL2P ETFS FUND COMPANY PLC DAX 2X LONG FD SHS EUR(GBP),"
"DLAR De La Rue Plc,"
"DLG Direct Line Insurance Gr,"
"DLN Derwent London Plc,"
"DLTM Ishares II Plc,"
"DMCA Damac Real Estate Develo,"
"DMGT Daily Mail & General Trust Plc,"
"DNA Doric Nimrod Air One Limited,"
"DNDL Dunedin Smaller Companies Investment Tru,"
"DNE Dunedin Enterprise Investment Trust Plc,"
"DNLM Dunelm Group Plc,"
"DNO Domino Printing Sciences Plc,"
"DNRG Ishares II Plc,"
"DODS Dods [Group] Plc,"
"DOM Domino's Pizza Group Plc,"
"DOR Doriemus Plc,"
"DOTD Dotdigital Group Plc,"
"DP2C DOWNING PROTECTED VCT II `C` SHS GBP0.001,"
"DP2D DOWNING PLANNED EXIT VCT 2 PLC `D` SHS GBP0.001,"
"DPA Dp Aircraft I Limited,"
"DPH Dechra Pharmaceuticals Plc,"
"DPLM Diploma Plc,"
"DPP Dp Poland Plc,"
"DPV7 DOWNING PROTECTED VCT VII PLC ORD GBP0.001,"
"DPV8 DOWNING PROTECTED VCT VIII PLC ORD GBP0.001,"
"DPV9 DOWNING PROTECTED VCT IX PLC ORD GBP0.001,"
"DPW Dp World Limited,"
"DQAS FTSE Nasdaq Dubai Qatar 10 Shariah Index,"
"DQAT FTSE Nasdaq Dubai Qatar 10 Index,"
"DQE Dq Entertainment Plc,"
"DREF Duet Real Estate Finance Limited,"
"DRG Draganfly Investments Limited,"
"DRS Drs Data & Research Services Plc,"
"DRTY Darty Plc,"
"DRV Driver Group Plc,"
"DRX Drax Group Plc,"
"DS2P ETFS FUND COMPANY PLC DAX 2X SHORT FD SHS EUR(GBP),"
"DSC Development Securities Plc,"
"DSG Dillistone Group Plc,"
"DSN Densitron Technologies Plc,"
"DSUK Multi Units France,"
"DTC Datatec Limited,"
"DTG Dart Group Plc,"
"DTL Dexion Trading Ld,"
"DTY Dignity Plc,"
"DUAE FTSE Nasdaq Dubai Uae 20 Index USD,"
"DUAED FTSE Nasdaq Dubai Uae 20 Index Aed,"
"DUC Ducat Ventures Plc,"
"DUPD Dragon-Ukrainian Properties & Developmen,"
"DVO Devro Plc,"
"DVW Dee Valley Group Plc,"
"DVWA Dee Valley Group Plc,"
"DWHA Dewhurst Plc,"
"DWHT Dewhurst Plc,"
"DWOD Ishares II Plc,"
"DXNS Dixons Retail Plc,"
"DY90 UK TREASURY STRIP UK TREASURY STRIP 7/9/2014 COUPON,"
"DY92 UK TREASURY STRIP UK TREASURY STRIP 7/9/2015 COUPON,"
"DY96 UK TREASURY STRIP UK TREASURY STRIP 7/9/2017 COUPON,"
"DY97 UK TREASURY STRIP UK TREASURY STRIP 7/3/2018 COUPON,"
"DY99 UK TREASURY STRIP UK TREASURY STRIP 7/3/2019 COUPON,"
"E0500 FTSEurofirst Oil & Gas,"
"E1300 FTSEurofirst Chemicals,"
"E1700 FTSEurofirst Basic Resources,"
"E1X FTSE Eurotop 100,"
"E2300 FTSEurofirst Construction & Materials,"
"E2700 FTSEurofirst Industrial Goods & Services,"
"E2V E2V TECHNOLOGIES ORD GBP0.05,"
"E3300 FTSEurofirst Automobiles & Parts,"
"E3500 FTSEurofirst Food & Beverage,"
"E3700 FTSEurofirst Personal & Household Goods,"
"E3X FTSE Eurotop 300,"
"E3X0001 FTSE EFST300 Oil & Gas,"
"E3X0530 FTSE EFST300 Oil & Gas Producers,"
"E3X0570 FTSE EFST300 Oil Equipment Services,"
"E3X1000 FTSE EFST300 Basic Materials,"
"E3X1350 FTSE EFST300 Chemicals,"
"E3X1750 FTSE EFST300 Industrial Metals,"
"E3X1770 FTSE EFST300 Mining,"
"E3X2000 FTSE EFST300 Industrials,"
"E3X2350 FTSE EFST300 Construction & Materials,"
"E3X2710 FTSE EFST300 Aerospace & Defence,"
"E3X2720 FTSE EFST300 General Industrials,"
"E3X2730 FTSE EFST300 Electronic & Electrical Equipment,"
"E3X2750 FTSE EFST300 Industrial Engineering,"
"E3X2770 FTSE EFST300 Industrial Transportation,"
"E3X2790 FTSE EFST300 Support Services,"
"E3X3000 FTSE EFST300 Consumer Goods,"
"E3X3350 FTSE EFST300 Automoblie & Parts,"
"E3X3530 FTSE EFST300 Beverages,"
"E3X3570 FTSE EFST300 Food Producers,"
"E3X3720 FTSE EFST300 Household Goods,"
"E3X3760 FTSE EFST300 Personal Goods,"
"E3X3780 FTSE EFST300 Tobacco,"
"E3X4000 FTSE EFST300 Healthcare,"
"E3X4530 FTSE EFST300 Healthcare Equipment & Service,"
"E3X4570 FTSE EFST300 Pharmaceuticals & Biotechnology,"
"E3X5000 FTSE EFST300 Consumer Services,"
"E3X5330 FTSE EFST300 Food & Drug Retailers,"
"E3X5370 FTSE EFST300 General Retailers,"
"E3X5550 FTSE EFST300 Media,"
"E3X5750 FTSE EFST300 Travel & Leisure,"
"E3X6000 FTSE EFST300 Telecommunications,"
"E3X6530 FTSE EFST300 Fixed Line Telecommunications,"
"E3X6570 FTSE EFST300 Mobile Telecommunications,"
"E3X7000 FTSE EFST300 Utilities,"
"E3X7530 FTSE EFST300 Electricity,"
"E3X7570 FTSE EFST300 Gas Water & Utilities,"
"E3X8000 FTSE EFST300 Finanicals,"
"E3X8350 FTSE EFST300 Banks,"
"E3X8530 FTSE EFST300 Non-Life Insurance,"
"E3X8570 FTSE EFST300 Life Insurance,"
"E3X8770 FTSE EFST300 General Financial,"
"E3X9000 FTSE EFST300 Technology,"
"E3X9530 FTSE EFST300 Software & Computer Services,"
"E3X9570 FTSE EFST300 Technology Hardware & Equipment,"
"E4500 FTSEurofirst Health Care,"
"E5300 FTSEurofirst Retail,"
"E5500 FTSEurofirst Media,"
"E5700 FTSEurofirst Travel & Leisure,"
"E6500 FTSEurofirst Telecommunications,"
"E7500 FTSEurofirst Utilities,"
"E8300 FTSEurofirst Banks,"
"E8500 FTSEurofirst Insurance,"
"E8700 FTSEurofirst Financial Services,"
"E9500 FTSEurofirst Technology,"
"EAH Eco Animal Health Group Plc,"
"EAPSIV FTSE KLD Europe Asia Pacific Sustain Iop,"
"EAS Energy Assets Group Plc,"
"EAST Eastpharma Ltd,"
"EAT European Assets Trust Nv,"
"EB0500 FTSEurofirst Euro Oil & Gas,"
"EB1300 FTSEurofirst Euro Chemicals,"
"EB1700 FTSEurofirst Euro Basic Resources,"
"EB1X FTSE Euro 100,"
"EB2300 FTSEurofirst Euro Construction & Materia,"
"EB2700 FTSEurofirst Euro Industrial Goods & Ser,"
"EB3300 FTSEurofirst Euro Automobiles & Parts,"
"EB3500 FTSEurofirst Euro Food & Beverage,"
"EB3700 FTSEurofirst Euro Personal & Household G,"
"EB4500 FTSEurofirst Euro Health Care,"
"EB5300 FTSEurofirst Euro Retail,"
"EB5500 FTSEurofirst Euro Media,"
"EB5700 FTSEurofirst Euro Travel & Leisure,"
"EB6500 FTSEurofirst Euro Telecommunications,"
"EB7500 FTSEurofirst Euro Utilities,"
"EB8300 FTSEurofirst Euro Banks,"
"EB8500 FTSEurofirst Euro Insurance,"
"EB8700 FTSEurofirst Euro Financial Services,"
"EB9500 FTSEurofirst Euro Technology,"
"EBMC Bnp Paribas Energy-Base Metals [3],"
"EBQ Ebiquity Plc,"
"ECDC European Convergence Development Company,"
"ECK Eckoh Plc,"
"ECM Electrocomponents Plc,"
"ECR Ecr Minerals Plc,"
"ECV Eco City Vehicles Plc,"
"ECWL Ecofin Water & Power Opportunities Plc,"
"ECWO Ecofin Water & Power Opportunities Plc,"
"ECWZ EW&Po Finance Plc,"
"EDCL Eurasia Drilling Company,"
"EDEN Eden Research Plc,"
"EDG Edge Resources Inc,"
"EDGC Edge Performance Vct Plc,"
"EDHAPAC FTSE Edhec Risk Asia/Pacific,"
"EDHAPXJ FTSE Edhec Risk Asia/Pacific Ex JP,"
"EDHAW FTSE Edhec Risk All World,"
"EDHAWXUK FTSE Edhec Risk All Ex UK,"
"EDHAWXUS FTSE Edhec Risk All Ex US,"
"EDHDAXJ FTSE Edhec-Risk Efficient Developed Asia,"
"EDHDEUR FTSE Edhec Risk Dvlp EUR,"
"EDHDEUXU FTSE Edhec Risk Dvlp EUR Ex UK,"
"EDHDEV FTSE Edhec Risk Dvlp,"
"EDHDXJ FTSE Edhec Risk Eff Dev Japan,"
"EDHEBLOC FTSE Edhec-Risk Efficient Eurobloc Index,"
"EDHEMER FTSE Edhec Risk Emerging,"
"EDHJPN FTSE Edhec Efficient Japan,"
"EDHUK FTSE Edhec Risk UK,"
"EDHUSA FTSE Edhec Risk US,"
"EDIN Edinburgh Investment Trust Plc,"
"EDL Edenville Energy Plc,"
"EDP Electronic Data Processing Plc,"
"EDR Egdon Resources Plc,"
"EDV Elderstreet Vct Plc,"
"EDVD SSGA SPDR ETFS Europe I Plc,"
"EEMB Ishares II Plc,"
"EEP Eastern European Property Fund Limited,"
"EEUI FTSE Epra/Nareit Developed EMEA Index,"
"EEX5 ISHARES III PLC BARCLAYS EURO CORP BD EX-FINLS 1-5(GBP),"
"EEXF Ishares III Plc,"
"EF80 FTSE Eurofirst 80,"
"EFC1 FTSE Eurofirst 100,"
"EFGD EFG HERMES HLDGS GDR EACH REPR 2 ORD EGP5 REG`S(SPON),"
"EFIS Source Markets Public Li,"
"EFIW Source Markets Public Li,"
"EFM Edinburgh Dragon Trust Plc,"
"EFMC Edinburgh Dragon Trust Plc,"
"EGAS Epra Asia Index [Eur],"
"EGI Electrical Geodesics In,"
"EGIL Ishares III Plc,"
"EGNA Epra North America Index,"
"EGS EG Solutions Plc,"
"EGXU Epra/Nareit Global [Ex Us] Index,"
"EHP Epistem Holdings Plc,"
"EIB European Investment Bank,"
"EIF Enhanced Income,"
"EIH Eih Plc,"
"EIIB European Islamic Investment Bank Plc,"
"EIT Enables IT Group Plc,"
"EKF Ekf Diagnostics Holdings Plc,"
"EKT Elektron Technology Plc,"
"ELA Eland Oil & Gas Plc,"
"ELAU Epra Australia Index,"
"ELCO Eleco Plc,"
"ELE Electric Word Plc,"
"ELHK Epra Hong Kong Index,"
"ELJP Epra Japan Index,"
"ELLA Ecclesiastical Insurance Office Plc,"
"ELM Elementis Plc,"
"ELR Eastern Platinum Limited,"
"ELTA Electra Private Equity Plc,"
"ELTC Electra Private Equity Plc,"
"ELTZ Electra Private Equity Investments Plc,"
"ELUK Epra UK Index,"
"ELX El Oro Ltd,"
"EMAD SSGA SPDR ETFS Europe I Plc,"
"EMAN Everyman Media Group Plc,"
"EMAS SSGA SPDR ETFS Europe I Plc,"
"EMBB SSGA SPDR ETFS Europe II,"
"EMBD Lyxor Index Fund,"
"EMBE Ishares Vi Plc (The Comp,"
"EMCB SSGA SPDR ETFS Europe I,"
"EMCO SSGA SPDR ETFS Europe I,"
"EMCP Ishares V Public Limited Company,"
"EMCR Ishares V Public Limited Company,"
"EMDD SSGA SPDR ETFS Europe I Plc,"
"EMDL SSGA SPDR ETFS Europe I Plc,"
"EMDV SSGA SPDR ETFS Europe I Plc,"
"EME Empyrean Energy Plc,"
"EMED Emed Mining Public Ld,"
"EMEO SSGA SPDR ETFS Europe I Plc,"
"EMG Man Group Plc,"
"EMIL SSGA SPDR ETFS Europe I,"
"EMIN SSGA SPDR ETFS Europe I,"
"EMIS Emis Group Plc,"
"EMLA SSGA SPDR ETFS Europe I Plc,"
"EMLB Pimco Fixed Income Source ETFS Plc,"
"EMLD SSGA SPDR ETFS Europe I Plc,"
"EMLI Pimco Fixed Income Sourc,"
"EMLP Pimco Fixed Income Sourc,"
"EMMV Ishares Vi Plc (The Comp,"
"EMOD SSGA SPDR ETFS Europe I Plc,"
"EMR Empresaria Group Plc,"
"EMRD SSGA SPDR ETFS Europe I Plc,"
"EMRG SSGA SPDR ETFS Europe I Plc,"
"EMSD SSGA SPDR ETFS Europe I Plc,"
"EMSM SSGA SPDR ETFS Europe I Plc,"
"EMT Emmit Plc,"
"EMUE SSGA SPDR ETFS Europe I,"
"EMUL Ishares IV Plc,"
"EMUM Ishares IV Plc,"
"EMV Ishares Vi Plc (The Comp,"
"EMXB SSGA SPDR ETFS Europe II,"
"ENAD Epra/Nareit Asia Index [Us Version],"
"ENDEM FTSE Epra/Nareit Developed Ex Mea Index,"
"ENDP FTSE Epra Europe Ex UK Dividend +,"
"ENDV Endeavour International Corporation,"
"ENEA FTSE Epra/Nareit Emer Asia Pac Index,"
"ENEE FTSE Epra/Nareit Europe Non-Reit,"
"ENEF ETFS Commodity Securities Limited,"
"ENEG Enegi Oil Plc,"
"ENEI FTSE Epra/Nareit Emerging Index,"
"ENEL FTSE Epra/Nareit Emer Americas Index,"
"ENEM FTSE Epra/Nareit Emerging EMEA Index,"
"ENEU FTSE Epra/Nareit Emerging Europe Index,"
"ENGD Epra/Nareit Global Index,"
"ENGI Energiser Investments Plc,"
"ENGL Epra Global Index,"
"ENHA FTSE Epra/Nareit Americas Index,"
"ENHE FTSE Epra/Nareit Global Ex US Index,"
"ENHG FTSE Epra/Nareit Global Index,"
"ENHM FTSE Epra/Nareit Middle East and Africa,"
"ENHN FTSE Epra/Nareit EMEA Index,"
"ENHP FTSE Epra/Nareit Asia Pacific Index,"
"ENHU FTSE Epra/Nareit Europe Index,"
"ENME FTSE Epra/Nareit Emer M East&Africa Idx,"
"ENQ Enquest Plc,"
"ENRG UBS Ag,"
"ENRT Environmental Recycling Tech. Plc,"
"ENUD Epra/Nareit US Index,"
"EOAIM FTSE Evm Opport Aim Index,"
"EOAP FTSE Evm Opport Asia Pac Index,"
"EOAS FTSE Env Opp All-Shares Idx,"
"EOAX FTSE Evm Opport Asia Pac Ex-Japan Index,"
"EOEE FTSE Env Opp Energy Eff Idx,"
"EOEU FTSE Evm Opport Europe Index,"
"EOG Europa Oil & Gas [Holdings] Plc,"
"EOJP FTSE Evm Opportjapan Index,"
"EORE FTSE Env Opp Re+Alt Energy Eff Idx,"
"EOUK FTSE Evm Opport UK Index,"
"EOUS FTSE Evm Opport US Index,"
"EOWP FTSE Env Opp Waste+Pollution Control Idx,"
"EOWR FTSE Env Opp Water Tech Index,"
"EPEU Epra Euro Zone Index,"
"EPG Ep Global Opportunities Trust Plc,"
"EPHG Epra Europe [Uk Restricted] Index,"
"EPIS EPISTAR CORP GDR EACH REPR 5 SHS `REG S`,"
"EPO Earthport Plc,"
"EPRA Epra Europe Index,"
"EPRE Amundi ETF,"
"EQQQ Powershares Glbal Funds Ireland Plc,"
"ERE Eredene Capital Plc,"
"EREE FTSE Epra/Nareit Europe REIT,"
"ERET European Real Estate Inv,"
"ERII European Residual Income Investments Cel,"
"ERM Euromoney Institutional Investor Plc,"
"ERND Ishares IV Plc,"
"ERNE Ishares IV Plc,"
"ERNS Ishares IV Plc,"
"ERNU Ishares IV Plc,"
"ESCH Escher Group Holdings Public Limited Com,"
"ESG Eservglobal Limited,"
"ESM Amundi Investment Solutions,"
"ESNT Essentra Plc,"
"ESO Epe Special Opportunities Plc,"
"ESR Ensor Holdings Plc,"
"ESS Essenden Plc,"
"ESSR Essar Energy Plc,"
"ESSU UBS Ag,"
"ESUR Esure Group Plc,"
"ET Establishment Investment Trust,"
"ETI Enterprise Inns Plc,"
"ETO Entertainment One Limited,"
"ETQ Energy Technique Plc,"
"ETX E-Therapeutics Plc,"
"EUA Eurasia Mining Plc,"
"EUCF Ishares Vi Plc (The Comp,"
"EUDI SSGA SPDR ETFS Europe I Plc,"
"EUDV SSGA SPDR ETFS Europe I Plc,"
"EUE Ishares II Plc,"
"EULC Ishares IV Plc,"
"EUMC Ishares IV Plc,"
"EUMV Ossiam Lux,"
"EUN Ishares II Plc,"
"EUP3 ETFS FOREIGN EXCHANGE LTD ETFS 3X LONG EUR SHORT GBP,"
"EURO SSGA SPDR ETFS Europe I,"
"EURP ETFS Foreign Exchange Limited,"
"EUSP EU Supply Plc,"
"EUT The European Investment Trust Plc,"
"EVO Evocutis Plc,"
"EVR Evraz Plc,"
"EWG EW Group Limited,"
"EWI Edinburgh Worldwide Investment Trust Plc,"
"EWR East West Resources Plc,"
"EXEF ETFS Commodity Securities Limited,"
"EXFN Ishares II Plc,"
"EXI Exillon Energy Plc,"
"EXPN Experian Plc,"
"EXUK Epra Europe Ex UK Index,"
"EXXI Energy Xxi [Bermuda],"
"EZJ Easyjet Plc,"
"FAGR ETFS Commodity Securities Limited,"
"FAIG ETFS Commodity Securities Limited,"
"FAM Finnaust Mining Plc,"
"FAS Fidelity Asian Values Plc,"
"FAST Fastnet Oil & Gas Plc,"
"FAUSA FTSE Asfa Australia All-Share Index,"
"FAUSLC FTSE Asfa Australia Large Cap 50 Index,"
"FAUSLMC FTSE Asfa Australia 200 Index,"
"FAUSMC FTSE Asfa Australia Mid Cap 150 Index,"
"FAUSO FTSE Asfa Australia 100 Index,"
"FAUSSC FTSE Asfa Australia Small Cap Index,"
"FAUST FTSE Asfa Australia 300 Index,"
"FAUSX FTSE Asfa Australia All-Share Ex 100 Ind,"
"FBBRC FTSE Beyond Brics Index,"
"FBBRCN FTSE Beyond Brics Net of,"
"FBDU Flying Brands Ld,"
"FBH Fbd Holdings Plc,"
"FBMAPM FTSE Bursa Malaysia Asian Palm Oil Plant,"
"FBMAPU FTSE Bursa Malaysia Asian Palm Oil Plant,"
"FBMEMAS FTSE Bursa Malaysia Emas Index,"
"FBMFLG FTSE Bursa Malaysia Fledgling Index,"
"FBMHS FTSE Bursa Malaysia Hijrah Shar,"
"FBMKLCI FTSE Bursa Malaysia Klci,"
"FBMMES FTSE Bursa Malaysia Mesdaq Index,"
"FBMPM FTSE Burse Malaysia Palm Oil Plant Index,"
"FBMS FTSE Bursa Malaysia Emas Shariah Indexi,"
"FBMSCAP FTSE Bursa Malaysia Small Cap Index,"
"FBRIC FTSE BRIC 50 Index,"
"FBRT ETFS Commodity Securities Limited,"
"FBT Forbidden Technologies Plc,"
"FCAM F&C Asset Management Plc,"
"FCCN French Connection Group Plc,"
"FCI F&C Capital & Income Investment Trust Pl,"
"FCPT F&C Commercial Property Trust Limited,"
"FCR Ferrum Crescent Limited,"
"FCRE F&C UK Real Estate Inves,"
"FCRM Fulcrum Utility Services Ld,"
"FCRU ETFS Commodity Securities Limited,"
"FCS F&C Global Smaller Companies Plc,"
"FCSE FTSE Cse Morocco 15 Index,"
"FCSELIQ FTSE Cse Morocco All-Liquid Index,"
"FCSS Fidelity China Special Situations Plc,"
"FDBK Feedback Plc,"
"FDEV Frontier Developments Pl,"
"FDI Firestone Diamonds Plc,"
"FDL Findel Plc,"
"FDP First Derivatives Plc,"
"FDSA Fidessa Group Plc,"
"FEC FAR EASTONE TELECOMMUNICATIONS GDR EACH REPR 15 ORD SHS`REGS`,"
"FEM First Trust Global Funds,"
"FEN Frenkel Topping Group Plc,"
"FENR Fenner Plc,"
"FEP Forum Energy Plc,"
"FETD FAR EASTERN TEXTILE GDS EACH REPR 10 ORD SHS REGS,"
"FEV Fidelity European Values Plc,"
"FEX First Trust Global Funds,"
"FEXU First Trust Global Funds,"
"FF50 FTSE Frontier 50 Index,"
"FFY Fyffes Plc,"
"FGP Firstgroup Plc,"
"FGT Finsbury Growth & Income Trust Plc,"
"FH01 FTSE Hang Seng Asiatop,"
"FIF Finsbury Food Group Plc,"
"FIND ETFS Commodity Securities Limited,"
"FING Multi Units Luxembourg,"
"FINL Lyxor International Asse,"
"FINU Lyxor International Asse,"
"FINW Multi Units Luxembourg,"
"FIP Fusion Ip Plc,"
"FIPP Frontier Ip Group Plc,"
"FITB Fitbug Holdings Plc,"
"FIVE X5 Retail Group N.V,"
"FJET Fastjet Plc,"
"FJV Fidelity Japanese Values Plc,"
"FKE Fiske Plc,"
"FKL Falkland Islands Holdings Plc,"
"FKU First Trust Global Funds,"
"FLIV ETFS Commodity Securities Limited,"
"FLK Fletcher King Plc,"
"FLKS FTSE Lujain Kuwait Shariah Index,"
"FLKW FTSE Lujain Kuwait Index,"
"FLOW Flowgroup Plc,"
"FLX Falanx Group Limited,"
"FLYB Flybe Group Plc,"
"FML Frontier Mining Ltd,"
"FMPG F&C Managed Portfolio Trust Plc,"
"FMPI F&C Managed Portfolio Trust Plc,"
"FNAR FTSE Nareit All Reits,"
"FNCO FTSE Nareit Composite,"
"FNER FTSE Nareit Equity Reits,"
"FNMR FTSE Nareit Mortgage Reits,"
"FNMRC FTSE Nareit All Mortgage Capped Index,"
"FNRE FTSE Nareit Equity,"
"FOG Falcon Oil & Gas Ltd.,"
"FOGL Falkland Oil and Gas Limited,"
"FOOD UBS Ag,"
"FOOE UBS Ag,"
"FOUR 4Imprint Group Plc,"
"FOX Fox Marble Holdings Plc,"
"FOXT Foxtons Group Plc,"
"FPEO F&C Private Equity Trust Plc,"
"FPET ETFS Commodity Securities Limited,"
"FPEZ F&C Private Equity Zeros Plc,"
"FPGAL FTSE Portugal 20 Index,"
"FPGALN FTSE Portugal 20 Net Tax,"
"FPM Faroe Petroleum Plc,"
"FPO First Property Group Plc,"
"FQM First Quantum Minerals Ltd,"
"FRBRIC FTSE Rafi BRIC Index,"
"FRCAN FTSE Rafi Canada Index,"
"FRCHEN FTSE Rafi Switzerland Index,"
"FRCL Foreign & Colonial Investment Trust Plc,"
"FRD FTSE Rafi Dev 1000 Idx,"
"FRDAPXJ FTSE Rafi Dev Asia/Pac Ex Japan,"
"FRDAPXJN FTSE Rafi Dev Asia Pacific Ex Jap Net In,"
"FRDMS FTSE Rafi Developed Mid Small 1500,"
"FRDMSQN FTSE Rafi Developed Mid Small 1500 Index,"
"FREM FTSE Rafi Emerging Index,"
"FREMN FTSE Rafi Emer Nt Index,"
"FRES Fresnillo Plc,"
"FREU FTSE Europe Index,"
"FREZ FTSE Rafi Eurozone Index,"
"FRHKG FTSE Rafi Hong Kong/China Index,"
"FRI Frontier Resources Inter,"
"FRJPN FTSE Rafi Japan Index,"
"FRJPNUH FTSE Rafi Japan Index [Cad],"
"FRM Formation Group Plc,"
"FRND FTSE Rafi Nordic Index,"
"FRO Frontline Ld,"
"FRP Fairpoint Group Plc,"
"FRR Frontera Resources Corporation,"
"FRSDEURN FTSE Rafi Dveu Net Index,"
"FRSDEURS FTSE Rafi Developed Europe Mid Small,"
"FRSDPXJ FTSE Rafi Developed Asia Pacific Ex Japa,"
"FRSDXUS FTSE Rafi Developed Ex US Mid Small 1500,"
"FRSDXUSN FTSE Rafi Dev Ex US MS Index,"
"FRSWEAC FTSE Rafi Sweden All Cap Index,"
"FRUR FTSE Rafi US 100 Real Estate Index,"
"FRUT FRUTAROM INDUSTRIES GDR EACH REPR 1 ILS1`REGS`,"
"FRX Ferrex Plc,"
"FRXR FTSE Rafi Global Ex US Real Estate,"
"FSC F&C U.S. Smaller Companies Plc,"
"FSFL Foresight Solar Fund Lim,"
"FSJ Fisher [James] & Sons Plc,"
"FSTA Fuller Smith & Turner Plc,"
"FSTAM FTSE ST Maritime Index,"
"FSTC FTSE ST China Index,"
"FSTCT FTSE UK Dividend+ Index,"
"FSTF FTSE ST Fledgling Index,"
"FSTHA FTSE Set All Shares Index,"
"FSTHF FTSE Set Fledgling Index,"
"FSTHL FTSE Set Large Cap Index,"
"FSTHM FTSE Set Mid Cap Index,"
"FSTHMS FTSE Set Mid Small Cap Index,"
"FSTHS FTSE Set Small Cap Index,"
"FSTICA FTSE ST Catalist Index,"
"FSTM FTSE ST Mid Cap Index,"
"FSTS FTSE ST Small Cap Index,"
"FSTSH FTSE Set Shariah Index,"
"FSV Fidelity Special Values Plc,"
"FTAL SSGA SPDR ETFS Europe I Plc,"
"FTASBE FTSE Asian Food & Beverage Index,"
"FTASCH FTSE Asian Chemicals Index,"
"FTC Filtronic Plc,"
"FTD Foresight 3 Vct Plc,"
"FTE Forte Energy NL,"
"FTECP FTSE Ecpi Italia Sri Index,"
"FTECPL FTSE Ecpi Leaders Index,"
"FTEMSLU FTSE Emerging Super Liqu,"
"FTF Foresight 4 Vct Plc,"
"FTFA FTSE Csag Terror-Free All World Ex US,"
"FTFC Foresight 4 Vct Plc,"
"FTFD FTSE Csag Terror-Free Developed Ex US,"
"FTFE FTSE Csag Terror-Free Emer Idx,"
"FTHILO FTSE Emerging All Cap Ex,"
"FTHILON FTSE Emerging All Cap Ex,"
"FTIS FINANCIAL TECHNOLOGIES (INDIA) GDR EACH REPR 0.1428 ORD `REGS`,"
"FTN Foresight 2 Vct Plc,"
"FTNI Foresight 2 Vct Plc,"
"FTNP Foresight 2 Vct Plc,"
"FTO Fortune Oil Plc,"
"FTSEMIB FTSE MIB Index,"
"FTSEMIBN FTSE MIB Net Total Return [Lux] Index,"
"FTSTI Lse Unknown,"
"FTSV Foresight Solar Vct Plc,"
"FTSWD FTSE Shariah Developed Europe Index,"
"FTUGAS Epra/Nareit Asia Index [Usd],"
"FTUKSLSP FTSE UK Large Cap Super Liquid Expiry Index,"
"FTUSLU FTSE USA Super Liquid In,"
"FTV Foresight Vct Plc,"
"FTVI Foresight Vct Plc,"
"FTVP Foresight Vct Plc,"
"FUDP FTSE UK Dividend+ Index,"
"FUM Futura Medical Plc,"
"FUTR Future Plc,"
"FXC Ishares Plc,"
"FXI Fusionex International P,"
"FXPO Ferrexpo Plc,"
"FXRU Finex Funds Plc,"
"G06 FTSE Asia Pac LMS Index,"
"G07 FTSE Asia Pac LMS ex Japan Index,"
"G08 FTSE Asia Pac LMS ex Japan India & Pak I,"
"G09 FTSE Asia Pac LMS ex Jp India Pak Au & N,"
"G10 FTSE Greater China LMS Index,"
"G11 FTSE Europe LMS Index,"
"G12 FTSE Europe LMS ex UK Index,"
"G13 FTSE Europe LMS ex Eurobloc Index,"
"G14 FTSE Eurobloc LMS Index,"
"GACA General Accident Plc,"
"GACB General Accident Plc,"
"GAH Gable Holdings Inc.,"
"GAID GAIL(INDIA) GDR EACH REP 6 ORD INR10 REG`S`,"
"GAL Galantas Gold Corporation,"
"GAME Gameaccount Network Plc,"
"GAS Gasol Plc,"
"GASG Societe Generale Effekten Gmbh,"
"GAW Games Workshop Group Plc,"
"GAZ Jsc Gazprom Neft,"
"GB68 GOLDMAN SACHS INTERNATIONAL CERT 18/02/15(FTSE 100 INDEX)GBP,"
"GB78 GOLDMAN SACHS INTERNATIONAL STRUCT CERT 26/05/16(FTSE 100)BAR 50,"
"GB82 GOLDMAN SACHS INTERNATIONAL STRUCT CERT 30/06/16(FTSE AND SPX)GBP,"
"GB95 GOLDMAN SACHS INTERNATIONAL STRUCT CERT 06/02/17(FTSE 100)GBP,"
"GBAU ETFS Foreign Exchange Limited,"
"GBCA ETFS Foreign Exchange Limited,"
"GBCH ETFS Foreign Exchange Limited,"
"GBDV SSGA SPDR ETFS Europe I,"
"GBG Gb Group Plc,"
"GBGR Goldbridges Global Resou,"
"GBJP ETFS Foreign Exchange Limited,"
"GBNO ETFS Foreign Exchange Limited,"
"GBNZ ETFS Foreign Exchange Limited,"
"GBO Globo Plc,"
"GBP Global Petroleum Limited,"
"GBPP ETFS Foreign Exchange Limited,"
"GBRE SSGA SPDR ETFS Europe I,"
"GBS Gold Bullion Securities Ld,"
"GBSK ETFS Foreign Exchange Limited,"
"GBSP ETFS Hedged Metal Securi,"
"GBSS Gold Bullion Securities Ld,"
"GBUR ETFS Foreign Exchange Limited,"
"GBUS ETFS Foreign Exchange Limited,"
"GCL Geiger Counter Limited,"
"GCLA Grupo Clarin S.A.,"
"GCM Gcm Resources Plc,"
"GCO Green Compliance Plc,"
"GCP Gcp Infrastructure Investments Limited,"
"GCPI Gcp Infrastructure Inves,"
"GD07 FTSE Global Energy,"
"GDG Green Dragon Gas Ltd.,"
"GDIV Etfx Fund Company Plc,"
"GDL Greka Drilling Limited,"
"GDP Goldplat Plc,"
"GDWN Goodwin Plc,"
"GEC General Electric Company,"
"GED Global Energy Development Plc,"
"GEEC Great Eastern Energy Corporation Limited,"
"GEL Greka Engineering & Tech,"
"GEM Gemfields Plc,"
"GEMD Gem Diamonds Limited,"
"GENL Genel Energy Plc,"
"GFIR Global Fixed Income Real,"
"GFM Griffin Mining Limited,"
"GFRD Galliford Try Plc,"
"GFS G4S Plc,"
"GFTU Grafton Group Plc,"
"GGP Greatland Gold Plc,"
"GHE Gresham House Plc,"
"GHH Gooch & Housego Plc,"
"GHT Gresham Computing Plc,"
"GHYS Ishares Vi Plc (The Comp,"
"GILI Multi Units France,"
"GILS Multi Units France,"
"GKN Gkn Plc,"
"GKO Greenko Group Plc,"
"GKP Gulf Keystone Petroleum Ltd,"
"GLB Glanbia Plc,"
"GLDD UBS Ag,"
"GLDE UBS Ag,"
"GLDG UBS Ag,"
"GLDV SSGA SPDR ETFS Europe I,"
"GLE Gleeson [M.J.] Group Plc,"
"GLEN Glencore Xstrata Plc,"
"GLIF Greenwich Loan Income Fund Ld,"
"GLR Galileo Resources Plc,"
"GLRE SSGA SPDR ETFS Europe I,"
"GLTL SSGA SPDR ETFS Europe I Plc,"
"GLTR GLOBALTRANS INVESTMENT PLC GDR EACH REPR 1 ORD `REGS`(WI),"
"GLTS SSGA SPDR ETFS Europe I Plc,"
"GLTY SSGA SPDR ETFS Europe I Plc,"
"GMC Global Market Group Limited,"
"GMR Gaming Realms Plc,"
"GMS Gulf Marine Services Plc,"
"GNC Greencore Group Plc,"
"GNG Geong International Limited,"
"GNK Greene King Plc,"
"GNS Genus Plc,"
"GOAL Goals Soccer Centres Plc,"
"GOG Go-Ahead Group Plc,"
"GOLB RBS Market Access,"
"GOLE Societe Generale Effekten Gmbh,"
"GOLG Societe Generale Effekten Gmbh,"
"GOOD Good Energy Group Plc,"
"GPE Graphite Enterprise Trust Plc,"
"GPG Guinness Peat Group Plc,"
"GPM Golden Prospect Precious Metals Limited,"
"GPMS Golden Prospect Precious Metals Limited,"
"GPOR Great Portland Estates Plc,"
"GPRT Goldenport Holdings Inc.,"
"GPVPJP FTSE Value Stocks Japan Index,"
"GPX Gulfsands Petroleum Plc,"
"GRA Grafenia Plc,"
"GRAF ETFS Commodity Securities Limited,"
"GRG Greggs Plc,"
"GRI Grainger Plc,"
"GRIO Ground Rents Income Fund Plc,"
"GRIP Ground Rents Income Fund,"
"GRIW Ground Rents Income Fund Plc,"
"GRL Goldstone Resources Limited,"
"GRN Green REIT Plc,"
"GRPH Graphene Nanochem Plc,"
"GRTB GUARANTY TRUST BANK GDR EACH REPR 50 ORD `REGS`,"
"GSAG Multi Units Luxembourg,"
"GSAU Multi Units Luxembourg,"
"GSK Glaxosmithkline Plc,"
"GSR Golden Saint Resources L,"
"GSS Genesis Emerging Markets Fund Ld,"
"GTC Getech Group Plc,"
"GULF Gcp Sovereign Infrastruc,"
"GUS Gusbourne Plc,"
"GVC Gvc Holdings Plc,"
"GWI Globalworth Real Estate,"
"GWIN Gowin New Energy Group L,"
"GWMO Great Western Mining Corporation Plc,"
"GWP Gw Pharmaceuticals Plc,"
"GWUSA FTSE Gwa US Index,"
"H50E HSBC ETFS PLC DJ EURO STOXX 50 ETF,"
"HAG Hoang Anh Gia Lai Joint,"
"HAIK Haike Chemical Group Ltd,"
"HALO Halosource Inc.,"
"HALP Halifax Plc,"
"HALS Hals-Development Jsc,"
"HAN Hansa Trust Plc,"
"HANA Hansa Trust Plc,"
"HAS Hays Plc,"
"HAT H&T Group Plc,"
"HAWK Nighthawk Energy Plc,"
"HAYT Hayward Tyler Group Plc,"
"HBRL HSBC ETFS Plc,"
"HBRN Hibernia REIT P.L.C.,"
"HCAD HSBC ETFS Plc,"
"HCAN HSBC ETFS Plc,"
"HCFT Highcroft Investments Plc,"
"HCL Hellenic Carriers Limited,"
"HCM Hutchison China Meditech Limited,"
"HCP Hotel Corporation [The] Plc,"
"HDD Hardide Plc,"
"HDIV Henderson Diversified Income Limited,"
"HDT Holders Technology Plc,"
"HDY Hardy Oil & Gas Plc,"
"HEAD Headlam Group Plc,"
"HEAF ETFS Commodity Securities Limited,"
"HEAT ETFS Commodity Securities Limited,"
"HEFT Henderson European Focus Trust Plc,"
"HEGY Helius Energy Plc,"
"HER Herencia Resources Plc,"
"HFD Halfords Group Plc,"
"HFEL Henderson Far East Income Limited,"
"HFG Hilton Food Group Plc,"
"HGG Henderson Group Plc,"
"HGL Henderson Global Trust Plc,"
"HGM Highland Gold Mining Ld,"
"HGR8 HANGAR 8 PLC ORD GBP0.01,"
"HGT Hg Capital Trust Plc,"
"HHI Henderson High Income Trust Plc,"
"HHPD Hon Hai Precision Indust,"
"HHR Helphire Group Plc,"
"HHV Hargreave Hale Aim Vct 1 Plc,"
"HHVT Hargreave Hale Aim Vct 2 Plc,"
"HICL Hicl Infrastructure Company Ld,"
"HIDD HSBC ETFS Plc,"
"HIDR HSBC ETFS Plc,"
"HIK Hikma Pharmaceuticals Plc,"
"HILS Hill & Smith Holdings Plc,"
"HINS Henderson International Income Trust Plc,"
"HINT Henderson International Income Trust Plc,"
"HIX FTSE Actuaries 350 High Yield,"
"HKLB Hong Kong Land Holdings Ld,"
"HKOD HSBC ETFS Plc,"
"HKOR HSBC ETFS Plc,"
"HL HARGREAVES LANSDOWN PLC ORD GBP0.004 WI,"
"HLCL Helical Bar Plc,"
"HLMA Halma Plc,"
"HLTG Multi Units Luxembourg,"
"HLTL Lyxor International Asse,"
"HLTU Lyxor International Asse,"
"HLTW Multi Units Luxembourg,"
"HMAD HSBC ETFS Plc,"
"HMAF HSBC ETFS Plc,"
"HMBR HSBC ETFS Plc,"
"HMCD HSBC ETFS Plc,"
"HMCH HSBC ETFS Plc,"
"HMCX HSBC ETFS Plc,"
"HMED HSBC ETFS Plc,"
"HMEF HSBC ETFS Plc,"
"HMEM HSBC ETFS Plc,"
"HMEU HSBC ETFS Plc,"
"HMEX HSBC ETFS Plc,"
"HMFD HSBC ETFS Plc,"
"HMFE HSBC ETFS Plc,"
"HMJD HSBC ETFS Plc,"
"HMJP HSBC ETFS Plc,"
"HMLA HSBC ETFS Plc,"
"HMLD HSBC ETFS Plc,"
"HMLH Hml Holdings Plc,"
"HMSG Hms Hydraulic Machines &,"
"HMSO Hammerson Plc,"
"HMUD HSBC ETFS Plc,"
"HMUS HSBC ETFS Plc,"
"HMWD HSBC ETFS Plc,"
"HMWO HSBC ETFS Plc,"
"HMXD HSBC ETFS Plc,"
"HMXJ HSBC ETFS Plc,"
"HMYD HSBC ETFS Plc,"
"HMYR HSBC ETFS Plc,"
"HNE Henderson Eurotrust Plc,"
"HNT Huntsworth Plc,"
"HOC Hochschild Mining Plc,"
"HOGF ETFS Commodity Securities Limited,"
"HOGS ETFS Commodity Securities Limited,"
"HOIL Heritage Oil Plc,"
"HOME Home Retail Group Plc,"
"HON Honeywell International Incorporated,"
"HOT Henderson Opportunites Trust Plc,"
"HOTS Henderson Opportunites Trust Plc,"
"HPAC Hermes Pacific Investmen,"
"HPRD HSBC ETFS Plc,"
"HPRO HSBC ETFS Plc,"
"HR1O HAZEL RENEWABLE ENERGY VCT 1 PLC ORD GBP0.001,"
"HR2O HAZEL RENEWABLE ENERGY VCT 2 PLC ORD GBP0.001,"
"HRG Hogg Robinson Group Plc,"
"HRI Herald Investment Trust Plc,"
"HRN Hornby Plc,"
"HRO H.R. Owen Plc,"
"HRUB HSBC ETFS Plc,"
"HRUD HSBC ETFS Plc,"
"HSBA HSBC Holdings Plc,"
"HSBK Jsc Halyk Bank,"
"HSBR HSBC ETFS Plc,"
"HSD Hansard Global Plc,"
"HSL Henderson Smaller Companies Investment T,"
"HSLE Harbourvest Senior Loans Europe Ltd,"
"HSP Hargreaves Services Plc,"
"HSPB HSBC ETFS Plc,"
"HSPD HSBC ETFS Plc,"
"HSPX HSBC ETFS Plc,"
"HSTN Hansteen Holdings Plc,"
"HSV Homeserve Plc,"
"HSX Hiscox Ltd,"
"HTG Hunting Plc,"
"HTIG Hightex Group Plc,"
"HTRD HSBC ETFS Plc,"
"HTRY HSBC ETFS Plc,"
"HTWD HSBC ETFS Plc,"
"HTWN HSBC ETFS Plc,"
"HTY Hellermanntyton Group Pl,"
"HUKX HSBC ETFS Plc,"
"HUM Hummingbird Resources Plc,"
"HUME Hume Capital Securities,"
"HUR Hurricane Energy Plc,"
"HUW Hampden Underwriting Plc,"
"HVE Havelock Europa Plc,"
"HVN Harvey Nash Group Plc,"
"HVPE Harbourvest Global Private Equity Limite,"
"HVTA Heavitree Brewery Plc,"
"HVTR Henderson Value Trust Pl,"
"HWC Highway Capital Plc,"
"HWDN Howden Joinery Group Plc,"
"HYC Hyder Consulting Plc,"
"HYD Hydro International Plc,"
"HYDG Hydrogen Group Plc,"
"HYDR RUSHYDRO OJSC GDR EACH REPR 100 ORD  REG-S,"
"HYF Himalayan Fund Nv,"
"HYG Hygea Vct Plc,"
"HYLD Ishares Plc,"
"HYNS Haynes Publishing Group Plc,"
"HYR Hydrodec Group Plc,"
"HYUD Hyundai Motor Company,"
"HYUO HYUNDAI MOTOR CO GDS EACH REPR 0.5 ORD SHARE,"
"HYUP HYUNDAI MOTOR CO GDS EACH REP 0.5 PFD N/VTG,"
"HZAD HSBC ETFS Plc,"
"HZAR HSBC ETFS Plc,"
"HZD Horizon Discovery Group,"
"HZM Horizonte Minerals Plc,"
"IAAA Ishares Vi Plc (The Comp,"
"IACC Ishares III Plc,"
"IAE Ithaca Energy Inc,"
"IAEX Ishares Plc,"
"IAF Iafyds Plc,"
"IAG International Consolidated Airlines Grou,"
"IAP Icap Plc,"
"IAPD Ishares Plc,"
"IASP Ishares II Plc,"
"IAT Invesco Asia Trust Plc,"
"IAUP Ishares V Public Limited Company,"
"IAUS Ishares III Plc,"
"IAUT Ishares V Public Limited Company,"
"IBCI Ishares Plc,"
"IBCX Ishares Plc,"
"IBEL Ishares V Public Limited Company,"
"IBEX Ibex Global Solutions Pl,"
"IBGE Ishares III Plc,"
"IBGL Ishares II Plc,"
"IBGM Ishares II Plc,"
"IBGS Ishares Plc,"
"IBGX Ishares II Plc,"
"IBGY Ishares III Plc,"
"IBGZ Ishares III Plc,"
"IBM International Business Machines Corporat,"
"IBPO Ienergizer Ld,"
"IBT International Biotechnology Trust Plc,"
"IBTM Ishares II Plc,"
"IBTS Ishares Plc,"
"IBZL Ishares Plc,"
"ICAN Ishares III Plc,"
"ICGC Irish Continental Group Plc,"
"ICOV Ishares III Plc,"
"ICP Intermediate Capital Group Plc,"
"ICTA Investors Capital Trust Plc,"
"ICTB Investors Capital Trust Plc,"
"ICTU Investors Capital Trust Plc,"
"IDAP Ishares Plc,"
"IDAR Ishares II Plc,"
"IDBT Ishares Plc,"
"IDBZ Ishares Plc,"
"IDEA Ideagen Plc,"
"IDEE Ishares Plc,"
"IDEM Ishares Plc,"
"IDEU Ishares V Public Limited Company,"
"IDFE Ishares II Plc,"
"IDFF Ishares Plc,"
"IDFX Ishares Plc,"
"IDH Immunodiagnostic Systems Holdings Plc,"
"IDIN Ishares II Plc,"
"IDJG Ishares Plc,"
"IDJP Ishares III Plc,"
"IDJV Ishares Plc,"
"IDKO Ishares Plc,"
"IDM Inditherm Plc,"
"IDNA Ishares Plc,"
"IDOX Idox Plc,"
"IDP6 ISHARES III PLC S&P SMALLCAP 600 USD(USD),"
"IDPE Ishares II Plc,"
"IDTK Ishares II Plc,"
"IDTM Ishares II Plc,"
"IDTP Ishares II Plc,"
"IDTW Ishares Plc,"
"IDUP Ishares II Plc,"
"IDUS Ishares Plc,"
"IDVY Ishares Plc,"
"IDWP Ishares II Plc,"
"IDWR Ishares Plc,"
"IE15 ISHARES III PLC BARCLAYS EURO CORP BD 1-5EUR,"
"IEAC Ishares III Plc,"
"IEAG Ishares III Plc,"
"IEBC Ishares III Plc,"
"IECF Ishares Vi Plc (The Comp,"
"IEDY Ishares V Public Limited Company,"
"IEEM Ishares Plc,"
"IEER Ishares Plc,"
"IEGA Ishares III Plc,"
"IEGE Ishares III Plc,"
"IEGL Ishares II Plc,"
"IEGM Ishares II Plc,"
"IEGX Ishares II Plc,"
"IEGY Ishares III Plc,"
"IEGZ Ishares III Plc,"
"IEM Impax Environmental Markets Plc,"
"IEMA Ishares III Plc,"
"IEMB Ishares II Plc,"
"IEMI Ishares II Plc,"
"IEML Ishares III Plc,"
"IEMS Ishares III Plc,"
"IERE Invista European Real Estate Trust Sicaf,"
"IERP Invista European Real Estate Trust Sicaf,"
"IESE Ishares II Plc,"
"IESG Ishares II Plc,"
"IESP Ishares V Public Limited Company,"
"IEUA Ishares III Plc,"
"IEUR Ishares Plc,"
"IEUT Ishares Plc,"
"IEUX Ishares Plc,"
"IEX5 ISHARES III PLC BARCLAYS EURO CORP BD EX-FINLS 1-5EUR,"
"IEXF Ishares III Plc,"
"IFASI Ishares FTSE Epra/Nareit Asia Index Fund,"
"IFEUI Ishares FTSE Epra/Nareit Europe Index Fu,"
"IFFF Ishares Plc,"
"IFGLI Ishares FTSE Epra/Nareit Global Real Est,"
"IFIN Ishares V Public Limited Company,"
"IFL International Ferro Metals Limited,"
"IFM Intandem Films Plc,"
"IFNAI Ishares FTSE Epra/Nareit North America I,"
"IFNG Multi Units France,"
"IFP Ifg Group Plc,"
"IFRB Ishares V Public Limited Company,"
"IFSMI Ishares FTSE Dev Small Cap Ex North Amer,"
"IGAS Igas Energy Plc,"
"IGC India Capital Growth Fund Limited,"
"IGCC Ishares III Plc,"
"IGE Image Scan Holdings Plc,"
"IGEA Ishares III Plc,"
"IGG Ig Group Holdings Plc,"
"IGHY Ishares Plc,"
"IGIL Ishares III Plc,"
"IGLN Ishares Physical Metals Plc,"
"IGLO Ishares III Plc,"
"IGLS Ishares III Plc,"
"IGLT Ishares II Plc,"
"IGP Intercede Group Plc,"
"IGR International Greetings Plc,"
"IGRE Investors In Global Real Estate Limited,"
"IGSD Ishares IV Plc,"
"IGSG Ishares II Plc,"
"IGSU Ishares II Plc,"
"IGUS Ishares V Public Limited Company,"
"IGV Income & Growth Vct [The] Plc,"
"IGWD Ishares V Public Limited Company,"
"IH2O EUROPEAN EXCHANGE-TRADED FUND CO ISHARES S&P GLOBAL WATER GBP,"
"IHG Intercontinental Hotels Group Plc,"
"IHYG Ishares Plc,"
"IHYU Ishares II Plc,"
"III 3I Group Plc,"
"IIIP 3I Group Plc,"
"IIP Infrastructure India Plc,"
"IIT Independent Investment Trust Plc,"
"IITB Ishares V Public Limited Company,"
"IJPA Ishares III Plc,"
"IJPD Ishares Plc,"
"IJPE Ishares MSCI Japan EUR Hedged,"
"IJPH Ishares V Public Limited Company,"
"IJPN Ishares Plc,"
"IJPU Ishares Plc,"
"IKA Ilika Plc,"
"IKK Inch Kenneth Kajang Rubber Plc,"
"IKOR Ishares Plc,"
"IMAC Ingenious Media Active Capital Limited,"
"IME Immedia Group Plc,"
"IMEA Ishares III Plc,"
"IMET Barclays Bank Plc,"
"IMEU Ishares II Plc,"
"IMEX Ishares Vi Plc [The Company],"
"IMG Imagination Technologies Group Plc,"
"IMI IMI Plc,"
"IMIB Ishares II Plc,"
"IMIC International Mining & Infrastructure Co,"
"IMID SSGA SPDR ETFS Europe I Plc,"
"IMM Immupharma Plc,"
"IMT Imperial Tobacco Group Plc,"
"IMTK Imaginatik Plc,"
"IMV Ishares Vi Plc (The Comp,"
"INAA Ishares Plc,"
"INB Interbulk Group Plc,"
"INC Insetco Plc,"
"INCA Incadea Plc,"
"INCH Inchcape Plc,"
"IND Indigovision Group Plc,"
"INDG UBS Ag,"
"INDI Indus Gas Limited,"
"INDL Multi Units France,"
"INDO Multi Units France,"
"INDS Lyxor International Asse,"
"INDU UBS Ag,"
"INDW Multi Units Luxembourg,"
"INF Informa Plc,"
"INFA Infrastrata Plc,"
"INFI Infinis Energy Plc,"
"INFR Ishares II Plc,"
"INL Inland Homes Plc,"
"INLD Ishares V Public Limited Company,"
"INLZ Inland Zdp Plc,"
"INM Independent News & Media Plc,"
"INPP International Public Partnerships Ld,"
"INRG Ishares II Plc,"
"INRL Lyxor International Asse,"
"INRU Lyxor International Asse,"
"INS Instem Plc,"
"INSE Inspired Energy Plc,"
"INSP Inspirit Energy Holdings,"
"INTE Integra Group,"
"INTN Intu Properties Plc,"
"INTQ Internetq Plc,"
"INTU Intu Properties Plc,"
"INUG Multi Units Luxembourg,"
"INV Investment Company Plc,"
"INVP Investec Plc,"
"INVR Investec Plc,"
"INXG Ishares II Plc,"
"IOF Iofina Plc,"
"IOG Independent Oil & Gas Pl,"
"IOGP Ishares V Public Limited Company,"
"IOM Iomart Group Plc,"
"IPDM Ishares Physical Metals Plc,"
"IPE Invesco Perpetual Enhanc,"
"IPEL Impellam Group Plc,"
"IPF International Personal Finance Plc,"
"IPI Invesco Property Income Trust Ld,"
"IPLT Ishares Physical Metals Plc,"
"IPO Ip Group Plc,"
"IPOL Ishares V Public Limited Company,"
"IPOS FTSE Renaissance US Ipo Index,"
"IPOSAP FTSE Renaissance Asia Pacific Ex Japan I,"
"IPOSC FTSE Renaissance US Ipo Capped Index,"
"IPOSCN FTSE Renaissance Canada Ipo Index,"
"IPOSE FTSE Renaissance EMEA Ipo Index,"
"IPOSEC FTSE Renaissance EMEA Ipo Capped Index,"
"IPOSEM FTSE Renaissance Emerging Markets Ipo,"
"IPOSG FTSE Renaissance Global Ipo Index,"
"IPOSGC FTSE Renaissance Global Ipo Capped Index,"
"IPOSHKT FTSE Renaissance Hong Kong/China Top Ipo,"
"IPOSLM FTSE Renaissance Latin America Ipo Index,"
"IPOSNA FTSE Renaissance North America Ipo Index,"
"IPOST FTSE Renaissance US Ipo Investable Index,"
"IPOSXJ FTSE Renaissance Global Ex Japan Ipo Ind,"
"IPOSXU FTSE Renaissance Global Ex US Ipo Index,"
"IPP Ipplus Plc,"
"IPRP Ishares Plc,"
"IPRV Ishares II Plc,"
"IPSA Ipsa Group Plc,"
"IPU Invesco Perpetual UK Smaller Companies I,"
"IPX Impax Asset Management Group Plc,"
"IPXJ Ishares III Plc,"
"IQE Iqe Plc,"
"IRAO Open Joint Stock Company,"
"IRCP Ishares V Public Limited,"
"IRF Irf European Finance Investments Ltd,"
"IRG Independent Resources Plc,"
"IRHC Ishares V Public Limited,"
"IRIS Dcg Iris Limited,"
"IRON Ironveld Plc,"
"IRSA Ishares III Plc,"
"IRV Interserve Plc,"
"IS15 ISHARES PLC  ISHARES MARKIT IBOXX,"
"ISAC Ishares V Public Limited Company,"
"ISAG Ishares V Public Limited Company,"
"ISAM Ishares V Public Limited Company,"
"ISAT Inmarsat Plc,"
"ISDE Ishares II Plc,"
"ISDU Ishares II Plc,"
"ISDW Ishares II Plc,"
"ISEM Ishares II Plc,"
"ISF Ishares Plc,"
"ISFE Ishares II Plc,"
"ISG Interior Services Group Plc,"
"ISJP Ishares III Plc,"
"ISL Is Solutions Plc,"
"ISLN Ishares Physical Metals Plc,"
"ISP6 ISHARES III PLC S&P SMALLCAP 600 USD(GBP),"
"ISPC Investec Structured Products Calculus Vc,"
"ISUS Ishares II Plc,"
"ISWD Ishares II Plc,"
"ISXF Ishares III Plc,"
"ITA Itacare Capital Investments Limited,"
"ITE Ite Group Plc,"
"ITKY Ishares II Plc,"
"ITLMS FTSE Italia All-Share Index,"
"ITLMSC FTSE Italia All-Share Capped Index,"
"ITM Itm Power Plc,"
"ITMC FTSE Italia Mid Cap Index,"
"ITMI FTSE Italia Micro Cap Index,"
"ITPS Ishares II Plc,"
"ITQ Interquest Group Plc,"
"ITRK Intertek Group Plc,"
"ITSC FTSE Italia Small Cap Index,"
"ITSTAR FTSE Italia Star Index,"
"ITV Itv Plc,"
"ITWN Ishares Plc,"
"IUAG Ishares II Plc,"
"IUKD Ishares Plc,"
"IUKP Ishares II Plc,"
"IUSA Ishares Plc,"
"IUSE Ishares V Public Limited Company,"
"IUSP Ishares II Plc,"
"IVI Invesco Income Growth Trust Plc,"
"IVO Imperial Innovations Group Plc,"
"IVPB Invesco Perpetual Select Trust Plc,"
"IVPG Invesco Perpetual Select Trust Plc,"
"IVPM Invesco Perpetual Select Trust Plc,"
"IVPU Invesco Perpetual Select Trust Plc,"
"IWDA Ishares III Plc,"
"IWDE Ishares V Public Limited Company,"
"IWDP Ishares II Plc,"
"IWRD Ishares Plc,"
"IXI Ixico Plc,"
"J055 JP MORGAN INTL DERIVATIVES CALL WTS 17/06/05BARCLAYS A1 GBX550 C,"
"JAI Jpmorgan Asian Investement Trust Plc,"
"JAIS Jpmorgan Asian Investement Trust Plc,"
"JAM Jpmorgan American Investment Trust Plc,"
"JAPAN FTSE All-World Index Japan,"
"JARJ Jardine Matheson Holding,"
"JCH Jpmorgan Claverhouse Investment Trust Pl,"
"JD John David Group,"
"JDG Judges Scientific Plc,"
"JDSB Jardine Strategic Holdings Ld,"
"JDT Jupiter Dividend & Growth Trust Plc,"
"JDTC Jupiter Dividend & Growth Trust Plc,"
"JDTZ Jupiter Dividend & Growth Trust Plc,"
"JDW Wetherspoon [ J.D.] Plc,"
"JEL Jersey Electricity Plc,"
"JEMI Jpmorgan Global Emerging Markets Income,"
"JEO Jupiter European Opportunities Trust Plc,"
"JESC Jpmorgan Euro Small Co. Trust Plc,"
"JETG Jpmorgan European Investment Trust Plc,"
"JETI Jpmorgan European Investment Trust Plc,"
"JFJ Jpmorgan Japanese Investment Trust Plc,"
"JGC Jupiter Green Investment Trust Plc,"
"JGCI Jpmorgan Global Converti,"
"JHD James Halstead Plc,"
"JIGC Jpmorgan Income & Growth Investment Trus,"
"JIGI Jpmorgan Income & Growth Investment Trus,"
"JIGU Jpmorgan Income & Growth Investment Trus,"
"JII Jpmorgan Indian Investment Trust Plc,"
"JIL Juridica Investments Limited,"
"JIM Jarvis Securities Plc,"
"JKX Jkx Oil & Gas Plc,"
"JLEN John Laing Environmental,"
"JLF Jelf Group Plc,"
"JLH John Lewis of Hungerford Plc,"
"JLIF John Laing Infrastructure Fund Limited,"
"JLP Jubilee Platinum Plc,"
"JLT Jardine Lloyd Thompson Group Plc,"
"JMAT Johnson Matthey Plc,"
"JMC Jpmorgan Chinese Investment Trust Plc,"
"JMF Jpmorgan Mid Capital Investment Trust Pl,"
"JMG Jpmorgan Emerging Markets Investment Tru,"
"JMGS Jpmorgan Emerging Markets Investment Tru,"
"JMI Jpmorgan Smaller Companies Investment TR,"
"JMO Jpmorgan Overseas Investment Trust Plc,"
"JMOS Jpmorgan Overseas Invest,"
"JNKE SSGA SPDR ETFS Europe I Plc,"
"JNKS SSGA SPDR ETFS Europe I,"
"JNY Journey Group Plc,"
"JPB Jpmorgan Brazil Investment Trust Plc,"
"JPE Jpmorgan Elect Plc,"
"JPEC Jpmorgan Elect Plc,"
"JPEI Jpmorgan Elect Plc,"
"JPEL J.P. Morgan Private Equity Ld,"
"JPG Jupiter Primadona Growth Trust Plc,"
"JPGB ETFS Foreign Exchange Limited,"
"JPI Jpmorgan Income & Capital Trust Plc,"
"JPIU Jpmorgan Income & Capital Trust Plc,"
"JPIZ Jpmorgan Income & Capital Trust Plc,"
"JPM Jpmorgan Chase & Co,"
"JPNL Lyxor International Asse,"
"JPNU Lyxor International Asse,"
"JPP3 ETFS FOREIGN EXCHANGE LTD ETFS 3X LONG JPY SHORT GBP,"
"JPR Johnston Press Plc,"
"JPRL Jupiter Energy Limited,"
"JPS Jpmorgan Japan Smaller Co Tst Plc,"
"JPSL Jpmorgan Senior Secured,"
"JPSS Jpmorgan Japan Smaller Co Tst Plc,"
"JPSZ J.P. Morgan Private Equity Ld,"
"JPYP ETFS Foreign Exchange Limited,"
"JPZZ J.P. Morgan Private Equity Ld,"
"JQW Jqw Plc,"
"JRG Just Retirement Group Pl,"
"JRIC Japan Residential Investment Company Lim,"
"JRS Jpmorgan Russian Securities Plc,"
"JSG Johnson Service Group Plc,"
"JSJS Jsjs Designs Plc,"
"JSS Jupiter Second Split Trust Plc,"
"JSSU Jupiter Second Split Trust Plc,"
"JSSZ Jupiter Second Split Trust Plc,"
"JUB Jubilant Energy N.V,"
"JUP Jupiter Fund Management Plc,"
"JUSC Jpmorgan US Smaller Co. Inv Tst Plc,"
"JWNG Jaywing Plc,"
"JZCN Jz Capital Partners Limited,"
"JZCP Jz Capital Partners Limited,"
"KAY Kings Arms Yard Vct Plc,"
"KAZ Kazakhmys Plc,"
"KBC Kbc Advanced Technologies Plc,"
"KBE Kimberly Enterprises N.V.,"
"KBT K3 Business Technology Group Plc,"
"KCOM Kcom Group Plc,"
"KDR Karelian Diamond Resources Plc,"
"KEA Kea Petroleum Plc,"
"KEFI Kefi Minerals Plc,"
"KEM Kemin Resources Plc,"
"KENV Kennedy Ventures Plc,"
"KENZ Kentz Corporation Limited,"
"KFX Kofax Plc,"
"KGF Kingfisher Plc,"
"KGI Kirkland Lake Gold Inc,"
"KGLD Kolar Gold Limited,"
"KGP Kingspan Group Plc,"
"KIBO Kibo Mining Plc,"
"KIE Kier Group Plc,"
"KIT Keystone Investment Trust Plc,"
"KKB Jsc Kazkommertsbank,"
"KLBT Kalibrate Technologies P,"
"KLG Kalimantan Gold Corporation Limited,"
"KLN Kellan Group [The] Plc,"
"KLR Keller Group Plc,"
"KMCA Komercni Banka A.S.,"
"KMG Jsc Kazmunaigas Explorat,"
"KMGA Jsc Kazmunaigas Explorat,"
"KMK Kromek Group Plc,"
"KMR Kenmare Resources Plc,"
"KNM Konami Corporation,"
"KOD Kodal Minerals Plc,"
"KOOV Koovs Plc,"
"KRW Lyxor International Asse,"
"KRWL Lyxor International Asse,"
"KSK Ksk Power Ventur Plc,"
"KTCD KT CORP ADR EACH REPR 1/2 ORD KRW5000,"
"KUBC Kubera Cross-Border Fund Limited,"
"KWE Kennedy Wilson Real Esta,"
"KWS Keywords Studios Plc,"
"KYGA Kerry Group Plc,"
"L100 MULTI UNITS FRANCE ETF FTSE 100,"
"L250 MULTI UNITS FRANCE ETF FTSE 250,"
"LAD Ladbrokes Plc,"
"LAGR ETFS Commodity Securities Limited,"
"LALL ETFS Commodity Securities Limited,"
"LALU ETFS Commodity Securities Limited,"
"LAM Lamprell Plc,"
"LAND Land Securities Group Plc,"
"LAS London & Associated Properties Plc,"
"LAU3 ETFS FOREIGN EXCHANGE LTD ETFS 3X LONG AUD SHORT USD,"
"LAUD ETFS Foreign Exchange Limited,"
"LAUS Multi Units Luxembourg,"
"LAUU Multi Units Luxembourg,"
"LB1A LBG CAPITAL NO.1 PLC 7.375% ENH CAP NTS 12/03/20 EUR(VAR),"
"LB1C LBG CAPITAL NO.1 PLC 7.625% ENH CAP NTS 14/10/20 EUR(VAR),"
"LB1D LBG CAPITAL NO.1 PLC 8.125% ENH CAP NTS 15/12/19 GBP(VAR),"
"LB1E LBG CAPITAL NO.1 PLC 6.439% ENH CAP NTS 23/05/20 EUR50000,"
"LB1F LBG CAPITAL NO.1 PLC 11.04% ENH CAP NTS 19/03/20 GBP50000,"
"LB1G LBG CAPITAL NO.1 PLC 7.5884% ENH CAP NTS 12/05/20 GBP1000,"
"LB1H LBG CAPITAL NO.1 PLC 7.869% ENH CAP NTS 25/08/20 GBP50000,"
"LB1I LBG CAPITAL NO.1 PLC 7.8673% ENH CAP NTS 17/12/19 GBP1000,"
"LB1J LBG CAPITAL NO.1 PLC 7.975% ENH CAP NTS 15/09/24 GBP1,"
"LB2A LBG CAPITAL NO.2 PLC 9.125% ENH CAP NTS 15/07/20 GBP(VAR),"
"LB2C LBG CAPITAL NO.2 PLC 7.625% ENH CAP NTS 09/12/19 GBP(VAR),"
"LB2D LBG CAPITAL NO.2 PLC 9% ENH CAP NTS 15/12/19 GBP(VAR),"
"LB2E LBG CAPITAL NO.2 PLC 10.5% ENH CAP NTS 29/09/23 GBP(VAR),"
"LB2F LBG CAPITAL NO.2 PLC 9% ENH CAP NTS 15/07/29 GBP(VAR),"
"LB2I LBG CAPITAL NO.2 PLC 12.75% ENH CAP NTS 10/08/20 GBP(VAR),"
"LB2N LBG CAPITAL 2 11.875% ENH CAP NTS 01/09/24 GBP1000,"
"LB2O LBG CAPITAL NO.2 PLC 16.125% ENH CAP NTS 10/12/24 GBP50000,"
"LB2P LBG CAPITAL NO.2 PLC 8.875% ENH CAP NTS 07/02/20 EUR1000,"
"LB2Q LBG CAPITAL NO.2 PLC 9.334% ENH CAP NTS 07/02/20 GBP1000,"
"LB2R LBG CAPITAL NO.2 PLC 6.385% ENH CAP NTS 12/05/20 EUR(VAR),"
"LB2T LBG CAPITAL NO.2 PLC 15% ENH CAP NTS 21/12/19 EUR50000,"
"LBB Litebulb Group Ltd,"
"LBG1 LLOYDS TSB BANK PLC 5.375% MTN 07/09/15 GBP1000 4072,"
"LBOW Icg-Longbow Senior Secur,"
"LBRT ETFS Commodity Securities Limited,"
"LBS Leeds Building Society,"
"LBUL ETFS Commodity Securities Limited,"
"LCAD ETFS Foreign Exchange Limited,"
"LCAN Multi Units Luxembourg,"
"LCAU Multi Units Luxembourg,"
"LCFE ETFS Commodity Securities Limited,"
"LCG London Capital Group Holdings Plc,"
"LCHF ETFS Foreign Exchange Limited,"
"LCNP ETFS Foreign Exchange Limited,"
"LCNY ETFS Foreign Exchange Limited,"
"LCOC ETFS Commodity Securities Limited,"
"LCOE UBS Ag,"
"LCOP ETFS Commodity Securities Limited,"
"LCOR ETFS Commodity Securities Limited,"
"LCRW Ossiam Lux,"
"LCTO ETFS Commodity Securities Limited,"
"LDIV Multi Units France,"
"LDP Leed Resources Plc,"
"LDSG Leeds Group Plc,"
"LEAF Leaf Clean Energy Company,"
"LECI LECICO EGYPT S.A.E. GDR EACH REPR 1 ORD EGP5'REGS,"
"LED Led International Holdings Limited,"
"LEED ETFS Commodity Securities Limited,"
"LEF Ludgate Environmental Fund Limited,"
"LEG Legendary Investments Plc,"
"LEK Lekoil Limited,"
"LEMB Multi Units France,"
"LEMD Lyxor International Asse,"
"LEML Lyxor International Asse,"
"LEMV Ossiam Lux,"
"LEN Leyshon Energy Limited,"
"LEU3 ETFS FOREIGN EXCHANGE LTD ETFS 3X LONG EUR SHORT USD,"
"LEUR ETFS Foreign Exchange Limited,"
"LFAS Multi Units France,"
"LFI London Finance & Investment Group Plc,"
"LGAS ETFS Commodity Securities Limited,"
"LGB3 ETFS FOREIGN EXCHANGE LTD ETFS 3X LONG GBP SHORT USD,"
"LGBP ETFS Foreign Exchange Limited,"
"LGCD LG CHEM GDR EACH REP 1/2 ORD KRW5000(REG S),"
"LGCF Source Markets Public Limited Company,"
"LGCU Source Markets Public Limited Company,"
"LGEN Legal & General Group Plc,"
"LGLD Lg Electronics Inc,"
"LGO Leni Gas & Oil Plc,"
"LGRA ETFS Commodity Securities Limited,"
"LGT Lighthouse Group Plc,"
"LHEA ETFS Commodity Securities Limited,"
"LID Lidco Group Plc,"
"LIME ETFS Commodity Securities Limited,"
"LINP ETFS Foreign Exchange Limited,"
"LINR ETFS Foreign Exchange Limited,"
"LIO Liontrust Asset Management Plc,"
"LIV Livermore Investments Group Limited,"
"LIX FTSE Actuaries 350 Low Yield,"
"LJP3 ETFS FOREIGN EXCHANGE LTD ETFS 3X LONG JPY SHORT USD,"
"LJPY ETFS Foreign Exchange Limited,"
"LKOD LUKOIL OAO ADR EACH REPR 1 ORD RUB0.025,"
"LKOH Lukoil [Oao],"
"LKUU Multi Units France,"
"LKUW Multi Units France,"
"LLCT ETFS Commodity Securities Limited,"
"LLEA ETFS Commodity Securities Limited,"
"LLHO ETFS Commodity Securities Limited,"
"LLOY Lloyds Banking Group Plc,"
"LLPC Lloyds Banking Group Plc,"
"LLPD Lloyds Banking Group Plc,"
"LLPE Lloyds Banking Group Plc,"
"LLPF Lloyds Banking Group Plc,"
"LLPG Lloyds Banking Group Plc,"
"LLST ETFS Commodity Securities Limited,"
"LMI Lonmin Plc,"
"LMMV Ossiam Lux,"
"LMP Londonmetric Property Pl,"
"LMS Lms Capital Plc,"
"LMT Lombard Medical Technologies Plc,"
"LND Landore Resources Limited,"
"LNEY ETFS Commodity Securities Limited,"
"LNGA ETFS Commodity Securities Limited,"
"LNIK ETFS Commodity Securities Limited,"
"LNOK ETFS Foreign Exchange Limited,"
"LNRG ETFS Commodity Securities Limited,"
"LNTR Lenta Ltd,"
"LNZD ETFS Foreign Exchange Limited,"
"LOGP Lansdowne Oil & Gas Plc,"
"LOIL ETFS Commodity Securities Limited,"
"LOK Lok'n Store Group Plc,"
"LOND London Mining Plc,"
"LOOK Lookers Plc,"
"LOTS LOTTE SHOPPING CO GDR EACH REPR 1/20 KRW5000`144A`/REG`S`,"
"LOWV SSGA SPDR ETFS Europe I,"
"LPA Lpa Group Plc,"
"LPET ETFS Commodity Securities Limited,"
"LPH LP Hill Plc,"
"LPLA ETFS Commodity Securities Limited,"
"LPMT ETFS Commodity Securities Limited,"
"LQDE Ishares Plc,"
"LQDG Ishares Plc,"
"LQDH Ishares Plc,"
"LRD Laird Plc,"
"LRE Lancashire Holdings Limited,"
"LRL Leyshon Resources Limited,"
"LRM Lombard Risk Management Plc,"
"LSE London Stock Exchange Group Plc,"
"LSEK ETFS Foreign Exchange Limited,"
"LSFT ETFS Commodity Securities Limited,"
"LSI Lifeline Scientific Inc,"
"LSIC Lifeline Scientific Inc,"
"LSIL ETFS Commodity Securities Limited,"
"LSL Lsl Property Services Plc,"
"LSLI London & ST Lawrence Investment Company,"
"LSOB ETFS Commodity Securities Limited,"
"LSPU Multi Units Luxembourg,"
"LSPX Multi Units Luxembourg,"
"LSR The Local Shopping REIT Plc,"
"LSRG LSR GROUP OJSC GDR EACH REPR 0.20 ORD `REGS` (WI),"
"LSUG ETFS Commodity Securities Limited,"
"LSYO ETFS Commodity Securities Limited,"
"LTAM Ishares II Plc,"
"LTC Latchways Plc,"
"LTG Learning Technologies Gr,"
"LTHM Latham [James] Plc,"
"LTHP Latham [James] Plc,"
"LTI Lindsell Train Investment Trust Plc,"
"LTIM ETFS Commodity Securities Limited,"
"LTML Lyxor International Asse,"
"LTMU Lyxor International Asse,"
"LTNG Codeis Securities Sa,"
"LTOD Larsen And Toubro Limite,"
"LUD Ludorum Plc,"
"LUK2 ETFS FUND COMPANY PLC FTSE`100`LEV`2X`FD SHS GBP(GBP),"
"LUMV Ossiam Lux,"
"LVD Lavendon Group Plc,"
"LVSG UBS Ag,"
"LWB Low & Bonar Plc,"
"LWDB Law Debenture Corporation Plc,"
"LWEA ETFS Commodity Securities Limited,"
"LWI Lowland Investment Company Plc,"
"LWMV Ossiam Lux,"
"LWRF Lightwaverf Plc,"
"LXB Lxb Retail Properties Plc,"
"LYXF Lyxor Focus Fund [Gbp] Ltd,"
"LZIC ETFS Commodity Securities Limited,"
"LZYE Lzye Group Plc,"
"M0EB FTSE Euromid Eurobloc,"
"M0X FTSE Euromid,"
"M0XU FTSE Euromid ex UK,"
"MAB Mitchells & Butlers Plc,"
"MAC Marechale Capital Plc,"
"MACC Macromac Plc,"
"MACF Macfarlane Group Plc,"
"MAE Mallett Plc,"
"MAFL Mineral & Financial Investment Ltd.,"
"MAGP Magnolia Petroleum Plc,"
"MAI Maintel Holdings Plc,"
"MAIL Man Alternative Inv Ld Ord 0.1p,"
"MAJE Majedie Investments Plc,"
"MALD Lyxor International Asse,"
"MALL Lyxor International Asse,"
"MAN Manroy Plc,"
"MANX Manx Telecom Plc,"
"MAR Mar City Plc,"
"MARL Mariana Resources Limited,"
"MARS Marston's Plc,"
"MASA Masawara Plc,"
"MATD Petro Matad Limited,"
"MATG Multi Units Luxembourg,"
"MATW Multi Units Luxembourg,"
"MAV4 MAVEN INCOME & GROWTH VCT 4 PLC ORD GBP0.1,"
"MAVC Maven Income & Growth Vc,"
"MAW Maruwa Co. Ltd,"
"MAX Max Property Group Plc,"
"MBC Mitsubishi Corporation,"
"MBH Michelmersh Brick Holdings Plc,"
"MBO Mobilityone Limited,"
"MBSP Manchester Building Society,"
"MBSR Manchester Building Society,"
"MBT Mobile Tornado Group Plc,"
"MCB Mcbride Plc,"
"MCGN Microgen Plc,"
"MCIX FTSE Mid 250 [Exit],"
"MCKS Mckay Securities Plc,"
"MCLS Mccoll's Retail Group Pl,"
"MCM Motivcom Plc,"
"MCO Martinco Plc,"
"MCON Mincon Group Plc,"
"MCP Martin Currie Pacific Trust Plc,"
"MCR Mercer Resources Plc,"
"MCRB Mcb Finance Group Plc,"
"MCRO Micro Focus International Plc,"
"MCT Middlefield Canadian Income Pcc,"
"MCX FTSE Mid 250,"
"MCXNUK FTSE 250 Net Dividend Index,"
"MCXSP FTSE 250 Expiry Index,"
"MDM Mdm Engineering Group Limited,"
"MDZ Mediazest Plc,"
"MEC Mecom Group Plc,"
"MED1 FTSE Med 100,"
"MEDG Medgenics Inc.,"
"MEDI Medilink-Global UK Limited,"
"MEDU Medgenics Inc.,"
"MEL Mitsubishi Electric Corporation,"
"MELG Multi Units Luxembourg,"
"MER Mears Group Plc,"
"MERL Merlin Entertainments Pl,"
"MES Messaging International Plc,"
"MET Metro Baltic Horizons Plc,"
"METL Multi Units Luxembourg,"
"MEUD Lyxor Index Fund,"
"MEXI Multi Units France,"
"MFX Manx Financial Group Plc,"
"MGAM Morgan Crucible Co Plc,"
"MGGT Meggitt Plc,"
"MGHC M & G High Income Investment Trust Plc,"
"MGHI M & G High Income Investment Trust Plc,"
"MGHP M & G High Income Investment Trust Plc,"
"MGHU M & G High Income Investment Trust Plc,"
"MGHZ M & G High Income Investment Trust Plc,"
"MGNS Morgan Sindall Group Plc,"
"MGNT Ojsc Magnit,"
"MGR Miton Group Plc,"
"MHDU Source Markets Public Limited Company,"
"MHDX Source Markets Public Limited Company,"
"MHID Mahindra & Mahindra Limi,"
"MHM Marsh & Mclennan Cos. Inc,"
"MHPC MHP SA GDR EACH REPR 1 ORD SHARE `REGS`(WI),"
"MHUE Source Markets Public Li,"
"MHUU Source Markets Public Limited Company,"
"MIDD Ishares Plc,"
"MIG Mobeus Income & Growth 2 Vct Plc,"
"MIG1 MAVEN INCOME & GROWTH VCT PLC ORD GBP0.10,"
"MIG2 MAVEN INCOME & GROWTH VCT 2 PLC ORD GBP0.10,"
"MIG3 MAVEN INCOME & GROWTH VCT 3 PLC ORD GBP0.10,"
"MIG4 MATRIX INCOME & GROWTH 4 VCT PLC ORD GBP0.01,"
"MIGT Midas Income & Growth Trust Plc,"
"MIN Minoan Group Plc,"
"MINT Pimco Fixed Income Source ETFS Plc,"
"MINV Ishares Vi Plc (The Comp,"
"MIO Minco Plc,"
"MIRA Mirada Plc,"
"MIRL Minera Irl Limited,"
"MIUSA Macquarie USA Infrstructure Idx,"
"MIX Mobeus Income & Growth Vct Plc,"
"MJW Majestic Wine Plc,"
"MKLW Mucklow [A & J] Group Plc,"
"MKS Marks and Spencer Group Plc,"
"MLC Millennium & Copthorne Hotels Plc,"
"MLD Mirland Development Corporation Plc,"
"MLIN Molins Plc,"
"MLPD Source Markets Public Li,"
"MLPP Source Markets Public Li,"
"MLPQ Source Markets Public Li,"
"MLPS Source Markets Public Li,"
"MM MOOD MEDIA CORP NPV,"
"MMC Management Consulting Group Plc,"
"MMK Ojsc Magnitogorsk Iron &,"
"MML Medusa Mining Limited,"
"MMO Mercom Oil Sands Plc,"
"MMP Marwyn Management Partners Plc,"
"MMX Minds + Machines Group L,"
"MN1X FTSE Global 100 Index,"
"MNC Metminco Limited,"
"MNDI Mondi Plc,"
"MNKS Monks Investment Trust Plc,"
"MNL Manchester & London Investment Trust Plc,"
"MNOD Mmc Norilsk Nickel,"
"MNP Martin Currie Global Portfolio Trust Plc,"
"MNZS Menzies[John] Plc,"
"MOG Mediterranean Oil & Gas Plc,"
"MOGP Mountfield Group Plc,"
"MOIL Madagascar Oil Limited,"
"MOLD MAGYAR OLAJ-ES GAZIPARE RESZVENYTAR GDR EACH REP 1 SER`A`HUF1000(REG`S`),"
"MOMG Multi Units Luxembourg,"
"MOMT Multi Units Luxembourg,"
"MONI Monitise Plc,"
"MONY Moneysupermarket.Com Group Plc,"
"MOOO Barclays Bank Plc,"
"MOS Mobile Streams Plc,"
"MOSB Moss Bros Group Plc,"
"MPAS Source Markets Public Li,"
"MPCE Source Markets Public Li,"
"MPCX Source Markets Public Li,"
"MPE M.P. Evans Group Plc,"
"MPFE Source Markets Public Li,"
"MPI Michael Page International Plc,"
"MPLE Maple Energy Plc,"
"MPO Macau Property Opportunities Fund Limite,"
"MPOW Mopowered Group Plc,"
"MRC Mercantile Investment Trust [The] Plc,"
"MRCH Merchants Trust Plc,"
"MRO Melrose Plc,"
"MRW Morrison [Wm] Supermarkets Plc,"
"MSED Lyxor Index Fund,"
"MSG Milestone Group Plc,"
"MSI MS International Plc,"
"MSLH Marshalls Plc,"
"MSMN Mosman Oil and Gas Limit,"
"MSUE UBS Ag,"
"MSYS Microsaic Systems Plc,"
"MTA Matra Petroleum Plc,"
"MTC Mothercare Plc,"
"MTE Montanaro European Smaller C. Tst Plc,"
"MTEC Matchtech Group Plc,"
"MTH Mithras Investment Trust Plc,"
"MTL Metals Exploration Plc,"
"MTO Mitie Group Plc,"
"MTU Montanaro UK Smaller Companies Investmen,"
"MTV Motive Television Plc,"
"MTVW Mountview Estates Plc,"
"MTW Mattioli Woods Plc,"
"MUBL Mbl Group Plc,"
"MUL Mulberry Group Plc,"
"MUR Murgitroyd Group Plc,"
"MUT Murray Income Trust Plc,"
"MV1X FTSE MV Exchanges Index,"
"MVEU Ishares Vi Plc (The Comp,"
"MVI Marwyn Value Investors Limited,"
"MVOL Ishares Vi Plc (The Comp,"
"MVUS Ishares Vi Plc (The Comp,"
"MWA Mwana Africa Plc,"
"MWE Mti Wireless Edge Ltd.,"
"MWG Modern Water Plc,"
"MWGT Miton Worldwide Grwth Inv Tst Plc,"
"MWY Mid-Wynd International Investment Trust,"
"MXCS Source Markets Public Limited Company,"
"MXF Medicx Fund Limited,"
"MXFS Source Markets Public Limited Company,"
"MXJP Source Markets Public Limited Company,"
"MXP Max Petroleum Plc,"
"MXUS Source Markets Public Limited Company,"
"MXWO Source Markets Public Limited Company,"
"MYI Murray International Trust Plc,"
"MYIB Murray International Trust Plc,"
"MYT Mytrah Energy Limited,"
"MYX Mycelx Technologies Corporation,"
"MYXR Mycelx Technologies Corp,"
"N30X FTSE Norex 30 Index,"
"NABA Nationwide Building Society,"
"NAIT North American Income Trust [The] Plc,"
"NAK Nakama Group Plc,"
"NAND Nandan Cleantec Plc,"
"NANO Nanoco Group Plc,"
"NANW Nationwide Building Society,"
"NAR Northamber Plc,"
"NARS Nationwide Accident Repair Services Plc,"
"NAS North Atlantic Smaller Companies Investm,"
"NASA Nasstar Plc,"
"NATN National Westminster Bank Plc,"
"NATU UBS Ag,"
"NATW National Westminster Bank Plc,"
"NBB Norman Broadbent Plc,"
"NBDD Nb Distressed Debt Investment Fund Limit,"
"NBDG Nb Distressed Debt Inves,"
"NBDX Nb Distressed Debt Inves,"
"NBI Northbridge Industrial Services Plc,"
"NBLS Nb Global Floating Rate Income Fund Limi,"
"NBLU Nb Global Floating Rate Income Fund Limi,"
"NBNK Nbnk Investments Plc,"
"NBP Narborough Plantations Plc,"
"NBPE Nb Private Equity Partners Limited,"
"NBPO New Britain Palm Oil Limited,"
"NBPZ Nb Private Equity Partners Limited,"
"NBR Namibian Resources Plc,"
"NBSP Newcastle Building Society,"
"NBSR Newcastle Building Society,"
"NBU Naibu Global International Company Plc,"
"NCA New Century Aim Vct Plc,"
"NCA2 NEW CENTURY AIM VCT 2 PLC ORD GBP0.10,"
"NCC Ncc Group Plc,"
"NCCL Ncondezi Coal Company Limited,"
"NCE New City Energy Limited,"
"NCLG Societe Generale Effekten Gmbh,"
"NCON Norcon Plc,"
"NCSP Public Joint Stock Compa,"
"NCT Northcote Energy Limited,"
"NCYF New City High Yield Fund Limited,"
"NDCM Ntt Docomo Inc,"
"NDKX FTSE Denmark 20 Index,"
"NDXH Amundi Investment Soluti,"
"NEP Neptune-Calculus Income and Growth Vct P,"
"NEPI New Europe Property Investments Plc,"
"NET Netcall Plc,"
"NETD Netdimensions [Holdings] Limited,"
"NEW New World Oil and Gas Plc,"
"NEX National Express Group Plc,"
"NFC Next Fifteen Communications Group Plc,"
"NFIX FTSE Finland 25 Index,"
"NG NATIONAL GRID TRACO ord gbp0.10,"
"NGAF ETFS Commodity Securities Limited,"
"NGAS ETFS Commodity Securities Limited,"
"NGR Nature Group Plc,"
"NGSP ETFS Commodity Securities Limited,"
"NHY Norsk Hydro A.S.A,"
"NICK ETFS Commodity Securities Limited,"
"NICL Nichols Plc,"
"NII New India Investment Trust Plc,"
"NLG Arria Nlg Plc,"
"NLMK NOVOLIPETSK IRON AND STEEL CORP GDS EACH REPR 10 ORD RUB1 `REGS`,"
"NMC Nmc Health Plc,"
"NMD North Midland Construction Plc,"
"NMG Noricum Gold Limited,"
"NMIX FTSE Actuaries 350 [Exit],"
"NMOS Open Joint Stock Company,"
"NMX FTSE Actuaries 350,"
"NMX0530 FTSE 350 Oil & Gas Produces,"
"NMX0570 FTSE 350 Oil Equipment Services,"
"NMX1350 FTSE 350 Chemicals,"
"NMX1730 FTSE 350 Forestry & Paper,"
"NMX1750 FTSE 350 Industrial Metals,"
"NMX1770 FTSE 350 Mining,"
"NMX2350 FTSE 350 Construction & Materials,"
"NMX2710 FTSE 350 Aerospace & Defence,"
"NMX2720 FTSE 350 General Industrials,"
"NMX2730 FTSE 350 Electronic & Electrical Equipment,"
"NMX2750 FTSE 350 Industrial Engineering,"
"NMX2770 FTSE 350 Industrial Transportation,"
"NMX2790 FTSE 350 Support Services,"
"NMX3350 FTSE 350 Automobiles & Parts,"
"NMX3530 FTSE 350 Beverages,"
"NMX3570 FTSE 350 Food Producers,"
"NMX3720 FTSE 350 Household Goods,"
"NMX3760 FTSE 350 Personal Goods,"
"NMX3780 FTSE 350 Tobacco,"
"NMX4530 FTSE 350 Healthcare Equipment & Services,"
"NMX4570 FTSE 350 Pharmaceuticals & Biotechnology,"
"NMX5330 FTSE 350 Food & Drug Retailers,"
"NMX5370 FTSE 350 General Retailers,"
"NMX5550 FTSE 350 Media,"
"NMX5750 FTSE 350 Travel & Leisure,"
"NMX6530 FTSE 350 Fixed Line Telecommunications,"
"NMX6570 FTSE 350 Mobile Telecommunications,"
"NMX7530 FTSE 350 Electricity,"
"NMX7570 FTSE 350 Gas Water & Utilities,"
"NMX8350 FTSE 350 Banks,"
"NMX8530 FTSE 350 Non-Life Insurance,"
"NMX8570 FTSE 350 Life Insurance,"
"NMX8770 FTSE 350 General Financial,"
"NMX8980 FTSE 350 Equity Investment Instruments,"
"NMX9530 FTSE 350 Software & Computer Services,"
"NMX9570 FTSE 350 Technology Hardware & Equipment,"
"NOGB ETFS Foreign Exchange Limited,"
"NOKP ETFS Foreign Exchange Limited,"
"NOP Northern Petroleum Plc,"
"NOTP Nottingham Building Society,"
"NOVA Nova Resources Limited,"
"NPN Nippon Telegraph and Telephone Corporati,"
"NPSN NASPERS ADR EACH REPR 1 CLS`N` ORD(SPON),"
"NPT Netplay TV Plc,"
"NRGG Multi Units Luxembourg,"
"NRGW Multi Units Luxembourg,"
"NRGY Barclays Bank Plc,"
"NRI Northern Investors Company Plc,"
"NRKP Northern Rock [Asset Management] Plc,"
"NRR Newriver Retail Limited,"
"NRRP North River Resources Plc,"
"NSA Nimrod Sea Assets Limite,"
"NSCI Netscientific Plc,"
"NSH Norish Plc,"
"NSI New Star Investment Trust Plc,"
"NSIX FTSE Actuaries Fledgling [Exit],"
"NSN Natasa Mining Ltd,"
"NSWX FTSE Sweden 30 Index,"
"NSX FTSE Actuaries Fledgling,"
"NTA Northacre Plc,"
"NTBR Northern Bear Plc,"
"NTEA Northern Electric Plc,"
"NTG Northgate Plc,"
"NTLG New Trend Lifestyle Group Plc,"
"NTN Northern 3 Vct Plc,"
"NTOG Nostra Terra Oil and Gas Company Plc,"
"NTQ Enteq Upstream Plc,"
"NTV Northern 2 Vct Plc,"
"NUKE Etfx Fund Company Plc,"
"NUKP Etfx Fund Company Plc,"
"NUM Numis Corporation Plc,"
"NVA Novae Group Plc,"
"NVT Northern Venture Trust Plc,"
"NVTK NOVATEK OAO GDR EACH REPR 10 ORD `REG S`,"
"NWBD National Westminster Bank Plc,"
"NWF Nwf Group Plc,"
"NWIG Northwest Investment Group Limited,"
"NWKI Networkers International Plc,"
"NWR New World Resources Plc,"
"NWS Smiths News Plc,"
"NWT Newmark Security Plc,"
"NXR Norcros Plc,"
"NXT Next Plc,"
"NYO Nyota Minerals Ld,"
"NZDP ETFS Foreign Exchange Limited,"
"NZGB ETFS Foreign Exchange Limited,"
"O006 BLACKROCK ASSET MNGT DEUTSCHELAND ISHARES DAX (DE),"
"O010 BLACKROCK ASSET MNGT DEUTSCHELAND ISHARES DJ EURO STOXX (DE),"
"O011 BLACKROCK ASSET MNGT DEUTSCHELAND ISHARES DJ EURO STOXX 50 (DE),"
"O012 BLACKROCK ASSET MNGT DEUTSCHELAND ISHARES DJ EURO STOXX BANKS (DE),"
"O019 BLACKROCK ASSET MNGT DEUTSCHELAND ISHARES DJ EURO STOXX SUST 40 (DE),"
"O025 BLACKROCK ASSET MNGT DEUTSCHELAND ISHARES DJ STOXX 600 (DE),"
"O034 BLACKROCK ASSET MNGT DEUTSCHELAND ISHARES DJ STOXX 600 HEALTH CARE (DE),"
"O075 BARCLAYS GLOBAL INVESTORS (DEUT)AG EB.REXX GOVERNMENT GERMANY EX,"
"O080 ISHARES IBOXX EURO LIQUID CORP(DT ZERT),"
"O102 BLACKROCK ASSET MNGT DEUTSCHELAND ISHARES MDAX (DE),"
"O115 ISHARES CT ISHARES MSCI TURKEY,"
"O120 BLACKROCK ASSET MNGT DEUTSCHELAND ISHARES NIKKEI 225 (DE),"
"O124 ISHARES II PLC ISHARES S&P GLOBAL WATER GBP (BR),"
"O126 BLACKROCK ASSET MNGT DEUTSCHELAND ISHARES SMI (DE),"
"OAP3 OCTOPUS APOLLO VCT 3 PLC ORD GBP0.10,"
"OBT Obtala Resources Limited,"
"OCDO Ocado Group Plc,"
"OCL Oakley Capital Investments Limited,"
"OCN Ocean Wilsons [Holdings] Ld,"
"OCT Octagonal Plc,"
"ODX Omega Diagnostics Group Plc,"
"OEC1 OCTOPUS ECLIPSE VCT PLC ORD GBP0.1,"
"OEX Oilex Ld,"
"OFF Office2Office Plc,"
"OGDC OIL & GAS DEVELOPMENT CO GDR EACH REPR 10 ORD `REGS`,"
"OGN Origin Enterprises Plc,"
"OGT International Oil and Gas Technology Lim,"
"OGZD GAZPROM OAO ADS EACH REPR 4 ORD SHS,"
"OIG Oryx International Growth Fund Ltd,"
"OILB ETFS Oil Securities Ld,"
"OILD UBS Ag,"
"OILW ETFS Oil Securities Ld,"
"OKEY O`KEY GROUP SA GDR EACH REPR 1 SHARE REG S WI,"
"OLBP ETFS Oil Securities Ld,"
"OLWP ETFS Oil Securities Ld,"
"OMG Omg Plc,"
"OMI Orosur Mining Inc,"
"OMIP One Media Ip Group Plc,"
"OML Old Mutual Plc,"
"ONE One Delta Plc,"
"ONL On-Line Plc,"
"OOA Octopus Aim Vct Plc,"
"OPAY Optimal Payments Plc,"
"OPE Optare Plc,"
"OPG Opg Power Ventures Plc,"
"OPHR Ophir Energy Plc,"
"OPM 1Pm Plc,"
"OPP Origo Partners Plc,"
"OPPP Origo Partners Plc,"
"OPTG Multi Units Luxembourg,"
"OPTM Multi Units Luxembourg,"
"OPTS Optos Plc,"
"ORCP Oracle Coalfields Plc,"
"ORE Orogen Gold Plc,"
"ORM Ormonde Mining Plc,"
"OSB1 ETFS OIL SECURITIES LTD ETFS BRENT OIL 1YR,"
"OSB2 ETFS OIL SECURITIES LTD ETFS BRENT OIL 2YR,"
"OSB3 ETFS OIL SECURITIES LTD ETFS BRENT OIL 3YR,"
"OSEC Octopus Second Aim Vct Plc,"
"OSG Opsec Security Group Plc,"
"OSU Orsu Metals Corporation,"
"OSW1 ETFS OIL SECURITIES LTD ETFS WTI OIL 1YR,"
"OSW2 ETFS OIL SECURITIES LTD ETFS WTI OIL 2YR,"
"OSW3 ETFS OIL SECURITIES LTD ETFS WTI OIL 3YR,"
"OTC Ortac Resources Limited,"
"OTM Ottoman Fund Limited [The],"
"OTMT Orascom Telecom Media An,"
"OTPD Otp Bank Plc,"
"OTT Oxford Technology 3 Venture Capital Trus,"
"OTV1 OCTOPUS TITAN VCT 1 PLC ORD GBP0.10,"
"OTV2 OCTOPUS TITAN VCT 2 PLC ORD GBP0.10,"
"OTV3 OCTOPUS TITAN VCT 3 PLC ORD GBP0.10,"
"OTV4 OCTOPUS TITAN VCT 4 PLC ORD GBP0.10,"
"OUT Outsourcery Plc,"
"OVCT Octopus Vct Plc,"
"OVG Ovoca Gold Plc,"
"OXA Oxford Advanced Surfaces Group Plc,"
"OXB Oxford Biomedica Plc,"
"OXF Oxford Technology 4 Venture Capital Trus,"
"OXH Oxford Technology 2 Venture Capital Trus,"
"OXIG Oxford Instruments Plc,"
"OXP Oxford Pharmascience Group Plc,"
"OXS Oxus Gold Plc,"
"OXT Oxford Technology Venture Capital Trust,"
"PA Partnership Assurance Group,"
"PAA Parallel Media Group Plc,"
"PAC Pacific Assets Trust Plc,"
"PACC Prime Active Capital Plc,"
"PACL Pacific Alliance China Land Limited,"
"PADV SSGA SPDR ETFS Europe I,"
"PAF Pan African Resources Plc,"
"PAG Paragon Group of Companies Plc,"
"PAGR ETFS Hedged Commodity Securities Limited,"
"PAL Equatorial Palm Oil Plc,"
"PALL ETFS Hedged Commodity Securities Limited,"
"PALM Asian Plantations Limited,"
"PAN Pan European Terminals P,"
"PANR Pantheon Resources Plc,"
"PAP Paddy Power Plc,"
"PAR Paragon Resources Plc,"
"PAX Pacific Alliance Asia Opportunity Fund L,"
"PAY Paypoint Plc,"
"PBRT ETFS Hedged Commodity Securities Limited,"
"PBTY Probability Plc,"
"PBUL ETFS Hedged Commodity Securities Limited,"
"PCA Palace Capital Plc,"
"PCF Private & Commercial Finance Group Plc,"
"PCFC Private & Commercial Fin,"
"PCFS Polar Capital Global Fin,"
"PCFT Polar Capital Global Fin,"
"PCGH Polar Cap Glbl Health Gwth&Inc Tst Plc,"
"PCH Pochin's Plc,"
"PCI Petroceltic International Plc,"
"PCOP ETFS Hedged Commodity Securities Limited,"
"PCRD ETFS Hedged Commodity Securities Limited,"
"PCT Polar Capital Technology Trust Plc,"
"PCTN Picton Property Income Ld,"
"PCTS Polar Capital Technology Trust Plc,"
"PCTZ Picton Zdp Limited,"
"PDG Pendragon Plc,"
"PDL Petra Diamonds Limited,"
"PEBI Port Erin Biopharma Investments Limited,"
"PEG Petards Group Plc,"
"PEL Paragon Entertainment Limited,"
"PEN Pennant International Group Plc,"
"PENR ETFS Hedged Commodity Securities Limited,"
"PEQ Private Equity Investor Plc,"
"PER Perform Group Plc,"
"PERI Source Markets Public Li,"
"PET Petrel Resources Plc,"
"PETS Pets At Home Group Plc,"
"PEW Premier Energy & Water Trust Plc,"
"PEWZ Premier Energy & Water Trust Plc,"
"PEY Princess Private Equity Holding Limited,"
"PFAG ETFS Hedged Commodity Securities Limited,"
"PFC Petrofac Limited,"
"PFCM ETFS Hedged Commodity Securities Limited,"
"PFD Premier Foods Plc,"
"PFDF PREMIER FOODS PLC NEW ORD GBP0.01(F/PD 7/9/06),"
"PFDN Premier Foods Plc,"
"PFEN ETFS Hedged Commodity Securities Limited,"
"PFG Provident Financial Plc,"
"PFG7 PROVIDENT FINANCIAL 7% GTD BDS 14/04/20 GBP1,"
"PFL Premier Farnell Plc,"
"PFLB Premier Farnell Plc,"
"PFLM Powerfilm Inc.,"
"PFP Pathfinder Minerals Plc,"
"PFZ Pfizer Incorporated,"
"PGB Pilat Media Global Plc,"
"PGD Patagonia Gold Plc,"
"PGH Personal Group Holdings Plc,"
"PGIL Polyus Gold International Limited,"
"PGL Peninsular Gold Limited,"
"PGOO Proven Growth & Income Vct Plc,"
"PGR Premier Gold Resources Plc,"
"PGY Progility Plc,"
"PHAG ETFS Metal Securities Ld,"
"PHAL ETFS Industrial Metal Securities Limited,"
"PHAU ETFS Metal Securities Limited,"
"PHC Plant Health Care Plc,"
"PHCU ETFS Industrial Metal Securities Limited,"
"PHD Proactis Holdings Plc,"
"PHDC Palm Hills Developments,"
"PHE Powerhouse Energy Group Plc,"
"PHGP ETFS Metal Securities Ld,"
"PHI Pacific Horizon Investment Trust Plc,"
"PHNI ETFS Industrial Metal Securities Limited,"
"PHNX Phoenix Group Holdings,"
"PHO Peel Hotels Plc,"
"PHOR Ojsc Phosagro,"
"PHP Primary Health Properties Plc,"
"PHPB ETFS Industrial Metal Securities Limited,"
"PHPD ETFS Metal Securities Ld,"
"PHPM ETFS Metal Securities Ld,"
"PHPP ETFS Metal Securities Ld,"
"PHPT ETFS Metal Securities Ld,"
"PHRM Phorm Inc,"
"PHSC Phsc Plc,"
"PHSN ETFS Industrial Metal Securities Limited,"
"PHSP ETFS Metal Securities Ld,"
"PHST PHARMSTANDARD OJSC GDR EACH REPR 0.25 ORD`REGS`,"
"PHTM Photo-Me International Plc,"
"PHZN ETFS Industrial Metal Securities Limited,"
"PIC Pace Plc,"
"PIDD POSCO ADR EACH REP 1/4 KRW5000 LVL111(BNY),"
"PIK PIK GROUP OJSC GDR EACH REPR 1 ORD  `REGS,"
"PIL Produce Investments Plc,"
"PIM Plant Impact Plc,"
"PIMT ETFS Hedged Commodity Securities Limited,"
"PIN Pantheon International Participations Pl,"
"PINN Pinnacle Technology Group Plc,"
"PINR Pantheon International Participations Pl,"
"PIP Pipehawk Plc,"
"PIRI Pires Investments Plc,"
"PJF Prospect Japan Fund Ld,"
"PKG Park Group Plc,"
"PLA Plastics Capital Plc,"
"PLAG Societe Generale Effekten Gmbh,"
"PLAZ Plaza Centers N.V.,"
"PLE Plethora Solutions Holdings Plc,"
"PLI Perpetual Income and Growth Investment T,"
"PLMO Polemos Plc,"
"PLND Poundland Group Plc,"
"PLTE UBS Ag,"
"PLTG UBS Ag,"
"PLTI UBS Ag,"
"PLTM ETFS Commodity Securities Limited,"
"PLUS Plus500 Ltd,"
"PMEA Pme African Infrastructure Opportunities,"
"PMET Barclays Bank Plc,"
"PMG Parkmead Group [The] Plc,"
"PML Papua Mining Plc,"
"PMO Premier Oil Plc,"
"PMO1 PREMIER OIL ORD GBP0.175,"
"PMP Portmeirion Group Plc,"
"PMR Panmure Gordon & Co. Plc,"
"PNA Penna Consulting Plc,"
"PNGA ETFS Hedged Commodity Securities Limited,"
"PNL Personal Assets Trust Plc,"
"PNN Pennon Group Plc,"
"PNS Panther Securities Plc,"
"PNX Phoenix IT Group Plc,"
"POB Nationwide Building Society,"
"POBA Nationwide Building Society,"
"POG Petropavlovsk Plc,"
"POL Polo Resources Limited,"
"POLR Polar Capital Holdings Plc,"
"POLY Polymetal International Plc,"
"POS Plexus Holdings Plc,"
"POWR Powerflute Oyj,"
"PPC President Petroleum Company Plc,"
"PPE Proven Planned Exit Vct Plc,"
"PPH Pphe Hotel Group Limited,"
"PPIX Prophotonix Limited,"
"PPMT ETFS Hedged Commodity Securities Limited,"
"PPR Pentagon Protection Plc,"
"PPS Proton Power Systems Plc,"
"PPT Planet Payment Inc.,"
"PRAE Praetorian Resources Limited,"
"PREE UBS Ag,"
"PREG UBS Ag,"
"PREM Premier African Minerals,"
"PRES Pressure Technologies Plc,"
"PRG Paragon Diamonds Limited,"
"PRM Proteome Sciences Plc,"
"PRO Progressive Digital Media Group Plc,"
"PROX Proxama Plc,"
"PRP Prime People Plc,"
"PRS Paternoster Resources Plc,"
"PRSS Praetorian Resources Limited,"
"PRU Prudential Plc,"
"PRUD Prudential Plc,"
"PRV Porvair Plc,"
"PRW Promethean World Plc,"
"PRZ Prezzo Plc,"
"PSBW Powershares Glbal Funds Ireland Plc Powershares,"
"PSES Powershares Glbal Funds Ireland Plc,"
"PSGA Powershares Glbal Funds Ireland Plc,"
"PSHO Powershares Glbal Funds Ireland Plc,"
"PSL Photonstar Led Group Plc,"
"PSN Persimmon Plc,"
"PSON Pearson Plc,"
"PSPI Public Service Properties Investments Li,"
"PSRA Powershares Glbal Funds Ireland Plc,"
"PSRD Powershares Glbal Funds Ireland Plc,"
"PSRE Powershares Glbal Funds Ireland Plc,"
"PSRF Powershares Glbal Funds Ireland Plc,"
"PSRH Powershares Glbal Funds Ireland Plc,"
"PSRM Powershares Glbal Funds Ireland Plc,"
"PSRU Powershares Glbal Funds Ireland Plc,"
"PSRW Powershares Glbal Funds Ireland Plc,"
"PSSP Powershares Glbal Funds Ireland Plc,"
"PSVR ETFS Hedged Commodity Securities Limited,"
"PSWC Powershares Glbal Funds Ireland Plc,"
"PTCM Porta Communications Plc,"
"PTD Pittards Plc,"
"PTEC Playtech Limited,"
"PTF Phaunos Timber Fund Limited,"
"PTO Publishing Technology Plc,"
"PTR Petroneft Resources Plc,"
"PTV Peertv Plc,"
"PTY Parity Group Plc,"
"PUB Punch Taverns Plc,"
"PUMA Puma Vct Vii Plc,"
"PUR Pure Wafer Plc,"
"PURE Purecircle Limited,"
"PURI Puricore Plc,"
"PUS3 ETFS FOREIGN EXCHANGE LTD ETFS 3X SHORT USD LONG GBP,"
"PVCS Pv Crystalox Solar Plc,"
"PVF Prosperity Voskhod Fund Limited,"
"PVN Proven Vct Plc,"
"PVR Providence Resources Plc,"
"PWS Pinewood Shepperton Plc,"
"PXS Provexis Plc,"
"PYC Physiomics Plc,"
"PZC Pz Cussons Plc,"
"Q500 FTSE NASDAQ 500 INDEX,"
"QED Quintain Estates and Development Plc,"
"QFI Quadrise Fuels International Plc,"
"QIF Qatar Investment Fund Plc,"
"QIH Qihang Equipment Company Limited,"
"QLGC FTSE Nasdaq Large Cap Index,"
"QMID FTSE Nasdaq Mid Cap Index,"
"QPP Quindell Portfolio Plc,"
"QQ qinetiq group ord gbp0,"
"QQQS Boost Issuer Public Limi,"
"QRM Quoram Plc,"
"QRT Quarto Group Incorporated,"
"QSMC FTSE Nasdaq Small Cap Index,"
"QUID Pimco Fixed Income Source ETFS Plc,"
"QXT Quixant Plc,"
"RAT Rathbone Brothers Plc,"
"RB Reckitt Benckiser,"
"RB19 ROYAL BANK OF SCOTLAND CERTS 12/01/15(FTSE 100 INDEX)GBP,"
"RB51 ROYAL BANK OF SCOTLAND 5.1% PRINC PROT NTS 01/02/20 GBP100,"
"RB53 ROYAL BANK OF SCOTLAND CERTS 26/08/15(FXD RTE PAY OFF GBP)GBP,"
"RB81 ROYAL BANK OF SCOTLAND CERTS 17/06/19(RBS CUR HEDGED LKD TO GLD,"
"RB84 ROYAL BANK OF SCOTLAND CERTS 17/06/19(RBS CUR HDG LKD RICI ENH,"
"RBLI Royal Bank of Scotland Plc,"
"RBN Robinson Plc,"
"RBPI Royal Bank of Scotland Plc,"
"RBPX Royal Bank of Scotland Plc,"
"RBS Royal Bank of Scotland Group Plc,"
"RBXD Ranbaxy Laboratories Lim,"
"RC2 RECONSTRUCTION CAPITAL II ORD EUR0.01,"
"RCDO Ricardo Plc,"
"RCG Rcg Holdings Limited,"
"RCI Rapidcloud International,"
"RCN Redcentric Plc,"
"RCP Rit Capital Partners Plc,"
"RDI Redefine International P.L.C.,"
"RDSA Royal Dutch Shell Plc,"
"RDSB Royal Dutch Shell Plc,"
"RDW Redrow Plc,"
"RDXS Source Markets Public Limited Company,"
"RE R.e.a. Holdings,"
"RE.B R.E.A. Holdings Plc,"
"REAC React Energy Plc,"
"REC Record Plc,"
"RECI Real Estate Credit Investments Pcc Limit,"
"RECP Real Estate Credit Investments Pcc Limit,"
"REDT Red24 Plc,"
"REG Rare Earths Global Limited,"
"REH Renewable Energy Holdings Plc,"
"REL Reed Elsevier Plc,"
"REM Rare Earth Minerals Plc,"
"RENE Reneuron Group Plc,"
"REVO Revolymer Plc,"
"REX Rexam Plc,"
"RFC Rangers International Fo,"
"RGD The Real Good Food Company Plc,"
"RGI R.G.I. International Limited,"
"RGM Regency Mines Plc,"
"RGO 2 Ergo Group Plc,"
"RGP Ross Group Plc,"
"RGS Regenersis Plc,"
"RGU Regus Plc,"
"RHL Redhall Group Plc,"
"RHM Resource Holding Management Limited,"
"RIC Richoux Group Plc,"
"RICA Ruffer Investment Company Ltd,"
"RICI RBS Market Access,"
"RICM RBS Market Access,"
"RICO Ricoh Co Ltd,"
"RIFS Reliance Infrastructure,"
"RIG Cqs Rig Finance Fund Limited,"
"RIGD RELIANCE INDUSTRIES GDR EACH REP 2 INR10 LEVEL 1(BNY)`144A,"
"RIIC Rights & Issues Investment Trust Plc,"
"RIII Rights & Issues Investment Trust Plc,"
"RIO Rio Tinto Plc,"
"RIOB FTSE Russia Iob Index,"
"RIOL Lyxor International Asse,"
"RIOU Lyxor International Asse,"
"RKH Rockhopper Exploration Plc,"
"RKMD Ojsc Rostelecom,"
"RLD Richland Resources Ltd,"
"RLE Real Estate Investors Plc,"
"RLH Red Leopard Holdings Plc,"
"RM RM Plc,"
"RMG Royal Mail Plc,"
"RMM Rambler Metals & Mining Plc,"
"RMP Red Emperor Resources NL,"
"RMV Rightmove Plc,"
"RNK Rank Group Plc,"
"RNO Renold Plc,"
"RNVO Renovo Group Plc,"
"RNWH Renew Holdings Plc,"
"ROL Rotala Plc,"
"ROR Rotork Plc,"
"ROSE Rose Petroleum Plc,"
"ROSN Ojsc Oc Rosneft,"
"RPC RPC Group Plc,"
"RPO Ruspetro Plc,"
"RPS Rps Group Plc,"
"RPT Regal Petroleum Plc,"
"RQFI DB X-Trackers,"
"RQIH Randall & Quilter Investment Holdings Pl,"
"RR Rolls Royce Group,"
"RRL Range Resources Limited,"
"RRR Red Rock Resources Plc,"
"RRS Randgold Resources Ld,"
"RS10 ROYAL BANK OF SCOTLAND PLC CERTS 05/11/15(RBS CERT RS09)GBP,"
"RS14 ROYAL BANK OF SCOTLAND PLC CERTS 23/11/15(RBS CERT ISHS MSCI IDX),"
"RS27 ROYAL BANK OF SCOTLAND PLC CERTS 25/04/16(RBS EX FTSE RS26),"
"RSA Rsa Insurance Group Plc,"
"RSAB Rsa Insurance Group Plc,"
"RSAN Rsa Insurance Group Plc,"
"RSB Rensburg Aim Vct Plc,"
"RSE Riverstone Energy Limite,"
"RSL Resolution Limited,"
"RSS Rab Special Situations Company Limited,"
"RST Restore Plc,"
"RSTR Rightster Group Plc,"
"RSW Renishaw Plc,"
"RTC Rtc Group Plc,"
"RTG Rethink Group [The] Plc,"
"RTI Rolta India Limited,"
"RTN Restaurant Group Plc,"
"RTO Rentokil Initial Plc,"
"RTT Rcm Technology Trust Plc,"
"RTWO Etfx Fund Company Plc,"
"RTWP Etfx Fund Company Plc,"
"RTYS Source Markets Public Limited Company,"
"RUG Renaissance US Growth Investment Trust P,"
"RUR Rurelec Plc,"
"RUS Raven Russia Ltd,"
"RUSD RBS Market Access,"
"RUSL Lyxor International Asse,"
"RUSP Raven Russia Ltd,"
"RUSU Lyxor International Asse,"
"RUSW Raven Russia Ltd,"
"RVG Retroscreen Virology Group Plc,"
"RWA Robert Walters Plc,"
"RWS Rws Holdings Plc,"
"RXP Roxi Petroleum Plc,"
"RYA Ryanair Holdings Plc,"
"S100 SOURCE MARKETS FTSE`100`SOURCE ETF  CLS`A`GBP,"
"S250 SOURCE MARKETS FTSE`250`SOURCE ETF CLS`A`GBP,"
"SA12 SOCIETE GENERALE ACCEPTANCE NV call wts 16/12/05azn e0.1 gbx2400 c,"
"SA20 SOCIETE GENERALE ACCEPTANCE NV put wts 16/12/05vod e1 gbx145 c,"
"SA21 SOCIETE GENERALE ACCEPTANCE NV call wts 17/3/06rdsb e0.1 gbx1700 c,"
"SA22 SOCIETE GENERALE ACCEPTANCE NV call wts 17/3/06rdsb e0.1 gbx2000 c,"
"SA47 SOCIETE GENERALE ACCEPTANCE NV call wts 17/3/06bt.a e1 gbx225 c,"
"SA70 SOCIETE GENERALE ACCEPTANCE NV put wts 17/3/06rr. e1 gbx330 c,"
"SA78 SOCIETE GENERALE ACCEPTANCE NV call wts 17/3/06dj30 e0.001 usd12000 c,"
"SA79 SOCIETE GENERALE ACCEPTANCE NV put wts 17/3/06dj30 e0.001 usd10000 c,"
"SA80 SOCIETE GENERALE ACCEPTANCE NV put wts 17/3/06dj30 e0.001 usd11000 c,"
"SAA M&C Saatchi Plc,"
"SAAA Ishares Vi Plc (The Comp,"
"SAB Sabmiller Plc,"
"SAC Sacoil Holdings Limited,"
"SACC Ishares III Plc,"
"SAD ETFS Foreign Exchange Limited,"
"SAF Safeland Plc,"
"SAFE Safestore Holdings Plc,"
"SAG Sagentia Group Plc,"
"SAGR ETFS Commodity Securities Limited,"
"SAL Spaceandpeople Plc,"
"SALL ETFS Commodity Securities Limited,"
"SALU ETFS Commodity Securities Limited,"
"SAMS SAMSUNG CORP GDS EACH REPR 1/2 ORD SHARE,"
"SAN Santander UK Plc,"
"SANB Santander UK Plc,"
"SAP3 ETFS FOREIGN EXCHANGE LTD ETFS 3X SHORT AUD LONG GBP,"
"SAPO South African Property Opportunities Plc,"
"SAR Sareum Holdings Plc,"
"SAU3 ETFS FOREIGN EXCHANGE LTD ETFS 3X SHORT AUD LONG USD,"
"SAUP ETFS Foreign Exchange Limited,"
"SAUS Ishares III Plc,"
"SAUT Ishares V Public Limited Company,"
"SAV Savannah Resources Plc,"
"SB03 societe generale acceptance nv call wts 17/03/06 stan e0.01 gbx1400 c,"
"SB04 societe generale acceptance nv put wts 17/03/06 stan e0.01 gbx1200 c,"
"SB05 societe generale acceptance nv call wts 17/03/06 boc e0.1 gbx1200 c,"
"SB06 societe generale acceptance nv put wts 17/03/06 boc e0.1 gbx1100 c,"
"SB08 societe generale acceptance nv put wts 17/03/06 prty e1 gbx100 c,"
"SB09 societe generale acceptance nv call wts 17/03/06 emg e0.1 gbx1700 c,"
"SB13 societe generale acceptance nv put wts 15/12/06 gsp e0.01 usd450 c,"
"SB14 societe generale acceptance nv put wts 28/12/05 gsp e0.01 usd475 c,"
"SB20 societe generale acceptance nv put wts 17/03/06prty e1 gbx80 c,"
"SB28 SOCIETE GENERALE ACCEPTANCE NV CALL WT 17/12/10(LYXOR F.JSE T40)GBP30,"
"SB30 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 19/06/09(HAMMERSON)GBX700,"
"SB43 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 19/06/09(NEXT)GBX1000,"
"SB46 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 19/06/09(RYL BK SCOT)GBX80,"
"SB47 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 18/09/09(RYL BK SCOT)GBX100,"
"SB48 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 20/03/09(SAINSBURY(J))GBX325,"
"SB49 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 19/06/09(SAINSBURY(J))GBX350,"
"SB50 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 18/09/09(SAINSBURY(J))GBP375,"
"SB52 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 18/09/09(SAINSBURY(J))GBX200,"
"SB53 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 20/3/09(RYL DUTCH SHL B)GBX1900,"
"SB55 societe generale acceptance nv call wts 15/9/06shp e0.1 gbx750 c,"
"SB67 societe generale acceptance nv put wts 15/9/06blt e0.1 gbx900 c,"
"SB68 societe generale acceptance nv call wts 15/9/06anto e0.1 gbx1800 c,"
"SB72 societe generale acceptance nv put wts 15/9/06mks e1 gbx500c,"
"SB76 societe generale acceptance nv call wts 15/9/06bay e1 gbx400 c,"
"SB78 societe generale acceptance nv call wts 15/9/06bsy e0.1 gbx600 c,"
"SB79 societe generale acceptance nv call wts 15/9/06emg e0.1 gbx1900 c,"
"SB83 societe generale acceptance nv call wts 15/9/06ba e1 gbx375 c,"
"SB87 societe generale acceptance nv call wts 15/9/06rbs e0.1 gbx1800 c,"
"SB93 societe generale acceptance nv call wts 15/9/06wmh e0.1 gbx525 c,"
"SBD Songbird Estates Plc,"
"SBER Sberbank Of Russia,"
"SBID State Bank Of India,"
"SBLM Sable Mining Africa Ld,"
"SBRT ETFS Commodity Securities Limited,"
"SBRY Sainsbury [J] Plc,"
"SBS Source Bioscience Plc,"
"SBSA Skipton Building Society,"
"SBSB Skipton Building Society,"
"SBUL ETFS Commodity Securities Limited,"
"SC01 societe generale acceptance nv call wts 11/5/06cq56 e0.1 usd70 c,"
"SC08 societe generale acceptance nv call wts 17/3/06f100 e0.001 gbp5725 c,"
"SC11 societe generale acceptance nv call wts 15/12/06f100 e0.001 gbp6225 c,"
"SC13 societe generale acceptance nv call wts 15/12/06dj30 e0.001 usd13000 c,"
"SC17 societe generale acceptance nv call wts 15/12/06sx50 e0.01 usd4000 c,"
"SC22 societe generale acceptance nv put wts 19/6/06mcum6 e0.001 usd4250 c,"
"SC23 societe generale acceptance nv call wts 15/12/06s946 e0.01 usd1000 c,"
"SC25 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 19/06/09(FTSE100 IDX) GBP3800,"
"SC30 societe generale acceptance nv call wts 15/09/06rio e0.1 gbx3000 c,"
"SC31 societe generale acceptance nv put wts 15/09/06rio e0.1 gbx2800 c,"
"SC40 societe generale acceptance nv CALL WTS 15/9/06AZN E0.1 GBX3000 C,"
"SC41 societe generale acceptance nv PUT WTS 15/9/06AZN E0.1 GBX2600 C,"
"SC43 societe generale acceptance nv CALL WTS 15/9/06BARC E1 GBX750 C,"
"SC45 societe generale acceptance nv CALL WTS 15/9/06BG. E1 GBX650 C,"
"SC46 societe generale acceptance nv CALL WTS 15/9/06BG. E1 GBX750 C,"
"SC49 societe generale acceptance nv CALL WTS 15/9/06BP. E1 GBX750 C,"
"SC53 societe generale acceptance nv put wts 15/9/06bt. e1 gbx220 c,"
"SC57 societe generale acceptance nv CALL WTS 15/9/06HSBA E0.1 GBX1100 C,"
"SC74 societe generale acceptance nv PUT WTS 15/9/06STAN E0.1 GBX1400 C,"
"SC78 societe generale acceptance nv CALL WTS 15/12/06DJ30 E0.001 USD11000 C,"
"SC90 societe generale acceptance nv call wts 15/12/06gsp e0.01 usd700 c,"
"SC91 societe generale acceptance nv put wts 15/12/06gsp e0.01 usd550 c,"
"SC92 societe generale acceptance nv call wts 15/12/06silv e1 usd13 c,"
"SC94 societe generale acceptance nv call wts 15/11/06coz6 e0.1 usd70 c,"
"SCAD ETFS Foreign Exchange Limited,"
"SCAM Scottish American Investment Co. Plc,"
"SCAN Ishares III Plc,"
"SCDN FTSE Developed Small Cap,"
"SCDP ETFS Foreign Exchange Limited,"
"SCE Surface Transforms Plc,"
"SCF Schroder Income Growth Fund Plc,"
"SCFE ETFS Commodity Securities Limited,"
"SCH Safecharge International,"
"SCHF ETFS Foreign Exchange Limited,"
"SCHO Scholium Group Plc,"
"SCHP ETFS Foreign Exchange Limited,"
"SCIN Scottish Investment Trust Plc,"
"SCL Schlumberger Ld,"
"SCLP Scancell Holdings Plc,"
"SCNY ETFS Foreign Exchange Limited,"
"SCOC ETFS Commodity Securities Limited,"
"SCOP ETFS Commodity Securities Limited,"
"SCOR ETFS Commodity Securities Limited,"
"SCOV Ishares III Plc,"
"SCP Schroder UK Mid Cap Fund Plc,"
"SCPA Scapa Group Plc,"
"SCTO ETFS Commodity Securities Limited,"
"SCYP ETFS Foreign Exchange Limited,"
"SD05 societe generale acceptance nv put wts 15/12/06 cuz6 e0.001 gbx5000 c,"
"SD11 FTSE Dev Small Cap ex US Index,"
"SD12 FTSE Dev Small Cap ex North Amercia Inde,"
"SD13 FTSE Dev Europe Small Cap Index,"
"SD23 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 18/12/09(LAND SECS)GBX1400,"
"SD24 societe generale acceptance nv call wts 15/09/06cne e0.1 gbx2100 c,"
"SD34 societe generale acceptance nv CALL WTS 15/12/06SILV E1 USD15 C,"
"SD36 societe generale acceptance nv CALL WTS 15/12/06N225 E0.1 JPY18000 C,"
"SD41 societe generale acceptance nv CALL WTS 15/12/06AAPL E0.1 USD80 C,"
"SD47 societe generale acceptance nv call wts 16/05/07com7 e0.1 usd100 c,"
"SD49 societe generale acceptance nv call wts 15/06/07cum7 e0.001 usd10000 c,"
"SD52 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 18/09/09(RYL DUT SHL B)GBX1800,"
"SD62 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 15/12/06N100 E0.01 USD1400 C,"
"SD73 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07ANTO E1 GBX425 C,"
"SD74 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07ANTO E1 GBX475 C,"
"SD77 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07ARM E1 GBX120 C,"
"SD82 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07BA. E1 GBX400 C,"
"SD95 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07BAY E1 GBX450 C,"
"SDEU Ishares V Public Limited Company,"
"SDHG Ishares IV Plc,"
"SDHY Ishares IV Plc,"
"SDI Scientific Digital Imaging Plc,"
"SDIG Ishares IV Plc,"
"SDL Sdl Plc,"
"SDM Stadium Group Plc,"
"SDP Schroder Asiapacific Fund Plc,"
"SDR Schroders Plc,"
"SDRC Schroders Plc,"
"SDU Schroder UK Growth Fund Plc,"
"SDV Small Companies Dividend Trust Plc,"
"SDVZ Small Companies Zdp Plc,"
"SDY Speedy Hire Plc,"
"SE02 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07BLND E0.1 GBX1500 C,"
"SE03 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07BSY E0.1 GBX500 C,"
"SE12 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 15/12/06F100 E0.001 GBP5900 C,"
"SE15 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07GSK E0.1 GBX1500 C,"
"SE18 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07HBOS E0.1 GBX900 C,"
"SE21 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07HSBA E0.1 GBX1100 C,"
"SE24 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 19/12/08ALBK E0.1 EUR14 C,"
"SE25 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07LAND E0.1 GBX1800 C,"
"SE27 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07LLOY E1 GBX500 C,"
"SE30 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07LOG E1 GBX160 C,"
"SE51 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07RBS E0.1 GBX1900 C,"
"SE56 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07SBRY E1 GBX320 C,"
"SE58 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07SHP E0.1 GBX750 C,"
"SE59 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07SHP E0.1 GBX900 C,"
"SE60 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07SMIN E0.1 GBX850 C,"
"SE61 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07SMIN E0.1 GBX1000 C,"
"SE67 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07ULVR E0.1 GBX1400 C,"
"SE68 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 18/03/11(TESCO)GBP4.5,"
"SE70 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 17/12/10(TESCO)GBP4,"
"SE72 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 16/3/07WHH E0.1 GBX700 C,"
"SE77 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 16/03/07VOD E1 GBX110 C,"
"SE78 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 15/06/07DJ30 E0.001 USD11000 C,"
"SE79 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 15/06/07DJ30 E0.001 USD13000 C,"
"SE80 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 15/06/07DJ30 E0.001 USD11000 C,"
"SE82 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 15/06/07N100 E0.01 USD1800 C,"
"SE83 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 15/06/07N100 E0.01 USD1500 C,"
"SE84 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 8/6/07N225 E0.1 JPY15000 C,"
"SE86 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 8/6/07N225 E0.1 JPY15000 C,"
"SE87 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 15/06/07GSP E0.01 USD600 C,"
"SEA Seaenergy Plc,"
"SEAG Ishares III Plc,"
"SEC Strategic Equity Capital Plc,"
"SEDY Ishares V Public Limited Company,"
"SEE Seeing Machines Limited,"
"SEED Barclays Bank Plc,"
"SEGA Ishares III Plc,"
"SEKP ETFS Foreign Exchange Limited,"
"SEMA Ishares III Plc,"
"SEMB Ishares II Plc,"
"SEML Ishares III Plc,"
"SEMS Ishares III Plc,"
"SEP Standard Life European Private Equity TR,"
"SEPU Sepura Plc,"
"SER Sefton Resources Inc.,"
"SERV Servelec Group Plc,"
"SESP Ishares V Public Limited Company,"
"SEU3 ETFS FOREIGN EXCHANGE LTD ETFS 3X SHORT EUR LONG USD,"
"SEUA Ishares III Plc,"
"SEUC SSGA SPDR ETFS Europe I,"
"SEUE SSGA SPDR ETFS Europe I,"
"SEUP ETFS Foreign Exchange Limited,"
"SEUR ETFS Foreign Exchange Limited,"
"SEV Servision Plc,"
"SEY Sterling Energy Plc,"
"SFE Safestyle UK Plc,"
"SFI Sagicor Financial Corporation,"
"SFIN Ishares V Public Limited Company,"
"SFR Severfield-Rowen Plc,"
"SFRB Ishares V Public Limited Company,"
"SG01 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 15/12/06VOD E1 GBX50 C,"
"SG02 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 14/06/10 COC1 E1 USD0 C,"
"SG04 societe generale acceptance nv call wts 08/12/08gsp e1 gbx,"
"SG06 societe generale acceptance nv call wts 15/09/06que6 e1 gbx0 c,"
"SG09 societe generale acceptance nv cert 20/04/07pru e1 gbx680 c,"
"SG10 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 30/06/16MAPT E1 GBP C,"
"SG7R SOCIETE GENERALE ACCEPTANCE NV REV CONV CERT 07/01/15(FTSE 100 IDX)GBP,"
"SG93 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 11/11/16(FTSE 100 IDX)GBP0.001,"
"SGAS ETFS Commodity Securities Limited,"
"SGB3 ETFS FOREIGN EXCHANGE LTD ETFS 3X SHORT GBP LONG USD,"
"SGBP ETFS Foreign Exchange Limited,"
"SGBS ETFS Metal Securities Ld,"
"SGC Stagecoach Group Plc,"
"SGCC Ishares III Plc,"
"SGE Sage Group Plc,"
"SGEA Ishares III Plc,"
"SGGD SURGUTNEFTEGAZ ADR EACH REPR 50 ORD,"
"SGI Stanley Gibbons Group Plc,"
"SGIL Ishares III Plc,"
"SGLD Source Physical Markets Plc,"
"SGLN Ishares Physical Metals Plc,"
"SGLO Ishares III Plc,"
"SGLP Source Physical Markets Plc,"
"SGM Sigma Capital Group Plc,"
"SGP Supergroup Plc,"
"SGQD Multi Units Luxembourg,"
"SGQE Multi Units Luxembourg,"
"SGQG Multi Units Luxembourg,"
"SGQI Sga Societe Generale Acceptance N.V.,"
"SGQL Multi Units Luxembourg,"
"SGQP Multi Units Luxembourg,"
"SGR Shore Capital Group Limited,"
"SGRA ETFS Commodity Securities Limited,"
"SGRO Segro Plc,"
"SGZ Scotgold Resources Limited,"
"SHB Shaftesbury Plc,"
"SHEA ETFS Commodity Securities Limited,"
"SHFT Shaft Sinkers Holdings Plc,"
"SHG Shanta Gold Limited,"
"SHI Sig Plc,"
"SHIP Etfx Fund Company Plc,"
"SHOK Shellshock Limited,"
"SHP Shire Plc,"
"SHPP Etfx Fund Company Plc,"
"SHRE Share Plc,"
"SHRS Shires Income Plc,"
"SHYG Ishares Plc,"
"SHYU Ishares II Plc,"
"SIA Soco International Plc,"
"SIE Siemens Ag,"
"SIG Signet Jewelers Limited,"
"SIGB Sherborne Investors (Gue,"
"SIHL Symphony International Holdings Ld,"
"SILE UBS Ag,"
"SILG UBS Ag,"
"SILU UBS Ag,"
"SIM Simigon Ltd.,"
"SIME ETFS Commodity Securities Limited,"
"SINP ETFS Foreign Exchange Limited,"
"SINR ETFS Foreign Exchange Limited,"
"SIS Science In Sport Plc,"
"SITB Ishares V Public Limited Company,"
"SIV St. Ives Plc,"
"SIXH 600 Group Plc,"
"SJG Schroder Japan Growth Fund Plc,"
"SJNK SSGA SPDR ETFS Europe I,"
"SJP3 ETFS FOREIGN EXCHANGE LTD ETFS 3X SHORT JPY LONG USD,"
"SJPA Ishares III Plc,"
"SJPN FTSE Shariah Japan 100 Index,"
"SJPNU FTSE Japan 100 Shariah Index USD,"
"SJPP ETFS Foreign Exchange Limited,"
"SJPY ETFS Foreign Exchange Limited,"
"SKG Smurfit Kappa Group Plc,"
"SKGB ETFS Foreign Exchange Limited,"
"SKIP Skipton Building Society,"
"SKMD SK TELECOM ADR EACH REP 1/9 KRW500(CIT)SPONS,"
"SKP Skyepharma Plc,"
"SKR Sunkar Resources Plc,"
"SKS Shanks Group Plc,"
"SL STANDARD LIFE PLC ORD GBP0.10,"
"SLCT ETFS Commodity Securities Limited,"
"SLE San Leon Energy Plc,"
"SLEA ETFS Commodity Securities Limited,"
"SLED LEBANESE CO FOR DEV&REC OF BEIRUT GDS EACH REP 1 USD10'A'(REG S),"
"SLES Standard Life Equity Income Trust Plc,"
"SLET Standard Life Equity Income Trust Plc,"
"SLHO ETFS Commodity Securities Limited,"
"SLI Standard Life Investments Property Incom,"
"SLN Silence Therapeutics Plc,"
"SLNG Slingsby [H.C.] Plc,"
"SLP Sylvania Platinum Limited,"
"SLS Standard Life UK Smaller Companies Trust,"
"SLSC Standard Life UK Smaller Companies Trust,"
"SLST ETFS Commodity Securities Limited,"
"SLVE Societe Generale Effekten Gmbh,"
"SLVG Societe Generale Effekten Gmbh,"
"SLVR ETFS Commodity Securities Limited,"
"SLVU Societe Generale Effekten Gmbh,"
"SLXH Ishares Plc,"
"SLXX Ishares Plc,"
"SM13 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 19/12/08 STAN E0.1 GBX1800 C,"
"SM29 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 19/12/08 F100 E0.001 GBP6600 C,"
"SM46 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 20/6/08BARC E1 GBX500 C,"
"SMA Sovereign Mines of Africa Plc,"
"SMDR Salamander Energy Plc,"
"SMDS Smith [Ds] Plc,"
"SMEA Ishares III Plc,"
"SMEX Ishares Vi Plc [The Company],"
"SMIF Twentyfour Select Monthl,"
"SMIN Smiths Group Plc,"
"SMJ Smart [J.] & Co. [Contractors] Plc,"
"SML Strategic Minerals Plc,"
"SMP St.Modwen Properties Plc,"
"SMS Smart Metering Systems Plc,"
"SMSD Samsung Electronics Co L,"
"SMSN Samsung EL.Gdr,"
"SMT Scottish Mortgage Investment Trust Plc,"
"SMTG Summit Germany Limited,"
"SMWH Wh Smith Plc,"
"SMX FTSE Smallcap,"
"SMXX FTSE Smallcap [Exit],"
"SN Smith & Nephew,"
"SNAK Snacktime Plc,"
"SNCL Sinclair [William] Holdings Plc,"
"SND Sanderson Group Plc,"
"SNEY ETFS Commodity Securities Limited,"
"SNG Synairgen Plc,"
"SNGA ETFS Commodity Securities Limited,"
"SNIK ETFS Commodity Securities Limited,"
"SNLD Ishares V Public Limited Company,"
"SNOK ETFS Foreign Exchange Limited,"
"SNOP ETFS Foreign Exchange Limited,"
"SNP CHINA PETROLEUM & CHEMICAL CORP ADS EACH REP 100`H`SHS CNY1,"
"SNR Senior Plc,"
"SNRG ETFS Commodity Securities Limited,"
"SNRP Strategic Natural Resources Plc,"
"SNT Sabien Technology Group Plc,"
"SNTY Synety Group Plc,"
"SNX Synectics Plc,"
"SNZD ETFS Foreign Exchange Limited,"
"SNZP ETFS Foreign Exchange Limited,"
"SOFF ETFS Commodity Securities Limited,"
"SOFT Barclays Bank Plc,"
"SOG Statpro Group Plc,"
"SOI Schroder Oriental Income Fund Limited,"
"SOIL ETFS Commodity Securities Limited,"
"SOLG Solgold Plc,"
"SOLO Solo Oil Plc,"
"SOM Somero Enterprise Inc.,"
"SON Sony Corporation,"
"SORB Sorbic International Plc,"
"SOU Sound Oil Plc,"
"SOYB ETFS Commodity Securities Limited,"
"SOYO ETFS Commodity Securities Limited,"
"SPA 1Spatial Plc,"
"SPAG Ishares V Public Limited Company,"
"SPAL Source Physical Markets Plc,"
"SPD Sports Direct International Plc,"
"SPDI Spdi Secure Property Dev,"
"SPDM Ishares Physical Metals Plc,"
"SPE Sopheon Plc,"
"SPET ETFS Commodity Securities Limited,"
"SPGH Superglass Holdings Plc,"
"SPGP Ishares V Public Limited Company,"
"SPGS Barclays Bank Plc,"
"SPH Sinclair Is Pharma Plc,"
"SPHR Sphere Medical Holding Plc,"
"SPK Spark Ventures Plc,"
"SPL Skil Ports & Logistics Limited,"
"SPLA ETFS Commodity Securities Limited,"
"SPLT Ishares Physical Metals Plc,"
"SPMT ETFS Commodity Securities Limited,"
"SPMV Ishares Vi Plc (The Comp,"
"SPO Sportech Plc,"
"SPOG Ishares V Public Limited Company,"
"SPOL Ishares V Public Limited Company,"
"SPPC ST Peter Port Capital Limited,"
"SPPT Source Physical Markets Plc,"
"SPR Sperati [C.A.] [Special Agency],"
"SPRT Spirit Pub Company Plc,"
"SPSC Spectra Systems Corporation,"
"SPSM Sports Stars Media Plc,"
"SPSY Spectra Systems Corporation,"
"SPT Spirent Communications Plc,"
"SPX Spirax-Sarco Engineering Plc,"
"SPXJ Ishares III Plc,"
"SPXS Source Markets Public Limited Company,"
"SQS Sqs Software Quality Systems Ag,"
"SQZ Serica Energy Plc,"
"SRB Serabi Gold Plc,"
"SRC Sarossa Capital Plc,"
"SRE Sirius Real Estate Ld,"
"SREI Schroder Real Estate Investment Trust Li,"
"SRES Sunrise Resources Plc,"
"SRG Security Research Group,"
"SRO Spitfire Oil Limited,"
"SRP Serco Group Plc,"
"SRSA Ishares III Plc,"
"SRSP Sirius Petroleum Plc,"
"SRT Software Radio Technology Plc,"
"SRX Sierra Rutile Limited,"
"SS03 FTSE Global Small Cap ex US Index,"
"SS07 FTSE Europe Small Cap Index,"
"SS08 FTSE Europe Small Cap ex UK Index,"
"SS09 FTSE Asia Pacific Small Cap Index,"
"SSA SISTEMA JSFC GDR EACH REPR 1/50 RUB90 REG`S`,"
"SSAC Ishares V Public Limited Company,"
"SSAM Ishares V Public Limited Company,"
"SSE Sse Plc,"
"SSEK ETFS Foreign Exchange Limited,"
"SSEP ETFS Foreign Exchange Limited,"
"SSFT ETFS Commodity Securities Limited,"
"SSHY Pimco Fixed Income Sourc,"
"SSIL ETFS Commodity Securities Limited,"
"SSLN Ishares Physical Metals Plc,"
"SSLV Source Physical Markets Plc,"
"SSOB ETFS Commodity Securities Limited,"
"SSP Solid State Plc,"
"SST Scottish Oriental Smaller Companies Trus,"
"SSUG ETFS Commodity Securities Limited,"
"SSXF Ishares III Plc,"
"SSY Scisys Plc,"
"SSYO ETFS Commodity Securities Limited,"
"STAA Multi Units France,"
"STAB Standard Chartered Plc,"
"STAC Standard Chartered Plc,"
"STAF Staffline Group Plc,"
"STAG Multi Units Luxembourg,"
"STAN Standard Chartered Plc,"
"STAR Starcom Plc,"
"STAW Multi Units Luxembourg,"
"STB Secure Trust Bank Plc,"
"STCK Stock Spirits Group Plc,"
"STCM Steppe Cement Ltd,"
"STE Stewart & Wight Plc,"
"STEL Stellar Diamonds Plc,"
"STG Stellar Resources Plc,"
"STGR Stratmin Global Resources Plc,"
"STHE Pimco Fixed Income Sourc,"
"STHR Sthree Plc,"
"STHY Pimco Fixed Income Source ETFS Plc,"
"STI Stratex International Plc,"
"STIM ETFS Commodity Securities Limited,"
"STJ St. James's Place Plc,"
"STL Stilo International Plc,"
"STM Stm Group PC,"
"STOB Stobart Group Ld,"
"STS Securities Trust of Scotland Plc,"
"STT Straight Plc,"
"STVG Stv Group Plc,"
"STY Styles & Wood Group Plc,"
"SU03 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 19/12/08(APPLE INC)USD110,"
"SU07 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 18/06/10(HANG SENG)HKD12000,"
"SU10 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 18/06/10(NASDAQ 100)USD1400,"
"SU12 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 19/12/08(IBM CORP)USD100,"
"SUAG Ishares II Plc,"
"SUBX SUBEX AZURE LTD GDR EACH REPR 1 ORD `REG S`,"
"SUEL SUZLON ENERGY LTD GDR EACH REP 4 ORD REG`S WI,"
"SUGA ETFS Commodity Securities Limited,"
"SUGE UBS Ag,"
"SUGG UBS Ag,"
"SUGU UBS Ag,"
"SUH Sutton Harbour Holdings Plc,"
"SUK2 ETFS FUND COMPANY PLC FTSE`100`SUPER SHORT STRAT`2X`FD SHS GBP,"
"SUKC SSGA SPDR ETFS Europe II,"
"SULA Sula Iron & Gold Plc,"
"SUMM Summit Corporation Plc,"
"SUN Surgical Innovations Group Plc,"
"SUP3 ETFS FOREIGN EXCHANGE LTD ETFS 3X SHORT EUR LONG GBP,"
"SUS S & U Plc,"
"SUSC SSGA SPDR ETFS Europe I,"
"SUSD SSGA SPDR ETFS Europe I,"
"SVCA Servoca Plc,"
"SVE Starvest Plc,"
"SVI Svg Capital Plc,"
"SVM Svm UK Emerging Fund Plc,"
"SVO Serviced Office Group Plc,"
"SVR Servicepower Technologies Plc,"
"SVS Savills Plc,"
"SVST Oao Severstal,"
"SVT Severn Trent Plc,"
"SVTL Severn Trent Plc,"
"SW98 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 18/06/10(EUROSTOXX 50)EUR2500,"
"SWALLE FTSE Shariah Emerging Index,"
"SWAP Moneyswap Plc,"
"SWCHN FTSE Shariah China Index,"
"SWDA Ishares III Plc,"
"SWDEURS FTSE Shariah Developed Europe Index,"
"SWDPAC FTSE Shariah Developed Asia Pacific,"
"SWDPACXJ FTSE Shariah Developed Asia Pacific Ex J,"
"SWDXUS FTSE Shariah Developed Ex US Index,"
"SWEA ETFS Commodity Securities Limited,"
"SWEF Starwood European Real E,"
"SWIND FTSE Shariah India Index,"
"SWJ Swan [John] & Sons Plc,"
"SWL Swallowfield Plc,"
"SWORLDS FTSE Shariah All-World Index,"
"SWP Swp Group Plc,"
"SWPACXJA FTSE Shariah Asia Pacific Ex Japan Index,"
"SWPXJAN FTSE Shariah Asia-Pacific,"
"SWUSA FTSE Shariah USA Index,"
"SXFN Ishares II Plc,"
"SXS Spectris Plc,"
"SXX Sirius Minerals Plc,"
"SY37 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 17/09/10(FTSE 100)GBP5300,"
"SY45 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 17/12/10(FTSE 100)GBP4600,"
"SY48 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 17/09/10(GOLD SPOT)USD1200,"
"SY65 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 17/09/10(BARCLAYS)GBP3.25,"
"SY68 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 18/06/10(BG GRP)GBP12,"
"SY69 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 17/12/10(BG GRP)GBP10,"
"SY70 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 17/12/10(BHP BILLITON)GBP22,"
"SY71 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 17/12/10(BHP BILLITON)GBP24,"
"SY72 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 17/12/10(BHP BILLITON)GBP20,"
"SY78 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 17/06/11(DIAGEO)GBP13,"
"SY86 SOCIETE GENERALE ACCEPTANCE NV PUT WTS 17/12/10(HSBC HLDGS)GBP6.5,"
"SY90 SOCIETE GENERALE ACCEPTANCE NV CALL WTS 17/12/10(LLOYDS BKG GRP)GBP0.6,"
"SYG Speymill Plc,"
"SYM Symphony Environmental Technologies Plc,"
"SYNT Synthomer Plc,"
"SYP3 ETFS FOREIGN EXCHANGE LTD ETFS 3X SHORT JPY LONG GBP,"
"SYQ Syqic Plc,"
"SYR Synergy Health Plc,"
"SZIC ETFS Commodity Securities Limited,"
"T16 TREASURY 4% STK 7/09/2016,"
"T17 TREASURY 1.25% IDX-LKD GILT 2017,"
"T18 TREASURY 5% TSY GILT 07/03/18 GBP,"
"T19 TREASURY 4.5% GILT 07/03/2019 GBP0.01,"
"T1X FTSE TechMark 100,"
"T22 TREASURY 1.875% IDX LKD TSY GILT 22/11/22 GBP,"
"T24I TREASURY 2 1/2% INDEX-LINKED STK 2024,"
"T27 TREASURY 1.25% INDEX-LINKED STK 2027,"
"T2H TREASURY 2 1/2% STK(1975 OR AFTER),"
"T2HI TREASURY 2 1/2% INDEX-LINKED STK 2020,"
"T2IL TREASURY 2% INDEX-LINKED STK 2035,"
"T30I TREASURY 4 1/8% INDEX-LINKED STK 2030,"
"T32 TREASURY 1.25% IDX-LKD GILT 2032 GBP0.01,"
"T39 TREASURY 4.25%TSY GILT 7/9/39 GBP0.01,"
"T3UD TREASURY 3% STK,"
"T40 TREASURY 4.25% GILT 07/12/40,"
"T42 TREASURY 4.5% TSY GILT 7/12/42 GBP,"
"T42A TREASURY 0.625% IDX-LKD GILT 22/11/42,"
"T46 TREASURY 4.25% TREASURY GILT 7/12/46,"
"T47 TREASURY 0.75% IDX LKD TSY GILT 22/11/47 GBP,"
"T49 TREASURY 4.25% GILT 07/12/49 GBP0.01,"
"T4Q TREASURY 4 1/4% STK 2036,"
"T4T TREASURY 4 3/4% STK 2015,"
"T514 TREASURY 5% STK 2014,"
"TAIH Taihua Plc,"
"TAL Ten Alps Plc,"
"TALK Talktalk Telecom Group Plc,"
"TALV Talvivaara Mining Company Plc,"
"TAN Tanfield Group Plc,"
"TAST Tasty Plc,"
"TASX FTSE Techmark Allshare,"
"TATE Tate & Lyle Plc,"
"TAU Tau Capital Plc,"
"TAVI Tavistock Investments Pl,"
"TAW Tawa Plc,"
"TCA Terra Capital Plc,"
"TCF Terra Catalyst Fund,"
"TCG Thomas Cook Group Plc,"
"TCM Telit Communications Plc,"
"TCN Tricorn Group Plc,"
"TCSA Tcs Group Holding Plc,"
"TCSC Town Centre Securities Plc,"
"TCT Cayenne Trust Plc [The],"
"TCY Telecity Group Plc,"
"TDE Telefonica Sa,"
"TECZ Telefonica Czech Republi,"
"TED Ted Baker Plc,"
"TEEG Telecom Egypt S.A.E.,"
"TEF Telford Homes Plc,"
"TEG Teg Group [The] Plc,"
"TEIF Tamar European Industrial Fund Ld,"
"TEK Telepizza Sa,"
"TELG Multi Units Luxembourg,"
"TELW Multi Units Luxembourg,"
"TEM Templeton Emerging Markets Investment TR,"
"TEP Telecom Plus Plc,"
"TERN Tern Plc,"
"TET Treatt Plc,"
"TFIF Twentyfour Income Fund L,"
"TFW Thorpe [F.W.] Plc,"
"TGBD Turkiye Garanti Bankasi,"
"TGL Touchstone Gold Limited,"
"THA Multi Units France,"
"THAG Multi Units France,"
"THAL Thalassa Holdings Limited,"
"THG Terrace Hill Group Plc,"
"THR Thor Mining Plc,"
"THRG Throgmorton Trust Plc,"
"THRL Target Healthcare REIT L,"
"THT Thorntons Plc,"
"TIDE Crimson Tide Plc,"
"TIG Innovation Group Plc,"
"TIGT Troy Income & Growth Trust Plc,"
"TINM ETFS Commodity Securities Limited,"
"TIR Tiger Resource Finance Plc,"
"TKID TELEKOMUNIKASI INDONESIA(PERSERO) ADS-EACH REPR 40 SER`B`INR250,"
"TLA Tla Worldwide Plc,"
"TLDH Top Level Domain Holdings Limited,"
"TLI Alternative Asset Opportunities Pcc Ltd,"
"TLPR Tullett Prebon Plc,"
"TLW Tullow Oil Plc,"
"TLY Totally Plc,"
"TMK Torchmark Corporation,"
"TMKS Oao Tmk,"
"TMMG The Mission Marketing Group Plc,"
"TMPL Temple Bar Investment Trust Plc,"
"TMS1 FTSE techMARK mediscience Index,"
"TMT Tmt Investments Plc,"
"TMZ Toumaz Ld,"
"TNCI Tinci Holdings Limited,"
"TND Tandem Group Plc,"
"TNG Tangent Communications Plc,"
"TNI Trinity Mirror Plc,"
"TNOA Multi Units France,"
"TNOG Multi Units Luxembourg,"
"TNOW Multi Units Luxembourg,"
"TOM Tomco Energy Plc,"
"TON Titon Holdings Plc,"
"TOPC Top Creation Investments Limited,"
"TOS Toshiba Corporation,"
"TOT Total Produce Plc,"
"TPF Taliesin Property Fund Limited,"
"TPFZ Taliesin Property Fund L,"
"TPJ Triple Plate Junction Plc,"
"TPK Travis Perkins Plc,"
"TPL Tethys Petroleum Limited,"
"TPOE Third Point Offshore Investors Limited,"
"TPOG Third Point Offshore Investors Limited,"
"TPOU Third Point Offshore Investors Limited,"
"TPS Turbo Power Systems Inc,"
"TPT Topps Tiles Plc,"
"TR15 TREASURY 2.75% GILT 22/01/15 GBP`WI`,"
"TR16 TREASURY 2 1/2% INDEX-LINKED STK 2016,"
"TR17 TREASURY 8 3/4% STK 2017,"
"TR19 TREASURY 3.75% GILT 07/09/19 GBP0.01,"
"TR20 TREASURY 3.75% GILT 2020 GBP0.01,"
"TR21 TREASURY 8% STK 2021,"
"TR22 TREASURY 4% TSY GILT 2022 GBP0.01(WI)(FEB),"
"TR25 TREASURY 5% STK 2025,"
"TR27 TREASURY 4.25% STK 7/12/2027,"
"TR28 TREASURY 6% STK 2028,"
"TR30 TREASURY 4.75% TREASURY GILT 07/12/30 GBP,"
"TR32 TREASURY 4 1/4% STK 2032,"
"TR34 TREASURY 4.5% GILT 7/9/2034 GBP0.01,"
"TR37 TREASURY 1.125% IDX-LKD GILT 22/11/37,"
"TR38 TREASURY 4 3/4% LN STK 07/12/38,"
"TR40 TREASURY 0.625% IDX-LKD GILT 22/3/40 GBP0.01,"
"TR4Q TREASURY 4.25% GILT 07/12/55 GBP0.01,"
"TR50 TREASURY 0.5% IDX LKD GILT 22/3/50 GBP0.01,"
"TR60 TREASURY 4% GILT 22/1/2060 GBP0.01,"
"TR8F TREASURY 1.25% IDX-LKD TSY 2055 GBP0.01,"
"TRAF Trafalgar New Homes Plc,"
"TRAK Trakm8 Holdings Plc,"
"TRAP Trap Oil Group Plc,"
"TRB Tribal Group Plc,"
"TRC Trinity Capital Plc,"
"TRCN TRANSCONTAINER OJSC GDR EACH REP 1/10 ORD REG`S WI,"
"TRCS Tracsis Plc,"
"TRD Triad Group Plc,"
"TRE Trading Emissions Plc,"
"TREE Cambium Global Timberland Limited,"
"TRG TR European Growth Trust Plc,"
"TRGC The Renewables Infrastru,"
"TRI Trifast Plc,"
"TRIC Tricor Plc,"
"TRIG The Renewables Infrastru,"
"TRIN Trinity Exploration & Pr,"
"TRK Torotrak Plc,"
"TRP Tower Resources Plc,"
"TRS Tarsus Group Plc,"
"TRSY SSGA SPDR ETFS Europe I Plc,"
"TRT Transense Technologies Plc,"
"TRTQ United Kingdom,"
"TRV Treveria Plc,"
"TRX Tissue Regenix Group Plc,"
"TRY TR Property Investment Trust Plc,"
"TS16 TREASURY 2% GILT 22/01/16 GBP0.01,"
"TS20 TREASURY 4 3/4% STK 2020,"
"TS52 TESCO PERSONAL FINANCE PLC 5.2% STG BDS  24/08/18 GBP100 WI,"
"TSCO Tesco Plc,"
"TSG Trans-Siberian Gold Plc,"
"TSTL Tristel Plc,"
"TSTR Tri-Star Resources Plc,"
"TT TUI TRAVEL PLC ORD GBP0.10,"
"TTA Total S.A.,"
"TTG Tt Electronics Plc,"
"TTR 32Red Plc,"
"TTST TATA STEEL GDR EACH REPR 1 ORD SH`REG S` WI,"
"TUNG Tungsten Corporation Plc,"
"TURL Lyxor International Asse,"
"TURU Lyxor International Asse,"
"TVCH Tvc Holdings Plc,"
"TW Taylor Wimpey,"
"TW50 FTSE TSEC Taiwan 50 Index,"
"TW50U FTSE TSEC Taiwan 50 Index,"
"TWDP Tsec Taiwan Dividend,"
"TWEI Tsec Taiwan Eight Industries,"
"TWND Lyxor International Asse,"
"TWNL Lyxor International Asse,"
"TWSH Tsec Taiwan Shariah Index,"
"TWTECH Tsec Taiwan Technology,"
"TXH Tex Holdings Plc,"
"TXO Txo Plc,"
"TY8 TREASURY 8% STK 2015,"
"TYM Tertiary Minerals Plc,"
"TYMN Tyman Plc,"
"TYR Tyratech Inc,"
"TYRU Tyratech Inc,"
"TYT Toyota Motor Corporation,"
"UAV Unicorn Aim Vct Plc,"
"UB65 UBS ETF UBS ETF Stoxx Global Rare Earth,"
"UBI Ubisense Group Plc,"
"UBM Ubm Plc,"
"UCG United Carpets Group Plc,"
"UCP Unitech Corporate Parks Plc,"
"UDG United Drug Plc,"
"UDVD SSGA SPDR ETFS Europe I Plc,"
"UEM Utilico Emerging Markets Limited,"
"UEN Urals Energy Public Company Limited,"
"UEP Umc Energy Plc,"
"UGAS ETFS Commodity Securities Limited,"
"UGNA Epra/Nareit North America Index [Usd],"
"UJO Union Jack Oil Plc,"
"UKAG SSGA SPDR ETFS Europe I Plc,"
"UKCM UK Commercial Property Trust Ld,"
"UKCO SSGA SPDR ETFS Europe I Plc,"
"UKDV SSGA SPDR ETFS Europe I Plc,"
"UKE UK Enhanced Income,"
"UKM UK Mail Group Plc,"
"UKMV Ossiam Lux,"
"UKOG UK Oil & Gas Investments,"
"UKR Ukrproduct Group Limited,"
"UKRO Ukraine Opportunity Trust Plc,"
"UKT UK Select Trust Ld,"
"UKW Greencoat UK Wind Plc,"
"UKX FTSE 100,"
"UKXDUK FTSE 100 Total Return Declared Dividend,"
"UKXEQ FTSE 100 Equally Index,"
"UKXMV FTSE 100 Minimum Variance Index,"
"UKXNUK FTSE 100 Net Dividend Index,"
"UKXSP FTSE 100 Expiry Index,"
"ULE Ultra Electronics Holdings Plc,"
"ULT Ultrasis Plc,"
"ULVR Unilever Plc,"
"UNG Universe Group Plc,"
"UNGL Epra/Nareit Global Index [Usd],"
"UNUS Epra United States Index,"
"UPRA Epra Europe Index [Usd],"
"URA Uranium Resources Plc,"
"URGB ETFS Foreign Exchange Limited,"
"URKA URALKALI JSC GDR EACH REPR 5 ORD  `REGS`,"
"URU Uru Metals Limited,"
"US10 MULTI UNITS FRANCE LYXOR ETF IBOXX USD TREASURIES 10Y+,"
"US13 MULTI UNITS FRANCE LYXOR ETF IBOXX USD TREASURIES 1-3Y,"
"US57 MULTI UNITS FRANCE LYXOR ETF IBOXX USD TREASURIES 5-7Y,"
"USAG SSGA SPDR ETFS Europe I Plc,"
"USAL Lyxor International Asse,"
"USAU Lyxor International Asse,"
"USD2 ETFS FOREIGN EXCHANGE LTD ETFS SHORT GBP LONG (USD)GBP,"
"USDV SSGA SPDR ETFS Europe I Plc,"
"USE US Enhanced Income,"
"USEB US Enhanced Income,"
"USGB ETFS Foreign Exchange Limited,"
"USLV SSGA SPDR ETFS Europe I,"
"USMV Ossiam Lux,"
"USP3 ETFS FOREIGN EXCHANGE LTD ETFS 3X LONG USD SHORT GBP,"
"UST Lyxor International Asse,"
"USTL Lyxor International Asse,"
"USY Unisys Corporation,"
"UTG Unite Group Plc,"
"UTIG Multi Units Luxembourg,"
"UTIW Multi Units Luxembourg,"
"UTL Utilico Investments Limited,"
"UTLB Utilico Finance Limited,"
"UTLC Utilico Finance Limited,"
"UTLD Utilico Finance Limited,"
"UTN Ultima Networks Plc,"
"UTV Utv Media Plc,"
"UTW Utilitywise Plc,"
"UU United Utilities,"
"UVEL Univision Engineering Limited,"
"VAL Valirx Plc,"
"VAPX Vanguard Funds Plc,"
"VCP Victoria Plc,"
"VCT Victrex Plc,"
"VDEM Vanguard Funds Plc,"
"VDJP Vanguard Funds Plc,"
"VDPX Vanguard Funds Plc,"
"VEC Vectura Group Plc,"
"VED Vedanta Resources Plc,"
"VELA Vela Technologies Plc,"
"VEN Ventus Vct Plc,"
"VEN2 ventus 2 vct ord gbp0,"
"VENC Ventus Vct Plc,"
"VENN Venn Life Sciences Holdi,"
"VER Vernalis Plc,"
"VEUR Vanguard Funds Plc,"
"VFEM Vanguard Funds Plc,"
"VGAS Volga Gas Plc,"
"VGM Vatukoula Gold Mines Plc,"
"VGOV Vanguard Funds Plc,"
"VHYD Vanguard Funds Plc,"
"VHYL Vanguard Funds Plc,"
"VIN Value and Income Trust Plc,"
"VIP Vipera Plc,"
"VIS Vitesse Media Plc,"
"VIXS Source Markets Public Limited Company,"
"VIY Vialogy Plc,"
"VJPN Vanguard Funds Plc,"
"VLE Volvere Plc,"
"VLG Venture Life Group Plc,"
"VLK Vislink Plc,"
"VLS Velocys Plc,"
"VLX Volex Plc,"
"VMP Verdes Management Plc,"
"VMT Vmoto Limited,"
"VNC Ventus 2 Vct Plc,"
"VNET Vianet Group Plc,"
"VNF Pxp Vietnam Fund Limited,"
"VNH Vietnam Holding Limited,"
"VNI Vietnam Infrastructure Limited,"
"VNL Vinaland Limited,"
"VNLZ Vinaland Zdp Ltd,"
"VO25 VODAFONE GROUP 5.625% NTS 4/12/25 GBP(VAR),"
"VO32 VODAFONE GROUP 5.90% EUR MED TRM NTS 26/11/32 GBP(VAR),"
"VOD Vodafone Group Plc,"
"VOF Vinacapital Vietnam Opportunity Fund Ld,"
"VOG Victoria Oil & Gas Plc,"
"VOLS Source Markets Public Limited Company,"
"VOLT Source Markets Public Limited Company,"
"VP VP Plc,"
"VRP Verona Pharma Plc,"
"VRS Versarien Plc,"
"VSTX Etfx Fund Company Plc,"
"VSVS Vesuvius Plc,"
"VSXG Barclays Bank Plc,"
"VSXX Barclays Bank Plc,"
"VSXY Barclays Bank Plc,"
"VSYG Barclays Bank Plc,"
"VTBR Jsc Vtb Bank,"
"VTC Vitec Group Plc [The],"
"VTU Vertu Motors Plc,"
"VUKE Vanguard Funds Plc,"
"VUSA Vanguard Funds Plc,"
"VUSD Vanguard Funds Plc,"
"VWRD Vanguard Funds Plc,"
"VWRL Vanguard Funds Plc,"
"VXIM Barclays Bank Plc,"
"VXIS Barclays Bank Plc,"
"VZC Verizon Communications,"
"WAFM West African Minerals Corporation,"
"WAND Wandisco Plc,"
"WAR War,"
"WATL Lyxor International Asse,"
"WATR Water Intelligence Plc,"
"WBS West Bromwich Building Society,"
"WCW Walker Crips Group Plc,"
"WDRL Multi Units Luxembourg,"
"WDSC SSGA SPDR ETFS Europe II,"
"WEAT ETFS Commodity Securities Limited,"
"WEB Webis Holdings Plc,"
"WEIR Weir Group Plc,"
"WG Wood Group (John),"
"WGB Walker Greenbank Plc,"
"WHE Wildhorse Energy Limited,"
"WHI W.H. Ireland Group Plc,"
"WI01 FTSE World,"
"WI02 FTSE World ex South Africa,"
"WI03 FTSE World Europe ex Eurobloc,"
"WIAUS FTSE Australia Index,"
"WIAUT FTSE Austria Index,"
"WIBEL FTSE Belgium/Lux Index,"
"WIBRA FTSE Brazil Index,"
"WICAN FTSE Canada Index,"
"WICHE FTSE Switzerland Index,"
"WICHL FTSE Chile Index,"
"WICHN FTSE China Index,"
"WICOL FTSE Colombia Index,"
"WICZH FTSE Czech Rep. Index,"
"WIDEN FTSE Denmark Index,"
"WIDEU FTSE Germany Index,"
"WIEGY FTSE Egypt Index,"
"WIESP FTSE Spain Index,"
"WIFIN FTSE Finland Index,"
"WIFRA FTSE France Index,"
"WIGBR FTSE UK Index,"
"WIGRC FTSE Greece Index,"
"WIHKG FTSE Hong Kong Index,"
"WIHUN FTSE Hungary Index,"
"WIIDN FTSE Indonesia Index,"
"WIIND FTSE India Index,"
"WIIRL FTSE Ireland Index,"
"WIISR FTSE Israel Index,"
"WIITA FTSE Italy Index,"
"WIJPNG FTSE Japan Index - Gbp,"
"WIJPNU FTSE Japan Index - USD,"
"WIKOR FTSE Korea Index,"
"WIL Wilmington Group Plc,"
"WIMAL FTSE Malaysia Index,"
"WIMAR FTSE Marocco Index,"
"WIMEX FTSE Mexico Index,"
"WIN Wincanton Plc,"
"WIND Renewable Energy Generation Limited,"
"WINK M Winkworth Plc,"
"WINLD FTSE Netherlands Index,"
"WINOR FTSE Norway Index,"
"WINZL FTSE New Zealand Index,"
"WIPAK FTSE Pakistan Index,"
"WIPER FTSE Peru Index,"
"WIPHL FTSE Philippines Index,"
"WIPOL FTSE Poland Index,"
"WIPTL FTSE Portugal Index,"
"WIRUS FTSE Russia Index,"
"WIS Wistron Corporation,"
"WISGP FTSE Singapore Index,"
"WISWE FTSE Sweden Index,"
"WITHA FTSE Thailand Index,"
"WITUR FTSE Turkey Index,"
"WITWN FTSE Taiwan Index,"
"WIUAE FTSE Uae Index,"
"WIUSA FTSE USA Index,"
"WIZAF FTSE South Africa Index,"
"WKOF Weiss Korea Opportunity,"
"WKP Workspace Group Plc,"
"WLDD Lyxor International Asse,"
"WLDL Lyxor International Asse,"
"WLDR Multi Units Luxembourg,"
"WLF Wolfson Microelectronics Plc,"
"WLFE Wolf Minerals Limited,"
"WMH William Hill Plc,"
"WOOD Ishares II Plc,"
"WOR World Careers Network Plc,"
"WORK Work Group Plc,"
"WOS Wolseley Plc,"
"WOSC SSGA SPDR ETFS Europe II,"
"WPC Witan Pacific Investment Trust Plc,"
"WPP Wpp Plc,"
"WRES W Resources Plc,"
"WRL Wentworth Resources Limited,"
"WSBN Wishbone Gold Plc,"
"WSG Westminster Group Plc,"
"WSP Wynnstay Properties Plc,"
"WST Westside Investments Plc,"
"WSX Wessex Exploration Plc,"
"WTAN Witan Investment Trust Plc,"
"WTB Whitbread Plc,"
"WTE Westmount Energy Limited,"
"WTI Weatherly International Plc,"
"WTL Waterlogic Plc,"
"WTM Waterman Group Plc,"
"WTR World Trust Fund,"
"WTRW World Trust Fund,"
"WWH Worldwide Healthcare Trust Plc,"
"WWHS Worldwide Healthcare Trust Plc,"
"WYG Wyg Plc,"
"WYN Wynnstay Group Plc,"
"XAHD DB X-Trackers Dbx MSCI AC Asia,"
"XAHG DB X-Trackers Dbx MSCI AC Asia,"
"XAR Xaar Plc,"
"XASX DB X-Trackers Dbx FTSE All-Shar,"
"XAUS DB X-Trackers Dbx S&P/Asx 200 E,"
"XAXD DB X-Trackers Dbx MSCI AC Asia,"
"XAXJ DB X-Trackers Dbx MSCI AC Asia,"
"XBAK DB X-Trackers Dbx MSCI Pakistan,"
"XBAN DB X-Trackers Dbx MSCI Banglade,"
"XBCU DB X-Trackers Dbx Dblci - Oy BA,"
"XBRD DB X-Trackers Dbx MSCI BRIC ETF,"
"XBRI DB X-Trackers Dbx MSCI BRIC ETF,"
"XBRS DB X-Trackers Dbx Europe 600 BA,"
"XBUI DB X-Trackers II Dbx Iboxx UK G,"
"XBUT DB X-Trackers II Dbx Iboxx Gbp,"
"XC4S DB X-TRACKERS CAC 40 SHORT IDX ETF,"
"XCAD DB X-Trackers Dbx MSCI Canada E,"
"XCAN DB X-Trackers Dbx MSCI Canada E,"
"XCH Xchanging Plc,"
"XCHA DB X-Trackers Dbx Csi300 ETF,"
"XCRD DB X-Trackers DB X-Trackers Cur,"
"XCRG DB X-Trackers Dbx Currency Retu,"
"XCS3 DB X-TRACKERS MSCI MALAYSIA TRN IDX USD 1C,"
"XCS4 DB X-TRACKERS MSCI THAILAND TRN IDX USD 1C,"
"XCS5 DB X-TRACKERS MSCI INDIA TRN IDX USD 1C,"
"XCS6 DB X-TRACKERS MSCI CHINA TRN IDX USD 1C,"
"XCSD DB X-Trackers II Dbx Australian,"
"XCT2 DB ETC INDEX PLC NATURAL GAS BOOSTER ETC 30/04/60 USD,"
"XCT5 DB ETC INDEX PLC COMMODITY BOOSTER ETC 30/04/60 USD,"
"XCT6 DB ETC INDEX PLC AGRICULTURE BOOSTER ETC 30/04/60 USD,"
"XCT7 DB ETC INDEX PLC INDUSTRIAL MET BOOSTER ETC 30/04/60 USD,"
"XCT8 DB ETC INDEX PLC ENERGY BOOSTER ETC 30/04/60 USD,"
"XCT9 DB ETC INDEX PLC WTI CRUDE OIL BOOSTER ETC 30/04/60 USD,"
"XCX3 DB X-TRACKERS MSCI MALAYSIA TRN IDX USD 1C GBP,"
"XCX4 DB X-TRACKERS MSCI THAILAND TRN IDX USD 1C GBP,"
"XCX5 DB X-TRACKERS MSCI INDIA TRN IDX USD 1C GBP,"
"XCX6 DB X-TRACKERS MSCI CHINA TRN IDX USD 1C GBP,"
"XD3E DB X-TRACKERS DJ EURO STOXX SELECT DIVIDEND 30 ETF`1D`,"
"XDBG DB X-Trackers Dbx Dblci - Oy BA,"
"XDDX DB X-Trackers DB X-Trackers DAX,"
"XDER DB X-Trackers Dbx FTSE Epra/Nar,"
"XDJA DB X-Trackers Dbxt Nikkei 225 D,"
"XDJP DB X-Trackers Dbxt Nikkei 225 D,"
"XDLH DB X-Trackers II Dbx Cdx Na HY,"
"XDTK Concept Fund Solutions P,"
"XDUK DB X-Trackers Dbxt Ftse100 [Dir,"
"XECS DB X-Trackers Dbx MSCI EM Consu,"
"XEDS DB X-Trackers Dbx Euro Stoxx 50,"
"XEL Xcite Energy Limited,"
"XEL2 DB X-TRACKERS DJ EURO STOXX50 LEVERAGED ETF(EUR)GBP,"
"XEM8 DB ETC INDEX PLC MEAN REVERSION ETC 28/10/60 USD,"
"XEMD DB X-Trackers Dbx MSCI Emerging,"
"XEME DB X-Trackers Dbx MSCI EM Easte,"
"XEMM DB X-Trackers Dbx MSCI Emerging,"
"XEO2 DB X-TRACKERS II EONIA TOTAL RETURN INDEX CAP,"
"XEQD DB X-Trackers Dbx S&P 500 Equal,"
"XESC DB X-Trackers Dbx Euro Stoxx 50,"
"XESG DB X-Trackers Dbx MSCI Emerging,"
"XESX DB X-Trackers Dbx Euro Stoxx 50,"
"XET5 DB ETC INDEX PLC S&P GSCI ETC 30/04/60 USD,"
"XET6 DB ETC INDEX PLC S&P GSCI AGRICULTURE ETC 30/04/60 USD,"
"XET7 DB ETC INDEX PLC S&P GSCI INDUS METALS ETC 30/04/60 USD,"
"XET8 DB ETC INDEX PLC S&P GSCI ENERGY ETC 30/04/60 USD,"
"XEUM DB X-Trackers Dbx MSCI Europe M,"
"XEUT DB X-Trackers Dbx MSCI Emerging,"
"XFVT DB X-Trackers Dbx FTSE Vietnam,"
"XGDD DB X-Trackers Dbx Stoxx Global,"
"XGID DB X-Trackers Dbx S&P Gbl Infra,"
"XGIG DB X-Trackers II Dbx Global Inf,"
"XGLD DB Etc Plc,"
"XGLE DB X-Trackers II Dbx Iboxx EUR,"
"XGLR DB X-Trackers Dbx DB FTSE Epra/,"
"XGLS DB Etc Plc,"
"XGPD DB X-Trackers Dbx DB FTSE Epra/,"
"XGSD DB X-Trackers Dbx Stoxx Global,"
"XGSG DB X-Trackers II Dbx Global Sov,"
"XHEG DB X-Trackers Dbx DB Eq Strateg,"
"XHFD DB X-Trackers Dbx DB Hedge Fund,"
"XHFE DB X-Trackers Dbx DB Equity Str,"
"XHFG DB X-Trackers Dbx DB Hedge Fund,"
"XHSD DB X-Trackers Dbx Hsi Short Dai,"
"XICL Ftse/Xinhua Insurance Invest Idx,"
"XIDD DB X-Trackers Dbx MSCI Indonesi,"
"XIGS DB X-Trackers Dbx Stoxx 600 Ind,"
"XIMT DB X-Trackers Dbx Islamic Marke,"
"XIN0 FTSE Xinhua China 25,"
"XIN0U FTSE Xinhua China 25 USD Index,"
"XIN1 FTSE Xinhua B 35 Index,"
"XIN2 FTSE Xinhua B All-Share Index,"
"XIN3 FTSE Xinhua A 200 Index,"
"XIN4 FTSE Xinhua A 600 index,"
"XIN40001 FTSE XIN600 OIL & GAS,"
"XIN40530 FTSE XIN600 OIL & GAS PRODUCERS,"
"XIN40570 FTSE XIN600 OIL EQUIP. SERVICES & DISTR,"
"XIN41000 FTSE XIN600 BASIC MATERIALS,"
"XIN41350 FTSE XIN600 CHEMICALS,"
"XIN41730 FTSE XIN600 FORESTRY & PAPER,"
"XIN41750 FTSE XIN600 INDUSTRIAL METALS,"
"XIN41770 FTSE XIN600 MINING,"
"XIN42000 FTSE XIN600 INDUSTRIALS,"
"XIN42350 FTSE XIN600 CONSTRUCTION & MATERIALS,"
"XIN42710 FTSE XIN600 AEROSPACE & DEFENSE,"
"XIN42720 FTSE XIN600 GENERAL INDUSTRIALS,"
"XIN42730 FTSE XIN600 ELECTRONIC&ELECTRICAL EQUIP,"
"XIN42750 FTSE XIN600 INDUSTRIAL ENGINEERING,"
"XIN42770 FTSE XIN600 INDUSTRIAL TRANSPORTATION,"
"XIN42790 FTSE XIN600 SUPPORT SERVICES,"
"XIN43000 FTSE XIN600 CONSUMER GOODS,"
"XIN43350 FTSE XIN600 AUTOMOBILES & PARTS,"
"XIN43530 FTSE XIN600 BEVERAGES,"
"XIN43570 FTSE XIN600 FOOD PRODUCERS,"
"XIN43720 FTSE XIN600 HOUSEHOLD GOODS,"
"XIN43740 FTSE XIN600 LEISURE GOODS,"
"XIN43760 FTSE XIN600 PERSONAL GOODS,"
"XIN44000 FTSE XIN600 HEALTH CARE,"
"XIN44570 FTSE XIN600 PHARMACEUTICALS & BIOTECH.,"
"XIN45000 FTSE XIN600 CONSUMER SERVICES,"
"XIN45330 FTSE XIN600 FOOD & DRUG RETAILERS,"
"XIN45370 FTSE XIN600 GENERAL RETAILERS,"
"XIN45550 FTSE XIN600 MEDIA,"
"XIN45750 FTSE XIN600 TRAVEL & LEISURE,"
"XIN46000 FTSE XIN600 TELECOMMUNICATIONS,"
"XIN46570 FTSE XIN600 MOBILE TELECOMMUNICATIONS,"
"XIN47000 FTSE XIN600 UTILITIES,"
"XIN47530 FTSE XIN600 ELECTRICITY,"
"XIN47570 FTSE XIN600 GAS WATER & MULTIUTILITIES,"
"XIN48000 FTSE XIN600 FINANCIALS,"
"XIN48350 FTSE XIN600 BANKS,"
"XIN48570 FTSE XIN600 LIFE INSURANCE,"
"XIN48770 FTSE XIN600 GENERAL FINANCIAL,"
"XIN49000 FTSE XIN600 TECHNOLOGY,"
"XIN49530 FTSE XIN600 SOFTWARE & COMPUTER SERVICE,"
"XIN49570 FTSE XIN600 TECHNOLOGY HARDWARE & EQUIP,"
"XIN5 FTSE Xinhua A 400 Index,"
"XIN6 FTSE Xinhua A SmallCap,"
"XIN7 FTSE Xinhua A All-Share,"
"XINBV Ftse/Xinhua Blueship Value 100 Idx,"
"XINC FTSE Xinhua China Index,"
"XINH Ftse/Xinhua H Share Index,"
"XKS2 DB X-TRACKERS MSCI KOREA TRN INDEX ETF `1D`,"
"XKSD DB X-Trackers Dbx MSCI Korea Et,"
"XLBS Source Markets Public Limited Company,"
"XLDX DB X-Trackers Dbx Levdax Daily,"
"XLES Source Markets Public Limited Company,"
"XLFQ Source Markets Public Li,"
"XLFS Source Markets Public Limited Company,"
"XLID DB X-Trackers II Dbx Cdx Na Ig,"
"XLIG DB X-Trackers II Dbx Cdx Na Ig,"
"XLIS Source Markets Public Limited Company,"
"XLKQ Source Markets Public Li,"
"XLKS Source Markets Public Limited Company,"
"XLM Xlmedia Plc,"
"XLPE DB X-Trackers Dbx Lpx Mm Privat,"
"XLPS Source Markets Public Limited Company,"
"XLUS Source Markets Public Limited Company,"
"XLVS Source Markets Public Limited Company,"
"XLYS Source Markets Public Limited Company,"
"XMAD DB X-Trackers Dbx MSCI Emerging,"
"XMAF DB X-Trackers Dbx MSCI Efm Afri,"
"XMAS DB X-Trackers Dbx MSCI Emerging,"
"XMBD DB X-Trackers Dbx MSCI Brazil E,"
"XMBR DB X-Trackers Dbx MSCI Brazil E,"
"XMCL DB X-Trackers Dbx MSCI Chile Et,"
"XMCX DB X-Trackers Dbx FTSE 250 ETF,"
"XMEA DB X-Trackers Dbx MSCI Emerging,"
"XMEC DB X-Trackers Dbx MSCI EM Consu,"
"XMED DB X-Trackers Dbx MSCI Europe E,"
"XMEE DB X-Trackers Dbx MSCI EM Easte,"
"XMEF DB X-Trackers Dbx MSCI Emerging,"
"XMEH DB X-Trackers Dbx MSCI Emerging,"
"XMEI DB X-Trackers Dbx MSCI Emerging,"
"XMEM DB X-Trackers Dbx MSCI Emerging,"
"XMEN DB X-Trackers Dbx MSCI EM Telec,"
"XMES DB X-Trackers Dbx MSCI Mexico E,"
"XMET DB X-Trackers Dbx MSCI EM Infor,"
"XMEU DB X-Trackers Dbx MSCI Europe E,"
"XMEX DB X-Trackers Dbx MSCI Mexico E,"
"XMEY DB X-Trackers Dbx MSCI EM Energ,"
"XMID DB X-Trackers Dbx MSCI Indonesi,"
"XMJD DB X-Trackers Dbx MSCI Japan Et,"
"XMJG DB X-Trackers Dbx MSCI Japan Et,"
"XMJP DB X-Trackers Dbx MSCI Japan Et,"
"XMLA DB X-Trackers Dbx MSCI EM Latam,"
"XMLD DB X-Trackers Dbx MSCI EM Latam,"
"XMMD DB X-Trackers Dbx MSCI Emerging,"
"XMRC DB X-Trackers Dbx MSCI Russia 2,"
"XMRD DB X-Trackers Dbx MSCI Russia 2,"
"XMTD DB X-Trackers Dbx MSCI Taiwan E,"
"XMTW DB X-Trackers Dbx MSCI Taiwan E,"
"XMUD DB X-Trackers Dbx MSCI USA ETF,"
"XMUJ DB X-Trackers Dbxt MSCI Japan T,"
"XMUS DB X-Trackers Dbx MSCI USA ETF,"
"XMWD DB X-Trackers Dbx MSCI World Et,"
"XMWO DB X-Trackers Dbx MSCI World Et,"
"XMXD DB X-Trackers Dbx MSCI Emerging,"
"XNID DB X-Trackers Dbx CNX Nifty Uci,"
"XNIF DB X-Trackers Dbx CNX Nifty Uci,"
"XPAL DB Etc Plc,"
"XPHG DB X-Trackers Dbx MSCI Philippi,"
"XPHI DB X-Trackers Dbx MSCI Philippi,"
"XPL Xplorer Plc,"
"XPLA DB Etc Plc,"
"XPP Xp Power Limited,"
"XPS Expansys Plc,"
"XPXD DB X-Trackers Dbx MSCI Pacific,"
"XPXJ DB X-Trackers Dbx MSCI Pacific,"
"XRMD DB X-Trackers Dbx Russell Midca,"
"XRU2 DB X-TRACKERS RUSSELL 2000 ETF `1C` USD(GBP),"
"XRUD DB X-Trackers Dbx Russell 2000,"
"XRUM DB X-Trackers Dbx Russell Midca,"
"XS2D DB X-TRACKERS S&P 500 2X LEVERAGED INDEX ETF(USD)USD,"
"XS3R DB X-TRACKERS DJ STOXX 600 FOOD BEVERAGE,"
"XS6R DB X-TRACKERS DJ STOXX 600 UTILITIES ETF,"
"XS7R DB X-TRACKERS DJ STOXX 600 BANKS ETF,"
"XS7S DB X-TRACKERS DJ STOXX 600 BANKS SHORT 1C,"
"XS8R DB X-TRACKERS DJ STOXX 600 TECHNOLOGY ETF,"
"XSD2 DB X-TRACKERS SHORTDAX X2 ETF(EUR)GBP,"
"XSDR DB X-Trackers Dbx Stoxx Europe,"
"XSDS DB X-Trackers Dbx Stoxx EUR 600,"
"XSDX DB X-Trackers Dbx Shortdax Dail,"
"XSER DB X-Trackers Dbx Stoxx Europe,"
"XSES DB X-Trackers Dbx Stoxx Europe,"
"XSEW DB X-Trackers Dbx S&P 500 Equal,"
"XSFD DB X-Trackers Dbx S&P Select Fr,"
"XSFR DB X-Trackers Dbx S&P Select Fr,"
"XSG Xeros Technology Group P,"
"XSGI DB X-Trackers Dbx S&P Global In,"
"XSHE DB X-Trackers Dbx S&P Europe 35,"
"XSHJ DB X-Trackers Dbx S&P Japan 500,"
"XSHU DB X-Trackers Dbx S&P 500 Shari,"
"XSIH DB Etc Plc,"
"XSIL DB Etc Plc,"
"XSIR DB X-Trackers Dbx Stoxx Europe,"
"XSKR DB X-Trackers Dbx Stoxx Europe,"
"XSL2 DB X-TRACKERS S&P 500 2X LEVERAGED INDEX ETF(USD)GBP,"
"XSNR DB X-Trackers Dbx Stoxx Europe,"
"XSPD DB X-Trackers Dbx S&P 500 Inver,"
"XSPG DB X-Trackers Dbx S&P 500 [] E,"
"XSPR DB X-Trackers Dbx Stoxx Europe,"
"XSPS DB X-Trackers Dbx S&P 500 Inver,"
"XSPU DB X-Trackers Dbx S&P 500 ETF $,"
"XSPX DB X-Trackers Dbx S&P 500 ETF,"
"XSSX DB X-Trackers Dbx Euro Stoxx 50,"
"XSTR DB X-Trackers II Dbx Sterling C,"
"XSX6 DB X-TRACKERS DJ STOXX 600 ETF `1C`EUR(GBP),"
"XT21 DB X-TRACKERS S&P 500 2X INVERSE INDEX ETF(USD)GBP,"
"XT2D DB X-TRACKERS S&P 500 2X INVERSE INDEX ETF(USD)USD,"
"XTR Xtract Energy Plc,"
"XUDS DB X-Trackers II Dbx US Treasur,"
"XUGS DB X-Trackers II Dbx UK Gilts S,"
"XUIT DB X-Trackers II Dbx USD Ig Inf,"
"XUKS DB X-Trackers Dbx FTSE 100 Shor,"
"XUKX DB X-Trackers Dbx FTSE 100 ETF,"
"XULL DB X-Trackers II Dbx Gilts 2X D,"
"XUSD DB X-Trackers Dbx US Dollar Cas,"
"XUSS DB X-Trackers II Dbx Gilts 2X D,"
"XUT3 DB X-TRACKERS II IBOXX USD TREASURES 1-3 TOTAL RETURN IDX,"
"XUTD DB X-Trackers II Dbx Iboxx USD,"
"XUTL DB X-Trackers II Dbx US Treasur,"
"XUTS DB X-Trackers II Dbx US Treasur,"
"XVTD DB X-Trackers Dbx FTSE Vietnam,"
"XWCD DB X-Trackers Dbx MSCI World Co,"
"XWED DB X-Trackers Dbx MSCI World En,"
"XWFD DB X-Trackers Dbx MSCI World Fi,"
"XWHD DB X-Trackers Dbx MSCI World He,"
"XWID DB X-Trackers Dbx MSCI World In,"
"XWMD DB X-Trackers Dbx MSCI World Ma,"
"XWND DB X-Trackers Dbx MSCI World In,"
"XWSC DB X-Trackers Dbx MSCI World Co,"
"XWSD DB X-Trackers DB X-Trackers Msc,"
"XWSE DB X-Trackers Dbx MSCI World En,"
"XWSF DB X-Trackers Dbx MSCI World Fi,"
"XWSH DB X-Trackers Dbx MSCI World He,"
"XWSI DB X-Trackers Dbx MSCI World In,"
"XWSM DB X-Trackers Dbx MSCI World Ma,"
"XWSN DB X-Trackers Dbx MSCI World In,"
"XWSS DB X-Trackers DB X-Trackers Msc,"
"XWST DB X-Trackers DB X-Trackers Msc,"
"XWSU DB X-Trackers DB X-Trackers Msc,"
"XWTD DB X-Trackers,"
"XWUT DB X-Trackers DB X-Trackers Msc,"
"XWXU DB X-Trackers DB X-Trackers Fts,"
"XX25 DB X-TRACKERS FTSE/XINHUA CHINA 25 ETF `1C`,"
"XX2D DB X-TRACKERS FTSE/XINHUA CHINA 25 ETF `1C` USD,"
"XXSC DB X-Trackers MSCI Europe Small,"
"YIEL Multi Units France,"
"YNGA Young & Co's Brewery Plc [Aim],"
"YNGN Young & Co's Brewery Plc [Aim],"
"YOU Yougov Plc,"
"ZAM Zambeef Products Plc,"
"ZINC ETFS Commodity Securities Limited,"
"ZIOC Zanaga Iron Ore Company Limited,"
"ZMNO Zamano Plc,"
"ZOO Zoo Digital Group Plc,"
"ZOX Zincox Resources Plc,"
"ZTF Zotefoams Plc,"
"ZYT Zytronic Plc,"
"ZZZ Snoozebox Holdings Plc"

];
		    
    var NASDAQTags = [
		"AAITAC Asia Information Tech MSCI Ishares",
		"AALAmerican Airlines Group Inc.",
		"AALCPAmerican Airlines Group Inc.",
		"AAMEAtlantic American Corp",
		"AAOIApplied Optoelectronics Inc",
		"AAONAaon Inc",
		"AAPLApple Inc",
		"AAWWAtlas Air Worldwide Holdings",
		"AAXJAll Country Asia Ex Jpn Idx MSCI Ishares",
		"ABAXAbaxis Inc",
		"ABCBAmeris Bancorp",
		"ABCDCambium Learning Group",
		"ABCOThe Advisory Board Company",
		"ABFSArkansas Best Corp",
		"ABGBAbengoa S.A.",
		"ABIOArca Biopharma",
		"ABMDAbiomed",
		"ABTLAutobytel Inc",
		"ACADAcadia Pharmaceuticals Inc",
		"ACASAmerican Capital",
		"ACATArctic Cat Inc",
		"ACCLAccelrys Inc",
		"ACETAceto Corp",
		"ACFCAtlantic Coast Federal Corp",
		"ACFNAcorn Energy",
		"ACGLArch Capital Group Ltd",
		"ACHCAcadia Healthcare Company Inc",
		"ACHNAchillion Pharmaceuticals",
		"ACIWAci Worldwide",
		"ACLSAxcelis Technologies",
		"ACNBAcnb Corp",
		"ACORAcorda Therapeutics",
		"ACPWActive Power",
		"ACRXAcelrx Pharmaceuticals",
		"ACSFAmerican Capital Senior Floatin",
		"ACSTAcasti Pharma Inc",
		"ACTGAcacia Research Corp",
		"ACTSActions Semiconductor Co.",
		"ACURAcura Pharmaceuticals",
		"ACWIACWI Index MSCI Ishares",
		"ACWXACWI Ex-US Index MSCI Ishares",
		"ACXMAcxiom Corp",
		"ADATAuthentidate Holding",
		"ADBEAdobe Systems Incorporated",
		"ADEPAdept Technology",
		"ADESAdvanced Emissions Solutions Inc",
		"ADHDAlcobra Ltd",
		"ADIAnalog Devices",
		"ADMPAdamis Pharmaceuticl",
		"ADNCAudience Inc",
		"ADPAutomatic Data Processing",
		"ADRAAsia 50 ADR Index Bldrs",
		"ADRDDev Mkts 100 ADR Index Bldrs",
		"ADREEmrg Mkts 50 ADR Index Bldrs",
		"ADRUEurope 100 ADR Index Bldrs",
		"ADSKAutodesk Inc",
		"ADTNAdtran Inc",
		"ADUSAddus Homecare Corp",
		"ADVSAdvent Software",
		"ADXSAdvaxis Inc",
		"ADXSWAdvaxis Inc",
		"AEGNAegoin Corp",
		"AEGRAegerion Pharmaceuticals",
		"AEHRAehr Test Systems",
		"AEISAdvanced Energy Industries",
		"AEPIAEP Industries Inc",
		"AERIAerie Pharmaceuticals Inc",
		"AETIAmerican Electric Technologies",
		"AEYAddvantage Technologies Group",
		"AEZSAeterna Zentaris",
		"AFAMAlmost Family Inc",
		"AFCBAthens Bancshares Corp",
		"AFFXAffymetrix",
		"AFHAtlas Financial Holdings Inc",
		"AFOPAlliance Fiber Optic Products",
		"AFSIAmtrust Financial Services",
		"AGENAgenus Inc",
		"AGIIArgo Group International Holdings Ltd",
		"AGIILArgo Group International Holdin",
		"AGIOAgios Pharmaceuticals Inc",
		"AGNCAmerican Capital Agency",
		"AGNCPAmerican Capital",
		"AGNDWisdomtree Barclays U.S. Aggreg",
		"AGTCApplied Genetic Technologies Co",
		"AGYSAgilysys Inc",
		"AGZDWisdomtree Barclays U.S. Aggreg",
		"AHGPAlliance Holdings Gp L.P.",
		"AHPIAllied Healthcare Products",
		"AIMCAltra Holdings",
		"AINVApollo Investment Corp",
		"AIQAlliance Healthcare Services",
		"AIRMAir Methods Corp",
		"AIRRFirst Trust Rba American Indust",
		"AIRTAir T Inc",
		"AIXGAixtron Se",
		"AKAMAkamai Technologies",
		"AKAOAchaogen Inc",
		"AKBAAkebia Therapeutics Inc.",
		"AKERAkers Biosciences",
		"AKRXAkorn Inc",
		"ALCOAlico Inc",
		"ALCSAlco Stores Inc",
		"ALGNAlign Technology",
		"ALGTAllegiant Travel Company",
		"ALIMAlimera Sciences",
		"ALKSAlkermes Plc",
		"ALLBAlliance Bank",
		"ALLTAllot Communications Ltd",
		"ALNYAlnylam Pharmaceuticals",
		"ALOGAnalogic Corp",
		"ALOTAstro-Med",
		"ALQAAlliqua Inc",
		"ALSKAlaska Communications Systems",
		"ALTIAltair Nanotechnologies Inc",
		"ALTRAltera Corp",
		"ALXAAlexza Pharmaceuticals",
		"ALXNAlexion Pharmaceuticals",
		"AMAGAmag Pharmaceuticals",
		"AMAPAutonavi Holdings",
		"AMATApplied Materials",
		"AMBAAmbarella Inc",
		"AMBCAmbac Financial Group Inc",
		"AMBCWAmbac Financial Group Inc",
		"AMBIAmbit Biosciences Corp",
		"AMBTAmbient Corp",
		"AMCCApplied Micro Circuits Corp",
		"AMCFAndatee China Marine Fuel Services",
		"AMCNAirmedia Group Inc",
		"AMCXAmc Networks Inc",
		"AMDAAmedica Corp",
		"AMEDAmedisys Inc",
		"AMGNAmgen Inc",
		"AMICAmerican Independence",
		"AMKRAmkor Technology",
		"AMNBAmerican National Bankshares",
		"AMOTAllied Motion Technologies",
		"AMOVAmerica Movil S.A.B. De C.V.",
		"AMRBAmerican River Bankshares",
		"AMRIAlbany Molecular Research",
		"AMRKA-Mark Precious Metals Inc.",
		"AMRNAmarin Corporation Plc",
		"AMRSAmyris Inc",
		"AMSCAmerican Superconductor Corp",
		"AMSFAmerisafe Inc",
		"AMSGAmsurg Corp",
		"AMSWAAmerican Software",
		"AMWDAmerican Woodmark Corp",
		"AMZNAmazon.Com Inc",
		"ANACAnacor Pharmaceuticals",
		"ANADAnadigics Inc",
		"ANATAmerican National Insurance",
		"ANCBAnchor Bancorp",
		"ANCIAmerican Caresource Holdings",
		"ANCXAccess National Corp",
		"ANDEThe Andersons",
		"ANGIAngie's List Inc",
		"ANGOAngiodynamics",
		"ANIKAnika Therapeutics Inc",
		"ANIPANI Pharmaceuticals Inc",
		"ANSSAnsys Inc",
		"ANTHAnthera Pharmaceuticals",
		"AOSLAlpha and Omega Semiconductor",
		"APAGFApco Oil and Gas International",
		"APEIAmerican Public Education",
		"APOGApogee Enterprises",
		"APOLApollo Group",
		"APPYAspenbio Pharma",
		"APRIApricus Biosciences Inc",
		"APSAAlto Palermo S.A.",
		"APWCAsia Pac Wire &Cable",
		"AQUAquasition Corp",
		"AQUUUAquasition Corp",
		"AQUUWAquasition Corp",
		"AQXPAquinox Pharmaceuticals Inc.",
		"ARAYAccuray Incorporated",
		"ARCCAres Capital Corp",
		"ARCIAppliance Recycling Centers",
		"ARCPAmerican Realty Capital Propert",
		"ARCPPAmerican Realty Capital Propert",
		"ARCWArc Wireless Solutions",
		"AREXApproach Resources Inc",
		"ARGSArgos Therapeutics Inc",
		"ARIAAriad Pharmaceuticals",
		"ARIIAmerican Railcar Industries",
		"ARISAri Network Svcs",
		"ARKRArk Restaurants",
		"ARLPAlliance Resource Partners L.P.",
		"ARMHArm Holdings Plc",
		"ARNAArena Pharmaceuticals",
		"AROWArrow Financial Corp",
		"ARQLArqule Inc",
		"ARRSArris Group Inc",
		"ARRYArray Biopharma Inc",
		"ARTCArthrocare Corp",
		"ARTNAArtesian Resources Corp",
		"ARTWArt'S-Way Manufacturing Co.",
		"ARTXArotech Corp",
		"ARUNAruba Networks",
		"ARWRArrowhead Research Corp",
		"ASBBAsb Bancorp Inc",
		"ASBCAssociated Banc-Corp",
		"ASBCWAssociated Banc-Corp",
		"ASBIAmeriana Bancorp",
		"ASCMAAscent Media Corp",
		"ASDRVelocityshares Emerging Asia Dr",
		"ASEIAmerican Science and Engineering",
		"ASFIAsta Funding",
		"ASMIAsm International N.V.",
		"ASMLAsml Holding N.V.",
		"ASNAAscena Retail Group",
		"ASPSAltisource Portfolio Solutions S.A.",
		"ASPXAuspex Pharmaceuticals Inc.",
		"ASRVAmeriserv Financial Inc",
		"ASRVPAmeriserv Financial Inc",
		"ASTCAstrotech Corp",
		"ASTEAstec Industries",
		"ASTIAscent Solar Technologies",
		"ASTMAastrom Biosciences",
		"ASURAsure Software Inc",
		"ASYSAmtech Systems",
		"ATAIAta Inc",
		"ATAXAmerica First Tax Exempt L.P.",
		"ATEAAstea International",
		"ATECAlphatec Holdings",
		"ATHNAthenahealth",
		"ATHXAthersys",
		"ATLCAtlanticus Holdings Corp",
		"ATLOAmes National Corp",
		"ATMIAtmi Inc",
		"ATMLAtmel Corp",
		"ATNIAtlantic Tele-Network",
		"ATNYApi Technologies",
		"ATOSAtossa Genetics Inc",
		"ATRCAtricure",
		"ATRIAtrion Corp",
		"ATRMAetrium Inc",
		"ATROAstronics Corp",
		"ATRSAntares Pharma",
		"ATSGAir Transport Services Group Inc",
		"ATTUAttunity Ltd",
		"ATVIActivision Blizzard Inc",
		"AUBNAuburn National Bancorporation",
		"AUDCAudiocodes Ltd",
		"AUXLAuxilium Pharmaceuticals",
		"AVAVAerovironment",
		"AVEOAveo Pharmaceuticals",
		"AVGOAvago Technologies",
		"AVHIAv Homes Inc",
		"AVNRAvanir Pharmaceuticals Inc",
		"AVNWAviat Networks",
		"AWAYHomeaway Inc",
		"AWREAware Inc",
		"AXASAbraxas Petroleum Corp",
		"AXDXAccelerate Diagnostics Inc",
		"AXFNACWI Ex-US Financials MSCI Ishares",
		"AXGNAxogen Inc.",
		"AXJSAC Asia Ex Japan Smallcap MSCI Ishares",
		"AXTIAxt Inc",
		"AZPNAspen Technology",
		"BABYNatus Medical Inc",
		"BAGLEinstein Noah Restaurant Group",
		"BAGRDiversified Restaurant Holdings Inc",
		"BAMMBooks-A-Million",
		"BANCFirst Pactrust Bancorp",
		"BANCLFirst Pactrust Bancorp Inc",
		"BANCPFirst Pactrust Bancorp Inc",
		"BANFBancfirst Corp",
		"BANFPBancfirst Corp",
		"BANRBanner Corp",
		"BANXStonecastle Financial Corporati",
		"BASIBioanalytical Systems",
		"BAXSBaxano Surgical Inc",
		"BBBYBed Bath & Beyond Inc",
		"BBCNBbcn Bancorp Inc",
		"BBEPBreitburn Energy Partners L.P.",
		"BBGIBeasley Broadcast Group",
		"BBNKBridge Capital Holdings",
		"BBOXBlack Box Corp",
		"BBRGBravo Brio Restaurant Group",
		"BBRYBlackberry Limited",
		"BBSIBarrett Business Services",
		"BCBPBcb Bancorp Inc. [Nj]",
		"BCOMB Communications Ltd",
		"BCORBlucora Inc",
		"BCOVBrightcove Inc",
		"BCPCBalchem Corp",
		"BCRXBiocryst Pharmaceuticals",
		"BDBDBoulder Brands Inc",
		"BDEBlack Diamond",
		"BDGEBridge Bancorp",
		"BDMSBirner Dental Management Services",
		"BDSIBiodelivery Sciences International",
		"BEATCardionet",
		"BEAVBE Aerospace",
		"BEBEBebe Stores",
		"BECNBeacon Roofing Supply",
		"BELFABel Fuse Inc",
		"BELFBBel Fuse Inc",
		"BFINBankfinancial Corp",
		"BGCPBgc Partners",
		"BGFVBig 5 Sporting Goods Corp",
		"BGMDBg Medicine",
		"BIBUltra Nasdaq Biotechnology Proshares",
		"BICKBICK Index First Trust",
		"BIDUBaidu Inc",
		"BIIBBiogen Idec Inc",
		"BINDBind Therapeutics Inc",
		"BIOCBiocept Inc",
		"BIODBiodel Inc",
		"BIOFBiofuel Energy",
		"BIOLBiolase Technology",
		"BIOSBioscrip Inc",
		"BIRTActuate Corp",
		"BISUltrashort Nasdaq Biotech Proshares",
		"BJRIBj's Restaurants",
		"BKCCBlackrock Kelso Capital Corp",
		"BKEPBlueknight Energy",
		"BKEPPBlueknight Energy Partners L.P.",
		"BKMUBank Mutual Corp",
		"BKSCBank of South Carolina",
		"BKYFThe Bank of Kentucky Financial",
		"BLDPBallard Power Systems",
		"BLDRBuilders Firstsource",
		"BLFSBiolife Solutions",
		"BLINBridgeline Digital",
		"BLKBBlackbaud Inc",
		"BLMNBloomin' Brands Inc",
		"BLMTBsb Bancorp Inc",
		"BLRXBiolinerx Ltd",
		"BLUEBluebird Bio Inc",
		"BLVDUBoulevard Acquisition Corp.",
		"BMRCBank of Marin Bancorp",
		"BMRNBiomarin Pharmaceutical Inc",
		"BMTCBryn Mawr Bank Corp",
		"BNCLBeneficial Mutual Bancorp",
		"BNCNBNC Bancorp",
		"BNDXVanguard Total International Bo",
		"BNFTBenefitfocus Inc",
		"BNSOBonso Electronics International",
		"BOBEBob Evans Farms",
		"BOCHBank of Commerce Holdings [Ca]",
		"BODYBody Central",
		"BOFIBofi Holding",
		"BOKFBok Financial Corp",
		"BOLTBolt Technology Corp",
		"BONABona Film Group Limited",
		"BONTThe Bon-Ton Stores",
		"BOOMDynamic Materials Corp",
		"BOSCB.O.S. Better Online Solutions",
		"BOTABiota Pharmaceuticals Inc",
		"BOTJBank of The Jame Fnl",
		"BPFHBoston Private Financial Holdings",
		"BPFHPBoston Private Financial Holdings Inc. Dep.",
		"BPFHWBoston Private Financial Holdings",
		"BPHXBluephoenix Solutions",
		"BPOPPopular Inc",
		"BPOPMPopular Inc",
		"BPOPNPopular Inc",
		"BPTHBio-Path Holdings",
		"BRCDBrocade Communications Systems",
		"BRCMBroadcom Corp",
		"BRDRBorderfree Inc.",
		"BREWCraft Brewers Alliance Inc",
		"BRIDBridgford Foods Corp",
		"BRKLBrookline Bancorp",
		"BRKRBruker Corp",
		"BRKSBrooks Automation",
		"BRLIBio-Reference Laboratories",
		"BSDMBsd Medical Corp",
		"BSETBassett Furniture Industries Inc",
		"BSFTBroadsoft Inc",
		"BSPMBiostar Pharmaceuticals",
		"BSQRBsquare Corp",
		"BSRRSierra Bancorp",
		"BSTCBiospecifics Technologies Corp",
		"BTUIBtu International",
		"BURBurcon Nutrascience",
		"BUSEFirst Busey Corp",
		"BVBazaarvoice Inc",
		"BVACordia Bancorp Inc",
		"BVSNBroadvision",
		"BWENBroadwind Energy",
		"BWINABaldwin & Lyons",
		"BWINBBaldwin & Lyons",
		"BWLDBuffalo Wild Wings",
		"BYBKBay Bancorp Inc",
		"BYFCBroadway Financial Corp",
		"BYLKBaylake Corp",
		"CACA Inc",
		"CAASChina Automotive Systems",
		"CACCamden National Corp",
		"CACBCascade Bancorp",
		"CACCCredit Acceptance Corp",
		"CACGChart Acquisition Corp",
		"CACGUChart Acquisition Corp",
		"CACGWChart Acquisition Corp",
		"CACHCache Inc",
		"CACQCaesars Acquisition Company",
		"CADCChina Advanced Construction",
		"CADXCadence Pharmaceuticals",
		"CAKEThe Cheesecake Factory Inc",
		"CALDCallidus Software",
		"CALIChina Auto Logistics Inc",
		"CALLVocaltec Communications Ltd",
		"CALMCal-Maine Foods",
		"CAMBCambridge Capital Acquisition C",
		"CAMBUCambridge Capital Aquisition",
		"CAMBWCambridge Capital Acquisition C",
		"CAMPCalamp Corp",
		"CAMTCamtek Ltd",
		"CARAvis Budget Group",
		"CARACara Therapeutics Inc.",
		"CARBCarbonite Inc",
		"CARTCarolina Trust Bank",
		"CARVCarver Bancorp",
		"CARZNasdaq Global Auto Index First Trust",
		"CASHMeta Financial Group",
		"CASMCas Medical Systems",
		"CASSCass Information Systems Inc",
		"CASYCaseys General Stores",
		"CATMCardtronics Inc",
		"CATYCathay General Bancorp",
		"CATYWCathay General Bancorp",
		"CAVMCavium Inc",
		"CBAKChina Bak Battery",
		"CBANColony Bankcorp",
		"CBEYCbeyond Inc",
		"CBFCapital Bank Financial Corp",
		"CBINCommunity Bank Shares of Indiana",
		"CBLICleveland Biolabs",
		"CBMXCombimatrix Corp",
		"CBMXWCombimatrix Corp",
		"CBNJCape Bancorp",
		"CBNKChicopee Bancorp",
		"CBOECBOE Holdings",
		"CBPOChina Biologic Products",
		"CBRLCracker Barrel Old Country Store",
		"CBRXColumbia Laboratories",
		"CBSHCommerce Bancshares",
		"CBSTCubist Pharmaceuticals",
		"CBSTZCubist Pharma Cvr",
		"CCBGCapital City Bank Group",
		"CCCLChina Ceramics Co.",
		"CCCRChina Commercial Credit Inc",
		"CCIHChinacache International",
		"CCMPCabot Microelectronics Corp",
		"CCNECnb Financial Corp",
		"CCOICogent Communications Group",
		"CCRNCross Country Healthcare",
		"CCURConcurrent Computer Corp",
		"CCXIChemocentryx Inc",
		"CDNSCadence Design Systems",
		"CDTIClean Diesel Technologies",
		"CDWCDW Corp",
		"CDXSCodexis Inc",
		"CDZICadiz Inc",
		"CECECeco Environmental",
		"CECOCareer Education Corp",
		"CEDUChinaedu Corp",
		"CELGCelgene Corp",
		"CELGZCelgene Corp",
		"CEMIChembio Diagnostics",
		"CEMPCempra Inc",
		"CENTCentral Garden & Pet Company",
		"CENTACentral Garden & Pet Company",
		"CENXCentury Aluminum Company",
		"CERECeres Inc",
		"CERNCerner Corp",
		"CERSCerus Corp",
		"CETVCentral European Media Enterprises",
		"CEVACeva Inc",
		"CFBKCentral Federal Corp",
		"CFFIC&F Financial Corp",
		"CFFNCapitol Federal Financial",
		"CFNBCalifornia First National Bancorp",
		"CFNLCardinal Financial Corp",
		"CGThe Carlyle Group L.P.",
		"CGENCompugen Ltd",
		"CGIXCancer Genetics Inc",
		"CGNXCognex Corp",
		"CGOCalamos Global Total Return Fund",
		"CHCIComstock Homebuilding Companies",
		"CHCOCity Holding Company",
		"CHDNChurchill Downs Inc",
		"CHDXChindex International",
		"CHEFThe Chefs' Warehouse Inc",
		"CHEVCheviot Financial Corp",
		"CHFCChemical Financial Corp",
		"CHFNCharter Financial",
		"CHICalamos Convertible Opportunities",
		"CHKECherokee Inc",
		"CHKPCheck Point Software Technologies Ltd",
		"CHLNChina Housing & Land Development",
		"CHMGChemung Financial Corp",
		"CHNRChina Natural Resources",
		"CHOPChina Gerui Advanced Materials",
		"CHRMCharm Communications Inc",
		"CHRWC.H. Robinson Worldwide",
		"CHSCNCHS Inc",
		"CHSCOCHS Inc Cl B Pfd",
		"CHSCPCHS Inc",
		"CHTPChelsea Therapeutics International",
		"CHTRCharter Communications",
		"CHUYChuy's Holding Inc",
		"CHWCalamos Global Dynamic",
		"CHXFWisdomtree China Dividend Ex-Fi",
		"CHYCalamos Convertible and High",
		"CHYRChyron Corp",
		"CIDMCinedigm Digital Cinema Corp",
		"CIFCCifc Corp",
		"CIMTCimatron Limited",
		"CINFCincinnati Financial Corp",
		"CISAACis Acquisition Ltd",
		"CISAUCis Acquisition Ltd",
		"CISAWCis Acquisition Ltd",
		"CISGCninsure Inc",
		"CIZNCitizens Holding Company",
		"CJJDChina Jo-Jo Drugstores",
		"CKECCarmike Cinemas",
		"CKSWClicksoftware Technologies Ltd",
		"CLACCapitol Acquisition Corp. II",
		"CLACUCapitol Acquisition Corp. II",
		"CLACWCapitol Acquisition Corp. II",
		"CLBHCarolina Bank Holdings Inc",
		"CLCTCollectors Universe",
		"CLDNCelladon Corp",
		"CLDXCelldex Therapeutics Inc",
		"CLFDClearfield",
		"CLIRClearsign Combustion Corporatio",
		"CLMSCalamos Asset Management",
		"CLMTCalumet Specialty Products",
		"CLNEClean Energy Fuels",
		"CLNTCleantech Solutions International Inc",
		"CLROClearone Communications Inc",
		"CLRXTegal Corp",
		"CLSNCelsion Corp",
		"CLTXCelsus Therapeutics Plc.",
		"CLUBTown Sports International Holdings",
		"CLVSClovis Oncology Inc",
		"CLWTEuro Tech Holdings Company",
		"CMCOColumbus Mckinnon Corp",
		"CMCSAComcast Corp",
		"CMCSKComcast Corp",
		"CMECme Group Inc",
		"CMFNCm Finance Inc",
		"CMGEChina Mobile Games and Entertai",
		"CMLSCumulus Media Inc",
		"CMRXChimerix Inc",
		"CMSBCms Bancorp",
		"CMTLComtech Telecommunications",
		"CNATConatus Pharmaceuticals Inc",
		"CNBCCenter Bancorp",
		"CNBKACentury Bancorp",
		"CNCEConcert Pharmaceuticals Inc.",
		"CNDOCoronado Biosciences",
		"CNETChinanet Online Holdings",
		"CNITChina Information Technology",
		"CNMDConmed Corp",
		"CNOBConnectone Bancorp Inc",
		"CNQRConcur Technologies",
		"CNSIComverse",
		"CNSLConsolidated Communications Holdings",
		"CNTFChina Techfaith Wireless",
		"CNTYCentury Casinos",
		"CNVRConversant Inc.",
		"CNYDChina Yida Holding Co.",
		"COACoastal Contacts Inc",
		"COBSolarwinds Inc",
		"COBKColonial Financial Services",
		"COBRCobra Electronics Corp",
		"COBZCobiz Financial Inc",
		"COCOCorinthian Colleges",
		"COHRCoherent Inc",
		"COHUCohu Inc",
		"COKECoca-Cola Bottling Co. Consolidated",
		"COLBColumbia Banking System",
		"COLMColumbia Sportswear Company",
		"COMMCommscope Holding Company Inc",
		"CONECyrusone Inc",
		"CONNConn's Inc",
		"COOLMajesco Entertainment Company",
		"CORECore-Mark Holding Company",
		"CORICorillian Corporation",
		"CORTCorcept Therapeutics Inc",
		"COSICosi Inc",
		"COSTCostco Wholesale Corp",
		"COVSCovisint Corp",
		"COWNCowen Group",
		"CPAHCounterpath Corp",
		"CPGIChina Shengda Packaging Group",
		"CPHCCanterbury Park Holding Corp",
		"CPHDCepheid",
		"CPIXCumberland Pharmaceuticals Inc",
		"CPLACapella Education Company",
		"CPLPCapital Product Partners L.P.",
		"CPRTCopart Inc",
		"CPRXCatalyst Pharmaceutical Partners",
		"CPSIComputer Programs and Systems",
		"CPSLChina Precision Steel",
		"CPSSConsumer Portfolio Services",
		"CPSTCapstone Turbine Corp",
		"CPTACapitala Finance Corp",
		"CPWRCompuware Corp",
		"CPXXCelator Pharma",
		"CRAICra Internationalinc.",
		"CRAYCray Inc",
		"CRDCCardica Inc",
		"CRDSCrossroads Systems",
		"CREECree Inc",
		"CREGChina Recycling Energy Corp",
		"CRESWCresud S.A.C.I.F. Y A.",
		"CRESYCresud S.A.C.I.F. Y A.",
		"CRISCuris Inc",
		"CRMBCrumbs Bake Shop Inc",
		"CRMBUCrumbs Bake Shop Inc. Un",
		"CRMBWCrumbs Bake Shope Inc. Wt",
		"CRMECardiome Pharma Corp",
		"CRMTAmerica's Car-Mart",
		"CRNTCeragon Networks Ltd",
		"CROXCrocs Inc",
		"CRRCCourier Corp",
		"CRRSCorp Res Svcs Inc",
		"CRTOCriteo S.A.",
		"CRUSCirrus Logic",
		"CRVLCorvel Corp",
		"CRWNCrown Media Holdings",
		"CRWSCrown Crafts",
		"CRZOCarrizo Oil & Gas",
		"CSBKClifton Savings Bancorp",
		"CSCDCascade Microtech",
		"CSCOCisco Systems",
		"CSFLCenterstate Banks",
		"CSGPCostar Group",
		"CSGSCsg Systems International",
		"CSIICardiovascular Systems",
		"CSIQCanadian Solar Inc",
		"CSODCornerstone Ondemand Inc",
		"CSPICsp Inc",
		"CSQCalamos Strategic Total Return Fund",
		"CSRECsr Plc",
		"CSTECaesarstone Sdot-Yam Ltd",
		"CSUNChina Sunergy Co.",
		"CSWCCapital Southwest Corp",
		"CTASCintas Corp",
		"CTBICommunity Trust Bancorp",
		"CTCMCtc Media",
		"CTCTConstant Contact",
		"CTGComputer Task Group Inc",
		"CTHRCharles & Colvard Ltd",
		"CTIBCti Industries Corp",
		"CTICCell Therapeutics",
		"CTRLControl4 Corp",
		"CTRNCiti Trends",
		"CTRPCtrip.Com International",
		"CTRXCatamaran Corp",
		"CTSHCognizant Technology Solutions",
		"CTWSConnecticut Water Service",
		"CTXSCitrix Systems",
		"CUISE Global Copper Index First Trust",
		"CUBAThe Herzfeld Caribbean Basin Fund",
		"CUBICustomers Bancorp",
		"CUBILCustomers Bancorp Inc",
		"CUICui Global Inc",
		"CUNBCalifornia United Bk",
		"CUTRCutera Inc",
		"CVBFCvb Financial Corp",
		"CVCOCavco Industries",
		"CVCYCentral Valley Community Bancorp",
		"CVGICommercial Vehicle Group",
		"CVGWCalavo Growers",
		"CVLTCommvault Systems",
		"CVLYCodorus Valley Bancorp Inc",
		"CVTICovenant Transportation Group",
		"CVVCVD Equipment Corp",
		"CWAYCoastway Bancorp Inc.",
		"CWBCCommunity West Bancshares",
		"CWCOConsolidated Water Co. Ltd",
		"CWSTCasella Waste Systems",
		"CWTRColdwater Creek",
		"CXDCChina Xd Plastics Company",
		"CYCypress Semiconductor Corp",
		"CYANCyanotech Corp",
		"CYBECyberoptics Corp",
		"CYBXCyberonics Inc",
		"CYCCCyclacel Pharmaceuticals",
		"CYCCPCyclacel Pharmaceuticals",
		"CYHHZCommunity Health Systems Inc.",
		"CYNOCynosure Inc",
		"CYOUChangyou.Com Limited",
		"CYRNCyren Ltd.",
		"CYTKCytokinetics Inc",
		"CYTRCytrx Corp",
		"CYTXCytori Therapeutics Inc",
		"CYTXWCytori Therapeutics Inc",
		"CZFCCitizens First Corp",
		"CZNCCitizens & Northern Corp",
		"CZRCaesars Entertainment Corporati",
		"CZWICitizens Community Bancorp",
		"DAEGUnify Corp",
		"DAIOData I/O Corp",
		"DAKTDaktronics",
		"DARADara Biosciences",
		"DATEJiayuan.Com International Ltd",
		"DAVEFamous Dave's of America",
		"DBLEDouble Eagle Petroleum Company",
		"DBLEPDouble Eagle Petroleum Company",
		"DCINDigital Cinema Destinations Cor",
		"DCIXDiana Containerships Inc",
		"DCOMDime Community Bancshares",
		"DCTHDelcath Systems",
		"DECKDeckers Outdoor Corp",
		"DENNDenny's Corp",
		"DEPODepomed Inc",
		"DESTDestination Maternity Corp",
		"DFRGDel Frisco's Restaurant Group Llc.",
		"DFZR.G. Barry Corp",
		"DGASDelta Natural Gas Company",
		"DGICADonegal Group",
		"DGICBDonegal Group",
		"DGIIDigi International Inc",
		"DGLD3X Inverse Gold ETN Velocityshares",
		"DGLYDigital Ally",
		"DGREWisdomtree Emerging Markets Dividend",
		"DGRSWisdomtree U.S. Smallcap Dividend",
		"DGRWWisdomtree U.S. Dividend Growth",
		"DHILDiamond Hill Investment Group",
		"DHRMDehaier Medical Systems",
		"DIODDiodes Inc",
		"DISCADiscovery Communications Inc",
		"DISCBDiscovery Communications Inc",
		"DISCKDiscovery Communications Inc",
		"DISHDish Network Corp",
		"DJCODaily Journal Corp. [S.C.]",
		"DLHCDlh Holdings Corp",
		"DLIADelia*S Inc",
		"DLLRDollar Financial",
		"DLNGDynagas Lng Partners LP",
		"DLTRDollar Tree",
		"DMLPDorchester Minerals L.P.",
		"DMNDDiamond Foods",
		"DMRCDigimarc Corp",
		"DNBFDnb Financial Corp",
		"DNDNDendreon Corp",
		"DNKNDunkin' Brands Group Inc",
		"DORMDorman Products",
		"DOVRDover Saddlery",
		"DOXAmdocs Limited",
		"DPRXDipexium Pharmaceuticals Llc",
		"DRADDigirad Corp",
		"DRAMDataram Corp",
		"DRIVDigital River",
		"DRNADicerna Pharmaceuticals Inc",
		"DRRXDurect Corp",
		"DRTXDurata Therapeutics Inc",
		"DRWIDragonwave Inc",
		"DRYSDryships Inc",
		"DSCIDerma Sciences",
		"DSCODiscovery Laboratories",
		"DSGXThe Descartes Systems Group Inc",
		"DSKXDs Healthcare Group Inc",
		"DSLV3X Inverse Silver ETN Velocityshares",
		"DSPGDSP Group",
		"DSWLDeswell Industries",
		"DTLKDatalink Corp",
		"DTSIDTS Inc",
		"DTVDirectv",
		"DVAXDynavax Technologies Corp",
		"DVCRDiversicare Healthcare Services Inc",
		"DWADreamworks Animation Skg",
		"DWCHDatawatch Corp",
		"DWSNDawson Geophysical Company",
		"DXCMDexcom Inc",
		"DXGEWisdomtree Germany Hedged Equity",
		"DXJSWisdomtree Japan Hedged Smallcap",
		"DXKWWisdomtree Korea Hedged Equity",
		"DXLGCasual Male Retail Group",
		"DXMDex Media Inc",
		"DXPEDxp Enterprises",
		"DXPSWisdomtree United Kingdom Hedge",
		"DXYNThe Dixie Group",
		"DYAXDyax Corp",
		"DYNTDynatronics Corp",
		"DYSLDynasil Corporation of America",
		"EAElectronic Arts Inc",
		"EACErickson Air-Crane Incorporated",
		"EAGLGlobal Eagle Entertainment Inc",
		"EAGLUSilver Eagle Acquisition Corp",
		"EAGLWGlobal Eagle Wrnts",
		"EBAYEbay Inc",
		"EBIOEleven Biotherapeutics Inc.",
		"EBIXEbix Inc",
		"EBMTEagle Bancorp Montana",
		"EBSBMeridian Interstate Bancorp",
		"EBTCEnterprise Bancorp Inc",
		"ECHOEcho Global Logistics",
		"ECOLUS Ecology",
		"ECPGEncore Capital Group Inc",
		"ECTEEcho Therapeutics",
		"ECYTEndocyte Inc",
		"EDAPEdap Tms S.A.",
		"EDGWEdgewater Technology",
		"EDMCEducation Management Corp",
		"EDSExceed Company Ltd",
		"EDUCEducational Development Corp",
		"EEFTEuronet Worldwide",
		"EEIEcology and Environment",
		"EEMAEmrg Mkts Asia MSCI Ishares",
		"EEMEEmrg Mkts EMEA MSCI Ishares",
		"EEMLEmrg Mkts Latin Amer MSCI Ishares",
		"EFIIElectronics For Imaging",
		"EFSCEnterprise Financial Services Corp",
		"EFUTEfuture Information Technology Inc",
		"EGANEgain Comm Corp",
		"EGBNEagle Bancorp",
		"EGHT8X8 Inc",
		"EGLEEagle Bulk Shipping Inc",
		"EGLTEgalet Corp",
		"EGOVNic Inc",
		"EGRWEmrg Mkts Growth MSCI Ishares",
		"EGRXEagle Pharmaceuticals Inc.",
		"EGTEntertainment Gaming Asia Inc",
		"EHTHEhealth Inc",
		"EIGIEndurance International Group H",
		"ELGXEndologix Inc",
		"ELNKEarthlink Inc",
		"ELONEchelon Corp",
		"ELOSSyneron Medical Ltd",
		"ELRCElectro Rent Corp",
		"ELSEElectro-Sensors",
		"ELTKEltek Ltd",
		"EMCBEmrg Mkts Corporate Bond ETF Wisdomtree",
		"EMCFEmclaire Financial Corp",
		"EMCGWisdomtree Emerging Markets Con",
		"EMCIEMC Insurance Group",
		"EMDIEmrg Mkts Cons Disc MSCI Ishares",
		"EMDRVelocityshares Emerging Markets",
		"EMEYEmrg Mkts Energy Sector Capped MSCI Ishares",
		"EMFNEmrg Mkts Financials Idx MSCI Ishares",
		"EMIFS&P Emrg Mkts Infrastructure Ishares",
		"EMITFElbit Imaging Ltd",
		"EMKREmcore Corp",
		"EMLEastern Company",
		"EMMSEmmis Communications Corp",
		"EMMSPEmmis Communications Corp",
		"EMMTEmrg Mkts Materials Idx MSCI Ishares",
		"ENDPEndo Pharmaceuticals Holdings Inc",
		"ENGEnglobal Corp",
		"ENMDEntremed Inc",
		"ENOCEnernoc Inc",
		"ENPHEnphase Energy Inc",
		"ENSGThe Ensign Group",
		"ENTGlobal Eagle Entertainment Inc",
		"ENTAEnanta Pharmaceuticals Inc",
		"ENTGEntegris Inc",
		"ENTREntropic Communications",
		"ENVIEnvivio Inc",
		"ENZNEnzon Pharmaceuticals",
		"ENZYEnzymotec Ltd",
		"EONCEon Communications Corp",
		"EOPNE2Open Inc",
		"EPAXAmbassadors Group",
		"EPAYBottomline Technologies",
		"EPIQEpiq Systems",
		"EPZMEpizyme Inc",
		"EQIXEquinix Inc",
		"ERICLm Ericsson Telephone Company",
		"ERIEErie Indemnity Company",
		"ERIIEnergy Recovery",
		"EROCEagle Rock Energy Partners L.P.",
		"ERSEmpire Res Inc",
		"ERWVelocityshares Equal Risk Weigh",
		"ESBFEsb Financial Corp",
		"ESBKElmira Savings Bank Fsb",
		"ESCAEscalade Inc",
		"ESCREscalera Resources Co.",
		"ESCRPEscalera Resources Co.",
		"ESEAEuroseas Ltd",
		"ESGREnstar Group Limited",
		"ESIOElectro Scientific Industries",
		"ESLTElbit Systems Ltd",
		"ESMCEscalon Medical",
		"ESPREsperion Therapeutics Inc",
		"ESRXExpress Scripts",
		"ESSAEssa Bancorp",
		"ESSXEssex Rental Corp",
		"ESXBCommunity Bankers Trust Corp",
		"ESYSElecsys Corp",
		"ETFCE*Trade Financial Corp",
		"ETRMEnteromedics Inc",
		"EUFNEurope Financials Index MSCI Ishares",
		"EVALEmrg Mkts Value MSCI Ishares",
		"EVBSEastern Virginia Bankshares",
		"EVEPEv Energy Partners L.P.",
		"EVOKEvoke Pharma Inc",
		"EVOLEvolving Systems",
		"EVRYEveryware Global Inc",
		"EWBCEast West Bancorp",
		"EXAExa Corp",
		"EXACExactech Inc",
		"EXASExact Sciences Corp",
		"EXELExelixis Inc",
		"EXFOExfo Inc",
		"EXLPExterran Partners L.P.",
		"EXLSExlservice Holdings",
		"EXPDExpeditors International of Washington",
		"EXPEExpedia Inc",
		"EXPOExponent Inc",
		"EXTRExtreme Networks",
		"EXXIEnergy Xxi [Bermuda] Limited",
		"EZCHEzchip Semiconductor Limited",
		"EZPWEzcorp Inc",
		"FALCFalconstor Software",
		"FANGDiamondback Energy Inc",
		"FARMFarmer Brothers Company",
		"FAROFaro Technologies",
		"FASTFastenal Company",
		"FATEFate Therapeutics Inc",
		"FBFacebook Inc",
		"FBIZFirst Business Financial Services",
		"FBMIFirstbank Corp",
		"FBMSThe First Bancshares",
		"FBNCFirst Bancorp",
		"FBNKFirst Connecticut Bancorp Inc",
		"FBRCFbr & Co",
		"FBSSFauquier Bankshares",
		"FCAPFirst Capital",
		"FCBCFirst Community Bancshares",
		"FCCOFirst Community Corp",
		"FCCY1St Constitution Bancorp [Nj]",
		"FCELFuelcell Energy",
		"FCFSFirst Cash Financial Services",
		"FCHIFTSE China [Hk Listed] Index Ishares",
		"FCLFFirst Clover Leaf Financial",
		"FCNCAFirst Citizens Bancshares",
		"FCSFairchild Semiconductor International",
		"FCTY1St Century Bancshares Inc",
		"FCVAFirst Capital Bancorp Inc. [Va]",
		"FCZAFirst Citizens Banc",
		"FCZAPFirst Citizens Banc Corp.",
		"FDEFFirst Defiance Financial",
		"FDMLFederal-Mogul Corp",
		"FDUSFidus Investment Corp",
		"FEFNFar East Financials Index MSCI Ishares",
		"FEICFei Company",
		"FEIMFrequency Electronics",
		"FELEFranklin Electric Co.",
		"FESForbes Energy Svcs",
		"FEYEFireeye Inc",
		"FFBCFirst Financial Bancorp",
		"FFBCWFirst Financial Bancorp",
		"FFBHFirst Federal Bancshares of Arkansas",
		"FFCOFedfirst Financial Corp",
		"FFHLFuwei Films Co.",
		"FFICFlushing Financial Corp",
		"FFINFirst Financial Bankshares",
		"FFIVF5 Networks",
		"FFKTFarmers Capital Bank Corp",
		"FFKYFirst Financial Service Corp",
		"FFNMFirst Federal of Northern Michigan Bancorp",
		"FFNWFirst Financial Northwest",
		"FHCOFemale Health Company",
		"FIBKFirst Interstate Bancsystem",
		"FINLThe Finish Line",
		"FISHMarlin Midstream Partners LP",
		"FISIFinancial Institutions",
		"FISVFiserv Inc",
		"FITBFifth Third Bancorp",
		"FITBIFifth Third Bancorp",
		"FIVEFive Below Inc",
		"FIZZNational Beverage",
		"FLDMFluidigm Corp",
		"FLEXFlextronics International Ltd",
		"FLICThe First of Long Island Corp",
		"FLIRFlir Systems",
		"FLLFull House Resorts",
		"FLMLFlamel Technologies S.A.",
		"FLWS1-800 Flowers.Com",
		"FLXNFlexion Therapeutics Inc",
		"FLXSFlexsteel Industries",
		"FMBIFirst Midwest Bancorp",
		"FMERFirstmerit Corp",
		"FMIFoundation Medicine Inc",
		"FMNBFarmers Natl Banc Corp Oh",
		"FNFGFirst Niagara Financial Group Inc",
		"FNGNFinancial Engines",
		"FNHC21St Century Holding Company",
		"FNLCFirst Bancorp Inc [Me]",
		"FNRGForcefield Energy Inc",
		"FNSRFinisar Corp",
		"FOLDAmicus Therapeutics",
		"FONENasdaq Cea Smartphone First Trust",
		"FONRFonar Corp",
		"FORDForward Industries",
		"FORMFormfactor",
		"FORRForrester Research",
		"FORTYFormula Systems Ltd",
		"FOSLFossil Inc",
		"FOX21St Century Fox Class B",
		"FOXA21St Century Fox Class A",
		"FOXFFox Factory Holding Corp",
		"FPRXFive Prime Therapeutics Inc",
		"FRANFrancesca's Holdings Corporatio",
		"FRBAFirst Bank [Nj]",
		"FRBKRepublic First Bancorp",
		"FREDFred's Inc",
		"FREEFreeseas Inc",
		"FRGIFiesta Restaurant Group Inc",
		"FRMEFirst Merchants Corp",
		"FRNKFranklin Financial Corp",
		"FRPFairpoint Communications",
		"FSBKFirst South Bancorp Inc",
		"FSBWFS Bancorp Inc",
		"FSCFifth Street Finance Corp",
		"FSCFLFifth Street Finance Corp",
		"FSFGFirst Savings Financial Group",
		"FSFRFifth Street Senior Floating Ra",
		"FSGIFirst Security Group",
		"FSLRFirst Solar",
		"FSRVFirstservice Corp",
		"FSTRL.B. Foster Company",
		"FSYSFuel Systems Solutions",
		"FTCSStrategic Value Index First Trust",
		"FTDFtd Companies Inc",
		"FTEKFuel Tech",
		"FTGCFirst Trust Global Tact Commodity Strategy",
		"FTHIFirst Trust High Income ETF",
		"FTLBFirst Trust Low Beta Income ETF",
		"FTNTFortinet Inc",
		"FTRFrontier Communications Corp",
		"FTSLFirst Trust Senior Loan Fund Et",
		"FUBC1St United Bancorp Inc. [Fl]",
		"FUELRocket Fuel Inc.",
		"FULLFull Circle Capital Corp",
		"FULLLFull Circle Capital Corp",
		"FULTFulton Financial Corp",
		"FUNCFirst United Corp",
		"FUNDRoyce Focus Trust",
		"FURXFuriex Pharmaceuticals",
		"FVFirst Trust Dorsey Wright Focus",
		"FWLTFoster Wheeler Ag.",
		"FWMFairway Group Holdings Corp",
		"FWRDForward Air Corp",
		"FXCBFox Chase Bancorp",
		"FXENFX Energy",
		"GABCGerman American Bancorp",
		"GAGALe Gaga Holdings",
		"GAIGlobal-Tech Advanced Innovations Inc",
		"GAIAGaiam Inc",
		"GAINGladstone Investment Corp",
		"GAINPGladstone Investment Corporatio",
		"GALEGalena Biopharma",
		"GALTGalectin Therapeutics Inc",
		"GALTUGalectin Therapeutics Inc",
		"GALTWGalectin Therapeutics Inc",
		"GAMEShanda Games Limited",
		"GARSGarrison Capital Inc",
		"GASSStealthgas",
		"GBCIGlacier Bancorp",
		"GBDCGolub Capital Bdc",
		"GBLIGlobal Indemnity Plc",
		"GBNKGuaranty Bancorp",
		"GCBCGreene County Bancorp",
		"GCVRZSanofi-Aventis Cvr",
		"GDEFGlobal Defense & National Secur",
		"GENCGencor Industries Inc",
		"GENEGenetic Technologies Ltd",
		"GENTGentium Spa",
		"GEOSOyo Geospace Corp",
		"GERNGeron Corp",
		"GEVASynageva Biopharma Corp",
		"GEVOGevo Inc",
		"GFEDGuaranty Federal Bancshares",
		"GFNGeneral Finance Corp",
		"GFNCPGeneral Financial",
		"GGALGrupo Financiero Galicia S.A.",
		"GHDXGenomic Health",
		"GIFIGulf Island Fabrication",
		"GIGAGiga-Tronics Inc",
		"GIGMGigamedia Limited",
		"GIIIG-III Apparel Group",
		"GILDGilead Sciences",
		"GILTGilat Satellite Networks Ltd",
		"GKG&K Services",
		"GKNTGeeknet Inc",
		"GLADGladstone Capital Corp",
		"GLADPGladstone Capital Corp",
		"GLBSGlobus Maritime Limited",
		"GLBZGlen Burnie Bancorp",
		"GLCBWisdomtree Global Corporate Bon",
		"GLCHGleacher & Company",
		"GLDCGolden Enterprises",
		"GLDDGreat Lakes Dredge & Dock Corp",
		"GLDICredit Suisse Ag",
		"GLMDGalmed Pharmaceuticals Ltd.",
		"GLNGGolar Lng Limited",
		"GLPIGaming and Leisure Properties",
		"GLPWGlobal Power Equipment Group Inc",
		"GLREGreenlight Capital Re",
		"GLUUGlu Mobile Inc",
		"GLYCGlycomimetics Inc",
		"GMANGordmans Stores",
		"GMCRKeurig Green Mountain Inc.",
		"GMETPGeomet",
		"GMLPGolar Lng Partners LP",
		"GNCAGenocea Biosciences Inc.",
		"GNCMAGeneral Communication",
		"GNMAGNMA Bond Ishares",
		"GNMKGenmark Diagnostics",
		"GNTXGentex Corp",
		"GNVCGenvec Inc",
		"GOGOGogo Inc",
		"GOLDRandgold Resources Limited",
		"GOMOSungy Mobile Limited",
		"GOOAVGoogle Inc Class A Ex-Dist",
		"GOOCVGoogle Inc Class C",
		"GOODGladstone Commercial Corp",
		"GOODNGladstone Commercial Corporatio",
		"GOODOGladstone Commercial Corp",
		"GOODPGladstone Commercial Corp",
		"GOOGGoogle Inc Class C",
		"GOOGLGoogle Inc",
		"GPICGaming Partners International Corp",
		"GPORGulfport Energy Corp",
		"GPRCGuanwei Recycling",
		"GPREGreen Plains Renewable Energy",
		"GRFSGrifols S.A.",
		"GRIDNasdaq Clean Edge Smart Grid First Trust",
		"GRIFGriffin Land & Nurseries",
		"GRMNGarmin Ltd",
		"GROWU.S. Global Investors",
		"GRPNGroupon Inc",
		"GRVYGravity Co.",
		"GSBCGreat Southern Bancorp",
		"GSIGGsi Group Inc",
		"GSITGsi Technology",
		"GSJKCompressco Partners L.P.",
		"GSMGlobe Specialty Metals Inc",
		"GSOLGlobal Sources Ltd",
		"GSVCNext Innovation Corp",
		"GTGoodyear Tire & Rubber Company",
		"GTATGt Advanced Technologies Inc",
		"GTIMGood Times Restaurants Inc",
		"GTIVGentiva Health Services",
		"GTLSChart Industries",
		"GTPPPGoodyear Tire & Rubber Co.",
		"GTWNGeorgetown Bancp Ma",
		"GTXIGTX Inc",
		"GUIDGuidance Software",
		"GULFMiddle East Dividend Wisdomtree",
		"GUREGulf Resources",
		"GWPHGw Pharmaceuticals Plc Ads",
		"GYROGyrodyne Company of America",
		"HAHawaiian Holdings",
		"HAFCHanmi Financial Corp",
		"HAINHain Celestial Group",
		"HALLHallmark Financial Services",
		"HALOHalozyme Therapeutics",
		"HARTHarvard Apparatus Regenerative",
		"HASHasbro Inc",
		"HASTHastings Entertainment",
		"HAWKBlackhawk Network Holdings Inc",
		"HAWKVBlackhawk Network Holdings Inc",
		"HAYNHaynes International",
		"HBANHuntington Bancshares Inc",
		"HBANPHuntington Bancshares Inc",
		"HBCPHome Bancorp",
		"HBHCHancock Holding Company",
		"HBIOHarvard Bioscience",
		"HBKHamilton Bancorp Inc",
		"HBMDHoward Bancorp MD",
		"HBNCHorizon Bancorp [In]",
		"HBNKHampden Bancorp",
		"HBOSHeritage Financial Group",
		"HBPHuttig Bldg Products",
		"HCACHennessy Capital Acquisition Co",
		"HCACUHennessy Capital Acquisition Co",
		"HCACWHennessy Capital Acquisition Co",
		"HCAPHarvest Capital Credit Corporat",
		"HCBKHudson City Bancorp",
		"HCCIHeritage-Crystal Clean",
		"HCKTThe Hackett Group",
		"HCOMHawaiian Telcom Hold",
		"HCSGHealthcare Services Group",
		"HDNGHardinge Inc",
		"HDSHD Supply Holdings Inc",
		"HDSNHudson Technologies",
		"HEESH&E Equipment Services",
		"HELEHelen of Troy Limited",
		"HEOPHeritage Oaks Bancorp",
		"HEROHercules Offshore",
		"HFBCHopfed Bancorp",
		"HFBLHome Federal Bancorp Inc. of Louisiana",
		"HFFCHF Financial",
		"HFWAHeritage Financial Corp",
		"HGSHChina Hgs Real Estate",
		"HIBBHibbett Sports",
		"HIFSHingham Institution For Savings",
		"HIHOHighway Holdings",
		"HIIQHealth Insurance Innovations I",
		"HILLDot Hill Systems Corp",
		"HIMXHimax Technologies",
		"HITKHi-Tech Pharmacal Co.",
		"HITTHittite Microwave Corp",
		"HKTVHong Kong Television Network Ltd. Ads",
		"HLITHarmonic Inc",
		"HLSSHome Loan Servicing Solutions",
		"HMHCHoughton Mifflin Harcourt C",
		"HMINHome Inns & Hotels Management Inc",
		"HMNFHmn Financial",
		"HMNYHelios & Matheson North America Inc",
		"HMPRHampton Roads Bankshares Inc",
		"HMSTHomestreet Inc",
		"HMSYHms Holdings Corp",
		"HMTVHemisphere Media",
		"HNHHandy & Harman Ltd",
		"HNRGHallador Energy Company",
		"HNSNHansen Medical",
		"HOFTHooker Furniture Corp",
		"HOLIHollysys Automation Technologies",
		"HOLXHologic Inc",
		"HOMBHome Bancshares",
		"HOMEHome Federal Bancorp",
		"HOTRChanticleer Holdings Inc",
		"HOTRWChanticleer Holdings Inc",
		"HOVNPHovnanian Enterprises Inc",
		"HPACHyde Park Acquisition Corp. II",
		"HPJHong Kong Highpower Technology",
		"HPTXHyperion Therapeutics Inc",
		"HRTXHeron Therapeutics Inc.",
		"HRZNHorizon Technology Finance Corp",
		"HSICHenry Schein",
		"HSIIHeidrick & Struggles International",
		"HSKAHeska Corp",
		"HSNIHSN Inc",
		"HSOLHanwha Solarone Co. Ltd",
		"HSONHudson Global Inc",
		"HSTMHealthstream Inc",
		"HTBIHometrust Bancshares Inc",
		"HTBKHeritage Commerce Corp",
		"HTBXHeat Biologics Inc",
		"HTCHHutchinson Technology Inc",
		"HTCOHickory Tech Corp",
		"HTHTChina Lodging Group Limited",
		"HTLDHeartland Express",
		"HTLFHeartland Financial USA",
		"HTWOHf2 Financial Management Inc",
		"HTWRHeartware International",
		"HUBGHub Group",
		"HURCHurco Companies",
		"HURNHuron Consulting Group Inc",
		"HWAYHealthways Inc",
		"HWBKHawthorn Bancshares",
		"HWCCHouston Wire & Cable Company",
		"HWKNHawkins Inc",
		"HYGSHydrogenics Corp",
		"HYLSFirst Trust High Yield Long/Sho",
		"HYNDWisdomtree Bofa Merrill Lynch H",
		"HYZDWisdomtree Bofa Merrill Lynch H",
		"HZNPHorizon Pharma Inc",
		"IACIIac/Interactivecorp",
		"IARTIntegra Lifesciences Holdings Corp",
		"IBBNasdaq Biotechnology Ishares",
		"IBCAIntervest Bancshares",
		"IBCPIndependent Bank Corp",
		"IBKCIberiabank Corp",
		"IBKRInteractive Brokers Group",
		"IBOCInternational Bancshares Corp",
		"IBTXIndependent Bank Group Inc",
		"ICADIcad Inc",
		"ICCCImmucell Corp",
		"ICELCellular Dynamics International",
		"ICFIIcf International",
		"ICGEInternet Capital Group",
		"ICLDIntercloud Systems Inc",
		"ICLDWIntercloud Systems Inc",
		"ICLNS&P Global Clean Energy Index Ishares",
		"ICLRIcon Plc",
		"ICONIconix Brand Group",
		"ICPTIntercept Pharmaceuticals Inc",
		"ICUIIcu Medical",
		"IDCCInterdigital",
		"IDIXIdenix Pharmaceuticals",
		"IDRAIdera Pharmaceuticals",
		"IDSAIndustrial Services of America",
		"IDSYI.D. Systems",
		"IDTIIntegrated Device Technology",
		"IDXXIdexx Laboratories",
		"IEPIcahn Enterprises L.P.",
		"IESCIntegrated Electrical Services",
		"IFASFTSE Epra/Nareit Dev Asia Idx Ishares",
		"IFEUFTSE Epra/Nareit Dev EU Idx Ishares",
		"IFGLFTSE Epra/Nareit Dev Re Ex-US Ishares",
		"IFNAFTSE Epra/Nareit North America Ishares",
		"IFONInfosonics Corp",
		"IFSMFTSE Dev Sm Cap Ex-North Amer Ishares",
		"IGLDInternet Gold Golden Lines Ltd",
		"IGOVS&P/Citi Intl Treasury Bond Ishares",
		"IGTEIgate Corp",
		"IIIInformation Services Group",
		"IIINInsteel Industries",
		"IIJIInternet Initiative Japan",
		"IILGInterval Leisure Group",
		"IINIntricon Corp",
		"IIVIIi-Vi Inc",
		"IKANIkanos Communications",
		"IKGHIao Kun Group Holding Co.",
		"IKNXIkonics Corp",
		"ILMNIllumina Inc",
		"IMCBIntermountain Comm",
		"IMGNImmunogen",
		"IMIIntermolecular Inc",
		"IMKTAIngles Markets Inc",
		"IMMRImmersion Corp",
		"IMMUImmunomedics",
		"IMMYImprimis Pharmaceuticals Inc",
		"IMOSChipmos Technologies [Bermuda] Ltd",
		"IMRSImris Inc",
		"INAPInternap Network Services Corp",
		"INBKFirst Internet Bancorp",
		"INCYIncyte Corp",
		"INDBIndependent Bank",
		"INDYS&P India Nifty 50 Index Ishares",
		"INFAInformatica Corp",
		"INFIInfinity Pharmaceuticals",
		"INFNInfinera Corp",
		"INGNInogen Inc",
		"ININInteractive Intelligence",
		"INODInnodata Isogen Inc",
		"INPHInterphase Corp",
		"INSMInsmed Inc",
		"INSYInsys Therapeutics Inc",
		"INTCIntel Corp",
		"INTGThe Intergroup Corp",
		"INTLIntl Fcstone Inc",
		"INTLLIntl Fcstone Inc",
		"INTUIntuit Inc",
		"INTXIntersections",
		"INVEIdentive Group",
		"INWKInnerworkings",
		"INXBInfinity Cross Border Acquisiti",
		"INXBUInfinity Cross Border Acquisiti",
		"INXBWInfinity Cross Border Acquisiti",
		"IOSPInnospec Inc",
		"IPARInter Parfums",
		"IPASIpass Inc",
		"IPCCInfinity Property and Casualty Corp",
		"IPCIIntellipharmaceutics International Inc",
		"IPCMIPC The Hospitalist Company",
		"IPDNProfessional Diversity Network",
		"IPGPIpg Photonics Corp",
		"IPHSInnophos Holdings",
		"IPKWPowershares International Buyba",
		"IPWRIdeal Power Inc.",
		"IPXLImpax Laboratories",
		"IQNTNeutral Tandem",
		"IRBTIrobot Corp",
		"IRDMIridium Communications Inc",
		"IRDMZIridium Communications Inc",
		"IRGIgnite Restaurant Group Inc",
		"IRIXIridex Corp",
		"IROQIf Bancorp Inc",
		"IRWDIronwood Pharmaceuticals",
		"ISBCInvestors Bancorp",
		"ISCAInternational Speedway Corp",
		"ISHGS&P/Citi 1-3 Yr Intl Treasury Bd Ishares",
		"ISIGInsignia Systems",
		"ISILIntersil Corp",
		"ISISIsis Pharmaceuticals",
		"ISLEIsle of Capri Casinos",
		"ISMSLM Corp",
		"ISNSImage Sensing Systems",
		"ISRGIntuitive Surgical",
		"ISRLIsramco Inc",
		"ISSCInnovative Solutions and Support",
		"ISSIIntegrated Silicon Solution",
		"ITCIIntra-Cellular Ther",
		"ITICInvestors Title Company",
		"ITMNIntermune Inc",
		"ITRIItron Inc",
		"ITRNIturan Location and Control Ltd",
		"IVACIntevac Inc",
		"IVANIvanhoe Energy",
		"IXYSIxys Corp",
		"JACKJack In The Box Inc",
		"JACQCollabrium Japan Acquisition Co",
		"JACQUCollabrium Japan Acquisition Co",
		"JACQWCollabrium Japan Acquisition Co",
		"JAKKJakks Pacific",
		"JASOJA Solar Holdings Co.",
		"JAXBJacksonville Bancorp",
		"JAZZJazz Pharmaceuticals",
		"JBHTJ.B. Hunt Transport Services",
		"JBLUJetblue Airways Corp",
		"JBSSJohn B. Sanfilippo & Son",
		"JCOMJ2 Global Communications Inc",
		"JCSCommunications Systems",
		"JCTCFJewett-Cameron Trading Company",
		"JDSUJds Uniphase Corp",
		"JFBIJefferson Bancshares",
		"JGBBWisdomtree Japan Interest Rate",
		"JIVEJive Software Inc",
		"JJSFJ & J Snack Foods",
		"JKHYJack Henry & Associates",
		"JMBAJamba Inc",
		"JOBS51Job Inc",
		"JOEZJoe's Jeans Inc",
		"JOSBJos. A. Bank Clothiers",
		"JOUTJohnson Outdoors Inc",
		"JRCCJames River Coal Company",
		"JRJCChina Finance Online Co. Limited",
		"JSMSLM Corp",
		"JSTJinpan International Limited",
		"JTPYJetpay Corp",
		"JVACoffee Holding Co.",
		"JXSBJacksonville Bancorp Inc",
		"KALUKaiser Aluminum Corp",
		"KBALBKimball International",
		"KBIOKalobios Pharmaceuticals Inc",
		"KCAPKohlberg Capital Corp",
		"KCLIKansas City Life Insurance Company",
		"KELYAKelly Services",
		"KELYBKelly Services",
		"KEQUKewaunee Scientific Corp",
		"KERXKeryx Biopharmaceuticals",
		"KEYWThe Keyw Holding Corp",
		"KFFBKentucky First Federal Bancorp",
		"KFRCKforce Inc",
		"KFXKofax Ltd.",
		"KGJIKingold Jewelry Inc",
		"KINKindred Biosciences Inc.",
		"KINSKingstone Companies Inc",
		"KIORKior Inc",
		"KIPOKeating Capital Inc",
		"KIPSKips Bay Medical",
		"KIRKKirkland's Inc",
		"KLACKla-Tencor Corp",
		"KLICKulicke and Soffa Industries",
		"KMDAKamada Ltd",
		"KNDIKandi Technolgies",
		"KONAKona Grill",
		"KONEKingtone Wirelessinfo Solution",
		"KONGKongzhong Corp",
		"KOOLThermogenesis",
		"KOPNKopin Corp",
		"KOSSKoss Corp",
		"KPTIKaryopharm Therapeutics Inc",
		"KRFTKraft Foods Group Inc",
		"KRNYKearny Financial",
		"KTCCKey Tronic Corp",
		"KTECKey Technology",
		"KTOSKratos Defense & Security Solutions",
		"KUTVKu6 Media Co.",
		"KVHIKvh Industries",
		"KWEBKraneshares Csi China Internet",
		"KYTHKythera Biopharmaceuticals Inc",
		"LABCLouisiana Bancorp",
		"LABLMulti-Color Corp",
		"LACOLakes Entertainment",
		"LAKELakeland Industries",
		"LAMRLamar Advertising Company",
		"LANCLancaster Colony Corp",
		"LANDGladstone Land Corp",
		"LARKLandmark Bancorp Inc",
		"LAWSLawson Products",
		"LAYNLayne Christensen Company",
		"LBAILakeland Bancorp",
		"LBIXLeading Brands Inc",
		"LBTYALiberty Global",
		"LBTYBLiberty Global",
		"LBTYKLiberty Global",
		"LCAVLca-Vision Inc",
		"LCNBLcnb Corp",
		"LCUTLifetime Brands",
		"LDRHLdr Holding Corp",
		"LEAPLeap Wireless International",
		"LECOLincoln Electric Holdings",
		"LEDMVLands' End Inc.",
		"LEDSSemileds Corp",
		"LEVYLevy Acquisition Corp.",
		"LEVYULevy Acquisition Corp",
		"LEVYWLevy Acquisition Corp.",
		"LFUSLittelfuse",
		"LFVNLifevantage Corp",
		"LGCYLegacy Reserves LP",
		"LGIHLGI Homes Inc",
		"LGNDLigand Pharmaceuticals Inc",
		"LHCGLHC Group",
		"LIMELime Energy Co.",
		"LINCLincoln Educational Services Corp",
		"LINELinn Energy Llc",
		"LINTALiberty Media Corp",
		"LINTBLiberty Media Corp",
		"LIONFidelity Southern Corp",
		"LIOXLionbridge Technologies",
		"LIQDLiquid Holdings Group Inc",
		"LIVELivedeal Inc",
		"LIWALihua International",
		"LJPCLa Jolla Pharma",
		"LKFNLakeland Financial Corp",
		"LKQLKQ Corp",
		"LLEXLilis Energy Inc.",
		"LLNWLimelight Networks",
		"LLTCLinear Technology Corp",
		"LMATLemaitre Vascular",
		"LMCALiberty Media Corp. Series A",
		"LMCBLiberty Media Corp",
		"LMIALMI Aerospace",
		"LMNRLimoneira Co",
		"LMNSLumenis Ltd",
		"LMNXLuminex Cor",
		"LMOSLumos Networks Corp",
		"LNBBLNB Bancorp",
		"LNCESnyder'S-Lance Inc",
		"LNCOLinn Co Llc",
		"LNDCLandec Corp",
		"LOANManhattan Bridge Capital Inc",
		"LOCMLocal Corp",
		"LOGILogitech International S.A.",
		"LOGMLogmein Inc",
		"LOJNLojack Corp",
		"LONGElong Inc",
		"LOOKLooksmart Ltd",
		"LOPEGrand Canyon Education",
		"LORLLoral Space and Communications",
		"LPCNLipocine Inc",
		"LPDXLiposcience Inc",
		"LPHILife Partners Holdings Inc",
		"LPLALpl Investment Holdings Inc",
		"LPNTLifepoint Hospitals",
		"LPSBLaporte Bancorp",
		"LPSNLiveperson Inc",
		"LPTHLightpath Technologies",
		"LPTNLpath Inc",
		"LQDTLiquidity Services",
		"LRADLrad Corp",
		"LRCXLam Research Corp",
		"LSBILsb Financial",
		"LSBKLake Shore Bancorp",
		"LSCCLattice Semiconductor Corp",
		"LSILsi Logic Corp",
		"LSTRLandstar System",
		"LTBRLightbridge Corp",
		"LTRELearning Tree International",
		"LTRXLantronix Inc",
		"LTXCLtx-Credence Corp",
		"LULULululemon Athletica Inc",
		"LUNALuna Innovations Inc",
		"LVNTALiberty Interactive Corp",
		"LVNTBLiberty Interactive Corp",
		"LWAYLifeway Foods",
		"LXRXLexicon Pharmaceuticals",
		"LYTSLsi Industries Inc",
		"MACKMerrimack Pharmaceuticals Inc",
		"MAGMagnetek Inc",
		"MAGSMagal Security Systems Ltd",
		"MAMSMam Software Group Inc",
		"MANHManhattan Associates",
		"MANTMantech International Corp",
		"MARMarriot International",
		"MARKRemark Media Inc",
		"MARPSMarine Petroleum Trust",
		"MASCMaterial Sciences Corp",
		"MASIMasimo Corp",
		"MATMattel Inc",
		"MATRMattersight Corp",
		"MATWMatthews International Corp",
		"MAYSJ. W. Mays",
		"MBFIMB Financial Inc",
		"MBIIMarrone Bio Innovations Inc",
		"MBISMediabistro Inc",
		"MBLXMetabolix",
		"MBRGMiddleburg Financial Corp",
		"MBTFM B T Financial Corp",
		"MBUUMalibu Boats Inc.",
		"MBVTMerchants Bancshares",
		"MBWMMercantile Bank Corp",
		"MCBCMacatawa Bank Corp",
		"MCBKMadison County Financial Inc",
		"MCEPMid-Con Energy Partners LP",
		"MCGCMCG Capital Corp",
		"MCHPMicrochip Technology Inc",
		"MCHXMarchex Inc",
		"MCOXMecox Lane Limited",
		"MCRIMonarch Casino & Resort",
		"MCRLMicrel Inc",
		"MCRSMicros Systems",
		"MDASMedassets Inc",
		"MDCAM.D.C. Partners Inc",
		"MDCIMedical Action Industries Inc",
		"MDCOThe Medicines Company",
		"MDIVFirst Trust Exchange-Traded Fun",
		"MDLZMondelez International Inc. Cl A",
		"MDRXAllscripts Healthcare Solutions",
		"MDSOMedidata Solutions",
		"MDVNMedivation Inc",
		"MDWDMediwound Ltd.",
		"MDXGMimedx Group Inc",
		"MEASMeasurement Specialties",
		"MEILMethes Energies International L",
		"MEILWMethes Energies International L",
		"MEILZMethes Energies International L",
		"MEIPMei Pharma Inc",
		"MELAMela Sciences Inc",
		"MELIMercadolibre Inc",
		"MEMPMemorial Production Partners LP",
		"MENTMentor Graphics Corp",
		"MEOHMethanex Corp",
		"MERCMercer International Inc",
		"MERUMeru Networks",
		"METRMetro Bancorp Inc",
		"MFIMicrofinancial Inc",
		"MFLXMulti-Fineline Electronix",
		"MFNCMackinac Financial Corp",
		"MFRIMFRI Inc",
		"MFRMMattress Firm Holding Corp",
		"MFSFMutualfirst Financial Inc",
		"MGAMMultimedia Games",
		"MGCDMgc Diagnostics Corp",
		"MGEEMge Energy Inc",
		"MGIMoneygram International",
		"MGICMagic Software Enterprises Ltd",
		"MGLNMagellan Health Services",
		"MGNXMacrogenics Inc",
		"MGPIMgp Ingredients",
		"MGRCMcgrath Rentcorp",
		"MGYRMagyar Bancorp",
		"MHGCMorgans Hotel Group Co.",
		"MHLDMaiden Hldgs Ltd",
		"MHLDOMaiden Holdings",
		"MICTMicronet Enertec Technologies Inc",
		"MICTWMicronet Enertec Technologies",
		"MIDDThe Middleby Corp",
		"MINDMitcham Industries",
		"MINIMobile Mini",
		"MITKMitek Systems Inc",
		"MITLMitel Networks Corp",
		"MKSIMks Instruments",
		"MKTOMarketo Inc",
		"MKTXMarketaxess Holdings",
		"MLABMesa Laboratories",
		"MLHRHerman Miller",
		"MLNKModuslink Global Solutions Inc",
		"MLNXMellanox Technologies",
		"MLVFMalvern Federal Bancorp",
		"MMLPMartin Midstream Partners L.P.",
		"MMSIMerit Medical Systems",
		"MMYTMakemytrip Limited",
		"MNDLMandalay Media Inc",
		"MNDOMind C.T.I. Ltd",
		"MNGAMagnegas Corp",
		"MNKDMannkind Corp",
		"MNOVMedicinova",
		"MNRKMonarch Financial Holdings",
		"MNROMonro Muffler Brake",
		"MNSTMonster Beverage Corp",
		"MNTAMomenta Pharmaceuticals",
		"MNTGMtr Gaming Group",
		"MNTXManitex International",
		"MOBISky-Mobi Limited",
		"MOCOMocon Inc",
		"MOFGMidwestone Financial Group",
		"MONTMontage Technology Group Ltd.",
		"MORNMorningstar Inc",
		"MOSYMosys Inc",
		"MOVEMove Inc",
		"MPAAMotorcar Parts of America",
		"MPBMid Penn Bancorp",
		"MPELMelco Crown Entertainment Limited",
		"MPETMagellan Petroleum Corp",
		"MPWRMonolithic Power Systems",
		"MRCCMonroe Capital Corp",
		"MRCYMercury Computer Systems",
		"MRGEMerge Healthcare Incorporated.",
		"MRLNMarlin Business Services",
		"MRTNMarten Transport",
		"MRTXMirati Therapeutics Inc",
		"MRVCM R V Commun Inc",
		"MRVLMarvell Technology Group",
		"MSBFMSB Financial",
		"MSCCMicrosemi Corp",
		"MSEXMiddlesex Water Company",
		"MSFGMainsource Financial Group",
		"MSFTMicrosoft Corp",
		"MSGMadison Square Garden",
		"MSLIMerus Labs International Inc. Co",
		"MSONMisonix Inc",
		"MSTRMicrostrategy Inc",
		"MTEXMannatech Inc",
		"MTGEAmerican Capital Mortgage Inves",
		"MTRXMatrix Service Company",
		"MTSCMTS Systems Corp",
		"MTSIM/A-Com Technology Solutions Ho",
		"MTSLMer Telemanagement Solutions Ltd",
		"MTSNMattson Technology",
		"MUMicron Technology",
		"MVISMicrovision",
		"MWIVMwi Veterinary Supply",
		"MWRXMedworth Acquisition Corp",
		"MXIMMaxim Integrated Products",
		"MXWLMaxwell Technologies",
		"MYGNMyriad Genetics",
		"MYLMylan Inc",
		"MYRGMyr Group",
		"MZORMazor Robotics Ltd",
		"NAIINatural Alternatives International",
		"NANONanometrics Inc",
		"NASBNasb Financial Inc",
		"NATHNathan's Famous",
		"NATINational Instruments Corp",
		"NATLNational Interstate Corp",
		"NATRNature's Sunshine Products",
		"NAUHNational American University Holdings",
		"NAVGThe Navigators Group",
		"NBBCNewbridge Bancorp",
		"NBCBFirst Nbc Bank Holding Company",
		"NBIXNeurocrine Biosciences",
		"NBNNortheast Bancorp",
		"NBSNeostem",
		"NBTBNBT Bancorp Inc",
		"NBTFNB&T Financial Group Inc",
		"NCBCNew Century Bancorp Inc. [Nc]",
		"NCITNCI Inc",
		"NCLHNorwegian Cruise Line Holdings",
		"NCMINational Cinemedia",
		"NCTYThe9 Limited",
		"NDAQThe Nasdaq Omx Group",
		"NDLSNoodles & Company",
		"NDSNNordson Corp",
		"NECBNortheast Community Bancorp",
		"NEONeogenomics Inc",
		"NEOGNeogen Corp",
		"NEONNeonode Inc",
		"NEPTNeptune Technologies & Bioresources Inc",
		"NETENet Element Inc",
		"NEWLNewlead Holdings Ltd",
		"NEWPNewport Corp",
		"NEWSNewstar Financial",
		"NEWTNewtek Business Services Inc",
		"NFBKNorthfield Bancorp",
		"NFECNF Energy Saving Corp",
		"NFLXNetflix Inc",
		"NGHCNational General Holdings Corp",
		"NGPCNgp Capital Resources Company",
		"NHTBNew Hampshire Thrift Bancshares",
		"NICENice-Systems Limited",
		"NICKNicholas Financial",
		"NIHDNII Holdings",
		"NILEBlue Nile Inc",
		"NINENinetowns Internet Technology Group",
		"NKSHNational Bankshares",
		"NKTRNektar Therapeutics",
		"NLNKNewlink Genetics Corp",
		"NLSTNetlist Inc",
		"NMIHNmi Holdings Inc",
		"NMRXNumerex Corp",
		"NNBRNN Inc",
		"NOVBNorth Valley Bancorp",
		"NPBCNational Penn Bancshares",
		"NPSPNPS Pharmaceuticals",
		"NRCIANational Research Corp",
		"NRCIBNational Research Corp",
		"NRIMNorthrim Bancorp Inc",
		"NRXNephrogenex Inc.",
		"NSECNational Security Group",
		"NSITInsight Enterprises",
		"NSPHNanosphere Inc",
		"NSSCNapco Security Technologies",
		"NSTGNanostring Technologies Inc",
		"NSYSNortech Systems Inc",
		"NTAPNetapp Inc",
		"NTCTNetscout Systems",
		"NTESNetease Inc",
		"NTGRNetgear Inc",
		"NTICNorthern Technologies International Corp",
		"NTKNortek Inc",
		"NTLSNtelos Holdings",
		"NTRINutrisystem Inc",
		"NTRSNorthern Trust Corp",
		"NTWKNetsol Technologies Inc",
		"NUANNuance Communications",
		"NUCLS&P Global Nuclear Energy Index Ishares",
		"NURONeurometrix Inc",
		"NUTRNutraceutical International Corp",
		"NUVANuvasive Inc",
		"NVAXNovavax Inc",
		"NVDANvidia Corp",
		"NVDQNovadaq Technologies",
		"NVECNve Corp",
		"NVEENv5 Holdings Inc",
		"NVEEWNv5 Holdings Inc",
		"NVFYNova Lifestyle Inc",
		"NVGNNovogen Ltd",
		"NVMINova Measuring Instruments Ltd",
		"NVSLNaugatuck Valley Financial Corp",
		"NVTLNovatel Wireless",
		"NWBINorthwest Bancshares",
		"NWBONorthwest Biotherapeutics",
		"NWBOWNorthwest Biotherapeutics Wt",
		"NWFLNorwood Financial",
		"NWLINational Western Life Insurance",
		"NWPXNorthwest Pipe Company",
		"NWSNews Corp Class B",
		"NWSANews Corp Class A",
		"NXPINxp Semiconductors N.V.",
		"NXSTNexstar Broadcasting Group",
		"NXTMNxstage Medical",
		"NYMTNew York Mortgage Trust",
		"NYMTPNew York Mortgage Trust Inc",
		"NYMXNymox Pharmaceutical Corp",
		"NYNYEmpire Resorts",
		"OABCOmniamerican Bancorp",
		"OBAFOba Financial Services",
		"OBASOptibase Ltd",
		"OBCIOcean Bio-Chem",
		"OCCOptical Cable Corp",
		"OCFCOceanfirst Financial",
		"OCLROclaro Inc",
		"OCLSOculus Innovative Sciences",
		"OCRXOcera Therapeutics Inc",
		"ODFLOld Dominion Freight Line",
		"OFEDOconee Federal Financial",
		"OFIXOrthofix International N.V.",
		"OFLXOmega Flex",
		"OFSOfs Capital Corp",
		"OGXIOncogenex Pharmaceuticals Inc",
		"OHRPOhr Pharmaceutical Inc",
		"OIIMO2Micro International Limited",
		"OINKTianli Agritech",
		"OKSBSouthwest Bancorp",
		"OLBKOld Line Bancshares",
		"OLEDUniversal Display Corp",
		"OMABGrupo Aeroportuario Del Centro",
		"OMCLOmnicell Inc",
		"OMEDOncomed Pharmaceuticals Inc",
		"OMEROmeros Corp",
		"OMEXOdyssey Marine Exploration",
		"ONBOld National Bancorp Capital",
		"ONCYOncolytics Biotech",
		"ONEQNasdaq Composite Tracking Fidelity",
		"ONFCOneida Financial",
		"ONNNOn Semiconductor Corp",
		"ONTXOnconova Therapeutics Inc",
		"ONTYOncothyreon Inc",
		"ONVIOnvia Inc",
		"OPENOpentable",
		"OPHCOptimumbank Holdings",
		"OPHTOphthotech Corp",
		"OPLKOplink Communications",
		"OPOFOld Point Financial Corp",
		"OPTTOcean Power Technologies",
		"OPXAOpexa Therapeutics",
		"ORBCOrbcomm Inc",
		"ORBKOrbotech Ltd",
		"ORBTOrbit International Corp",
		"OREXOrexigen Therapeutics",
		"ORIGOcean Rig Udw Inc",
		"ORITOritani Financial",
		"ORLYO'Reilly Automotive",
		"ORMPOramed Pharmaceuticl",
		"ORRFOrrstown Financial Services Inc",
		"OSBCOld Second Bancorp",
		"OSBCPOld Second Bancorp",
		"OSHCOcean Shore Holding Co.",
		"OSIROsiris Therapeutics",
		"OSISOsi Systems",
		"OSMSLM Corp",
		"OSNOssen Innovation Co.",
		"OSTKOverstock.Com",
		"OSUROrasure Technologies",
		"OTELOtelco Inc. Class A",
		"OTEXOpen Text Corp",
		"OTIVOn Track Innovations Ltd",
		"OTTROtter Tail Corp",
		"OUTROuterwall Inc",
		"OVASOvascience Inc",
		"OVBCOhio Valley Banc",
		"OVLYOak Valley Bancorp [Ca]",
		"OVRLOverland Storage",
		"OVTIOmnivision Technologies",
		"OXBRUOxbridge Re Holdings Limited",
		"OXBTOxygen Biotherapeutics",
		"OXFDOxford Immunotec Global Plc",
		"OXGNOxigene Inc",
		"OXLCOxford Lane Capital",
		"OXLCOOxford Lane Capital Corp",
		"OXLCPOxford Lane Capital Corp",
		"OZRKBank of The Ozarks",
		"PAASPan American Silver",
		"PACBPacific Biosciences of California",
		"PACRPacer International",
		"PACTPactera Technology International Ltd. Ads Wi",
		"PACWPacwest Bancorp",
		"PAGGGlobal Agriculture Powershares",
		"PAMTParametric Sound",
		"PATKPatrick Industries",
		"PATRPatriot Transportation Holding",
		"PAYXPaychex Inc",
		"PBCPPolonia Bancorp [Pa]",
		"PBCTPeople's United Financial",
		"PBHCPathfinder Bancorp",
		"PBIBPorter Bancorp",
		"PBIPPrudential Bancorp of Pennsylvania",
		"PBMDPrima Biomed Ltd",
		"PBPBPotbelly Corp",
		"PBSKPoage Bankshares Inc",
		"PCARPaccar Inc",
		"PCBKPacific Continental Corporation [Ore]",
		"PCCCPC Connection",
		"PCHPotlatch Corp",
		"PCLNPriceline.Com Inc",
		"PCMIPCM Inc",
		"PCOPendrell Corp",
		"PCOMPoints International",
		"PCRXPacira Pharmaceuticals",
		"PCTIPc-Tel Inc",
		"PCTYPaylocity Holding Corp",
		"PCYCPharmacyclics Inc",
		"PCYGPark City Group",
		"PCYOPure Cycle Corp",
		"PDCEPdc Energy Inc",
		"PDCOPatterson Companies Inc",
		"PDEXPro-Dex Inc",
		"PDFSPdf Solutions Inc",
		"PDIIPdi Inc",
		"PDLIPdl Biopharma",
		"PEBKPeoples Bancorp of North Carolina",
		"PEBOPeoples Bancorp Inc",
		"PEGAPegasystems Inc",
		"PEGIPattern Energy Group Inc",
		"PEIXPacific Ethanol",
		"PENNPenn National Gaming",
		"PENXPenford Corp",
		"PEOPPeoples Federal Bancshares",
		"PERFPerfumania Holdings Inc",
		"PERIPerion Network Ltd",
		"PERYPerry Ellis International Inc",
		"PESIPerma-Fix Environmental Services",
		"PETMPetsmart Inc",
		"PETSPetmed Express",
		"PETXAratana Therapeutics Inc",
		"PFBCPreferred Bank",
		"PFBIPremier Financial Bancorp",
		"PFBXPeoples Financial Corp",
		"PFIEProfire Energy Inc",
		"PFINP & F Industries",
		"PFISPeoples Finl Svcs Co",
		"PFLTPennantpark Floating Rate Capit",
		"PFMTPerformant Financial Corp",
		"PFPTProofpoint Inc",
		"PFSWPfsweb Inc",
		"PGCPeapack-Gladstone Financial Corp",
		"PGNXProgenics Pharmaceuticals Inc",
		"PGRXProspect Global Resources Inc",
		"PGTIPgt Industries",
		"PHIIPHI Inc",
		"PHIIKPHI Inc",
		"PHMDPhotomedex",
		"PICOPico Holdings Inc",
		"PIH1347 Property Insurance Holding",
		"PINCPremier Inc",
		"PKBKParke Bancorp",
		"PKOHPark-Ohio Holdings",
		"PKTProcera Networks",
		"PLABPhotronics",
		"PLBCPlumas Bancorp",
		"PLCCPaulson Capital",
		"PLCEThe Children's Place Retail Stores",
		"PLCMPolycom Inc",
		"PLKIPopeyes Louisiana Kitchen Inc.",
		"PLMTPalmetto Bancshs SC",
		"PLNRPlanar Systems",
		"PLPCPreformed Line Products Company",
		"PLPMPlanet Payment",
		"PLTMISE Global Platinum Index First Trust",
		"PLUGPlug Power Inc",
		"PLUSEplus Inc",
		"PLXSPlexus Corp",
		"PLXTPlx Technology",
		"PMBCPacific Mercantile Bancorp",
		"PMCSPmc - Sierra",
		"PMCTPmc Commercial Trust",
		"PMDPsychemedics Corp",
		"PMESentry Select Primary Metals Corp",
		"PMFGPMFG Inc",
		"PNBKPatriot National Bancorp Inc",
		"PNFPPinnacle Financial Partners",
		"PNNTPennantpark Investment Corp",
		"PNQINasdaq Internet Powershares",
		"PNRAPanera Bread Company",
		"PNRGPrimeenergy Corp",
		"PNTRPointer Telocation Ltd",
		"PODDInsulet Corp",
		"POOLPool Corp",
		"POPEPope Resources",
		"POWIPower Integrations",
		"POWLPowell Industries",
		"POZNPozen Inc",
		"PPBIPacific Premier Bancorp Inc",
		"PPCPilgrim's Pride Corp",
		"PPHMPeregrine Pharmaceuticals Inc",
		"PPHMPPeregrine Pharmaceuticals Inc.",
		"PPSIPioneer Pwr Solution",
		"PRAAPortfolio Recovery Associates",
		"PRANPrana Biotechnology Ltd",
		"PRCPPerceptron Inc",
		"PRFTPerficient Inc",
		"PRFZFTSE Rafi US 1500 Small-Mid Powershares",
		"PRGNParagon Shipping Inc",
		"PRGSProgress Software Corp",
		"PRGXPrgx Global",
		"PRIMPrimoris Services Corp",
		"PRKRParkervision",
		"PRLSPeerless Systems Corp",
		"PRMWPrimo Water Corp",
		"PROVProvident Financial Holdings",
		"PRPHProphase Labs",
		"PRSCThe Providence Service Corp",
		"PRSSCafepress Inc",
		"PRTAProthena Corporation Plc",
		"PRTSU.S. Auto Parts Network",
		"PRXIPremier Exhibitions",
		"PRXLParexel International Corp",
		"PSAUGlobal Gold & Prec Metals Powershares",
		"PSBHPsb Holdings",
		"PSCCS&P Smallcap Cnsmr Staples Powershares",
		"PSCDS&P Smallcap Cnsmr Discret Powershares",
		"PSCES&P Smallcap Energy Powershares",
		"PSCFS&P Smallcap Financials Powershares",
		"PSCHS&P Smallcap Health Care Powershares",
		"PSCIS&P Smallcap Industrials Powershares",
		"PSCMS&P Smallcap Materials Powershares",
		"PSCTS&P Smallcap Info Tech Powershares",
		"PSCUS&P Smallcap Utilities Powershares",
		"PSDVPsivida Corp",
		"PSECProspect Capital Corp",
		"PSEMPericom Semiconductor Corp",
		"PSIXPower Solutions Inte",
		"PSMIPeregrine Semiconductor Corp",
		"PSMTPricesmart Inc",
		"PSTBPark Sterling Bank",
		"PSTIPluristem Therapeutics",
		"PSTRPostrock Energy Corp",
		"PSUNPacific Sunwear of California",
		"PTCPtc Inc.",
		"PTCTPtc Therapeutics Inc",
		"PTEKPokertek Inc",
		"PTENPatterson-Uti Energy",
		"PTIEPain Therapeutics",
		"PTLAPortola Pharmaceuticals Inc",
		"PTNRPartner Communications Company Ltd",
		"PTNTInternet Patents Corp",
		"PTRYThe Pantry Inc",
		"PTSIP.A.M. Transportation Services",
		"PTSXPoint.360",
		"PTXPernix Therapeutics Holdings Inc.",
		"PULBPulaski Financial",
		"PVTBPrivatebancorp",
		"PVTBPPrivatebancorp",
		"PWODPenns Woods Bancorp",
		"PWRDPerfect World Co.",
		"PWXProvidence and Worcester Railroad",
		"PXLWPixelworks",
		"PZZAPapa John's International",
		"PZZIPizza Inn",
		"QABANasdaq Aba Community Bank First Trust",
		"QADAQad Inc",
		"QADBQad Inc",
		"QBAKQualstar Corp",
		"QCCOQC Holdings",
		"QCLNNasdaq Clean Edge Green First Trust",
		"QCOMQualcomm Inc",
		"QCORQuestcor Pharmaceuticals",
		"QCRHQcr Holdings",
		"QDELQuidel Corp",
		"QGENQiagen N.V.",
		"QINCFirst Trust Rba Quality Income",
		"QIWIQiwi Plc",
		"QKLSQkl Stores",
		"QLGCQlogic Corp",
		"QLIKQlik Technologies Inc",
		"QLTIQlt Inc",
		"QLTYQuality Distribution",
		"QLYSQualys Inc",
		"QNSTQuinstreet Inc",
		"QPACQuinpario Acquisiton Corp",
		"QPACUQuinpario Acquisition Corp",
		"QPACWQuinpario Acquisiton Corp",
		"QQEWNasdaq-100 Equal Weight First Trust",
		"QQQPowershares QQQ",
		"QQQCG-X Nasdaq China Technology ETF",
		"QQQXNasdaq Premium Income and Growth",
		"QQXTNasdaq-100 Ex-Tech Sec First Trust",
		"QSIIQuality Systems",
		"QTECNasdaq-100 Tech Index First Trust",
		"QTETQuartet Merger Corp.",
		"QTETRQuartet Merger Corp.",
		"QTETUQuartet Merger Corp",
		"QTWWQuantum Fuel Systems Technologies",
		"QUIKQuicklogic Corp",
		"QUMUQumu Corp",
		"QUNRQunar Cayman Islands Limited",
		"QUREUniqure B.V.",
		"QYLDRecon Capital Nasdaq-100 Covere",
		"RADARada Electronics Industries Limited",
		"RAILFreightcar America",
		"RANDRand Capital Corp",
		"RAREUltragenyx Pharmaceutical Inc.",
		"RAVNRaven Industries",
		"RBCAARepublic Bancorp",
		"RBCNRubicon Technology",
		"RBPAARoyal Bancshares of Pennsylvania",
		"RCIIRent-A-Center Inc",
		"RCKBRockville Financial",
		"RCKYRocky Brands",
		"RCMTRcm Technologies",
		"RCONRecon Technology",
		"RCPTReceptos Inc",
		"RDARda Microelectronics",
		"RDCMRadcom Ltd",
		"RDENElizabeth Arden",
		"RDHLRedhill Biopharma Ltd",
		"RDIReading International Inc",
		"RDIBReading International Inc",
		"RDNTRadnet Inc",
		"RDVYFirst Trust Nasdaq Rising Divid",
		"RDWRRadware Ltd",
		"RECNResources Connection",
		"REDFRediff.Com India Limited",
		"REFRResearch Frontiers Inc",
		"REGIRenewable Energy Group Inc",
		"REGNRegeneron Pharmaceuticals",
		"REISReis Inc",
		"RELLRichardson Electronics",
		"RELVReliv International Inc",
		"REMYRemy Intl Inc",
		"RENTRentrak Corp",
		"REPHRecro Pharma Inc.",
		"REXIResource America",
		"REXXRex Energy Corp",
		"RFILRF Industries",
		"RFMDRF Micro Devices",
		"RGCORgc Resources Inc",
		"RGDORegado Biosciences Inc",
		"RGDXResponse Genetics",
		"RGENRepligen Corp",
		"RGLDRoyal Gold",
		"RGLSRegulus Therapeutics Inc",
		"RGSEReal Goods Solar Inc.",
		"RIBTRicebran Technologies",
		"RIBTWRicebran Technologies",
		"RICKRick's Cabaret International",
		"RIGLRigel Pharmaceuticals",
		"RITTRit Technologies Ltd",
		"RITTWRit Technologies Ltd.",
		"RIVRRiver Valley Bancorp",
		"RJETRepublic Airways Holdings",
		"RLJERlj Entertainment Inc",
		"RLOCReachlocal",
		"RLOGRand Logistics",
		"RLYPRelypsa Inc",
		"RMBSRambus Inc",
		"RMCFRocky Mountain Chocolate Factory",
		"RMGNScg Financial Acquisition Corp",
		"RMTIRockwell Medical Technologies",
		"RNAProsensa Holding B.V.",
		"RNETRignet Inc",
		"RNSTRenasant Corp",
		"RNWKRealnetworks",
		"ROBORobo-Stox Global Robotics and A",
		"ROCKGibraltar Industries",
		"ROIARadio One Inc",
		"ROIAKRadio One Inc",
		"ROICRetail Opportunity Investments",
		"ROICWRetail Opportunity Investments",
		"ROIQRoi Acquisition Corp. II",
		"ROIQURoi Acquisition Corp. II",
		"ROIQWEveryware Glb Wts",
		"ROLLRBC Bearings Inc",
		"ROSERosetta Resources Inc",
		"ROSGRosetta Genomics Ltd",
		"ROSTRoss Stores",
		"ROVIRovi Corp",
		"ROYLRoyale Energy",
		"RPRealpage Inc",
		"RPRXRepros Therapeutics Inc",
		"RPTPRaptor Pharmaceutical",
		"RPXCRpx Corp",
		"RRDR.R. Donnelley & Sons Company",
		"RRGBRed Robin Gourmet Burgers",
		"RRSTRrsat Global Communications Network Ltd",
		"RSTIRofin-Sinar Technologies",
		"RSYSRadisys Corp",
		"RTGNRuthigen Inc.",
		"RTIXRti Biologics",
		"RTKRentech Inc",
		"RTRXDesert Gateway Inc.",
		"RUSHARush Enterprises",
		"RUSHBRush Enterprises",
		"RUTHRuth's Hospitality Group",
		"RVBDRiverbed Technology",
		"RVLTNexxus Lighting",
		"RVNCRevance Therapeutics Inc.",
		"RVSBRiverview Bancorp Inc",
		"RXDXIgnyta Inc.",
		"RXIIRxi Pharmaceuticals",
		"RYAAYRyanair Holdings Plc",
		"SAASIncontact",
		"SAEXSaexploration Holdings Inc",
		"SAFMSanderson Farms",
		"SAFTSafety Insurance Group",
		"SAIASaia Inc",
		"SALSalisbury Bancorp",
		"SALERetailmenot Inc",
		"SALMSalem Communications Corp",
		"SAMGSilvercrest Asset Management Gr",
		"SANMSanmina-Sci Corp",
		"SANWS&W Seed Company",
		"SANWZS&W Seed Company",
		"SAPESapient Corp",
		"SASRSandy Spring Bancorp",
		"SATSEchostar Corp",
		"SAVESpirit Airlines Inc",
		"SBACSBA Communications Corp",
		"SBBXSussex Bancorp",
		"SBCFSeacoast Banking Corporation of Florida",
		"SBFGSb Financial Group Inc",
		"SBGISinclair Broadcast Group",
		"SBLKStar Bulk Carriers",
		"SBNYSignature Bank",
		"SBNYWSignature Bank",
		"SBRASabra Healthcare REIT Inc",
		"SBRAPSabra Healthcare REIT Inc",
		"SBSASpanish Broadcasting System",
		"SBSISouthside Bancshares",
		"SBUXStarbucks Corp",
		"SCAISurgical Care Affiliates Inc",
		"SCBTScbt Financial Corp",
		"SCHLScholastic Corp",
		"SCHNSchnitzer Steel Industries",
		"SCLNSciclone Pharmaceuticals",
		"SCMPSucampo Pharmaceuticals",
		"SCOKSinocoking Coal and Coke Chemical Industries In",
		"SCONSuperconductor Technologies Inc",
		"SCORComscore Inc",
		"SCSCScansource Inc",
		"SCSSSelect Comfort Corp",
		"SCTYSolarcity Corp",
		"SCVLShoe Carnival",
		"SEACSeachange International",
		"SEEDOrigin Agritech Limited",
		"SEICSei Investments Company",
		"SENEASeneca Foods",
		"SENEBSeneca Foods",
		"SEVSevcon Inc",
		"SFBCSound Financial Inc",
		"SFLYShutterfly",
		"SFMSprouts Farmers Market Inc",
		"SFNCSimmons First National Corp",
		"SFSTSouthern First Bancshares",
		"SFXESfx Entertainment Inc",
		"SGCSuperior Uniform Group",
		"SGENSeattle Genetics",
		"SGISilicon Graphics International Corp",
		"SGMASigmatron International",
		"SGMOSangamo Biosciences",
		"SGMSScientific Games Corp",
		"SGNTSagent Pharmaceuticals Inc",
		"SGOCSgoco Group Ltd",
		"SGRPSpar Group",
		"SGYPSynergy Pharmaceuticals Inc",
		"SGYPWSynergy Pharmaceuticals Inc",
		"SHBIShore Bancshares Inc",
		"SHENShenandoah Telecommunications Co",
		"SHIPSeanergy Maritime Holdings Corp",
		"SHLDSears Holdings Corp",
		"SHLDVSears Holdings Corporation",
		"SHLMA. Schulman",
		"SHLOShiloh Industries",
		"SHOOSteven Madden",
		"SHORShoretel Inc",
		"SHOSSears Hometown and Outlet Store",
		"SHPGShire Plc American Depositary Shares",
		"SIALSigma-Aldrich Corp",
		"SIBCState Investors Bancorp Inc",
		"SIEBSiebert Financial",
		"SIFISi Financial Group",
		"SIFYSify Technologies Limited",
		"SIGASiga Technologies Inc",
		"SIGISelective Insurance Group",
		"SIGMSigma Designs",
		"SILCSilicom Ltd",
		"SIMGSilicon Image",
		"SIMOSilicon Motion Technology Corp",
		"SINASina Corp",
		"SINOSino-Global Shipping America",
		"SIRISirius XM Radio Inc",
		"SIROSirona Dental Systems",
		"SIVBSvb Financial Group",
		"SIVBOSvb Financial Group",
		"SKBISkystar Bio-Pharmaceutical Company",
		"SKULSkullcandy Inc",
		"SKYWSkywest Inc",
		"SKYYISE Cloud Computing Index First Trust",
		"SLABSilicon Laboratories",
		"SLGNSilgan Holdings",
		"SLMSLM Corp",
		"SLMAPSLM 6.97 Cum Pfd A",
		"SLMBPSLM Corp Pfd B",
		"SLPSimulations Plus",
		"SLRCSolar Capital Ltd",
		"SLTCSelectica Inc",
		"SLVOCredit Suisse Ag",
		"SLXPSalix Pharmaceuticals",
		"SMBCSouthern Missouri Bancorp",
		"SMCISuper Micro Computer",
		"SMEDSharps Compliance Corp",
		"SMITSchmitt Industries",
		"SMLRSemler Scientific Inc.",
		"SMMFSummit Financial Group",
		"SMPLKaiser Federal Financial Group",
		"SMRTStein Mart Inc",
		"SMSISmith Micro Software",
		"SMTSmart Technologies Inc",
		"SMTCSemtech Corp",
		"SMTPSmtp Inc",
		"SMTXSmtc Corp",
		"SNAKInventure Foods",
		"SNBCSun Bancorp",
		"SNCRSynchronoss Technologies",
		"SNDKSandisk Corp",
		"SNFCASecurity National Financial Corp",
		"SNHYSun Hydraulics Corp",
		"SNMXSenomyx Inc",
		"SNPSSynopsys Inc",
		"SNSSSunesis Pharmaceuticals",
		"SNTASynta Pharmaceuticals",
		"SOCBSouthcoast Financial Corp",
		"SOCLG-X Social Media Index ETF",
		"SODASodastream International Ltd",
		"SOFOSonic Foundry",
		"SOHOSotherly Hotels Inc",
		"SOHOLSotherly Hotels LP",
		"SOHUSohu.Com Inc",
		"SONASouthern National Bancorp of Virginia",
		"SONCSonic Corp",
		"SONSSonus Networks",
		"SORLSorl Auto Parts",
		"SOXXPHLX Sox Semiconductor Sector Ishares",
		"SPSp Plus Corporation",
		"SPANSpan-America Medical Systems",
		"SPARSpartan Motors",
		"SPBCSp Bancorp",
		"SPCBSupercom Ltd",
		"SPCHASport Chalet",
		"SPCHBSport Chalet",
		"SPDCSpeed Commerce Inc",
		"SPEXSpherix Inc",
		"SPHSSophiris Bio Inc",
		"SPILSiliconware Precision Industries Company Ltd",
		"SPLKSplunk Inc",
		"SPLSStaples Inc",
		"SPNCThe Spectranetics Corp",
		"SPNSSapiens International Corporation N.V.",
		"SPPISpectrum Pharmaceuticals",
		"SPPRSupertel Hospitality",
		"SPPROSupertel Hospitality",
		"SPPRPSupertel Hospitality",
		"SPROSmartpros Ltd",
		"SPRTSupport.Com Inc",
		"SPSCSps Commerce",
		"SPTNSpartan Stores",
		"SPUSkypeople Fruit Juice",
		"SPWRSunpower Corp",
		"SQBGPeople's Liberation",
		"SQBKSquare 1 Financial Inc",
		"SQISciquest Inc",
		"SQNMSequenom Inc",
		"SQQQUltrapro Short QQQ Proshares",
		"SRCE1St Source Corp",
		"SRCLStericycle Inc",
		"SRDXSurmodics Inc",
		"SREVServicesource International In",
		"SRNESorrento Therapeutics",
		"SRPTSarepta Therapeutics Inc",
		"SSBISummit State Bank",
		"SSFNStewardship Financial Corp",
		"SSHSunshine Heart Inc",
		"SSNCSS&C Technologies Holdings",
		"SSRISilver Standard Resources Inc",
		"SSYSStratasys Ltd",
		"STAAStaar Surgical Company",
		"STBStudent Transn Inc",
		"STBAS&T Bancorp",
		"STBZState Bank Finl Corp",
		"STCKStock Building Supply Holdings",
		"STEMStemcells Inc",
		"STFCState Auto Financial Corp",
		"STKLSunopta Inc",
		"STLDSteel Dynamics",
		"STLYStanley Furniture Company",
		"STMLStemline Therapeutics Inc",
		"STMPStamps.Com Inc",
		"STNRSteiner Leisure Limited",
		"STRAStrayer Education",
		"STRLSterling Construction Company Inc",
		"STRMStreamline Health Solutions",
		"STRNSutron Corp",
		"STRSStratus Properties",
		"STRTStrattec Security Corp",
		"STRZAStarz Series A Liberty Capital",
		"STRZBStarz Series B Liberty Capital",
		"STSASterling Financial Corp",
		"STSIStar Scientific",
		"STXSeagate Technology.",
		"STXSStereotaxis",
		"SUBKSuffolk Bancorp",
		"SUMRSummer Infant",
		"SUNSSolar Senior Capital Ltd",
		"SUPNSupernus Pharmaceuticals Inc",
		"SUPXSupertex Inc",
		"SURGSynergetics USA",
		"SUSQSusquehanna Bancshares",
		"SUTRSutor Technology Group Limited",
		"SVASinovac Biotech",
		"SVBISevern Bancorp Inc",
		"SVVCFirsthand Technology Value Fund",
		"SWHCSmith & Wesson Holding Corp",
		"SWIRSierra Wireless",
		"SWKSSkyworks Solutions",
		"SWSHSwisher Hygiene",
		"SYBTS.Y. Bancorp",
		"SYKESykes Enterprises Inc",
		"SYMCSymantec Corp",
		"SYMXSynthesis Energy Systems",
		"SYNASynaptics Inc",
		"SYNCSynacor Inc",
		"SYNLSynalloy Corp",
		"SYNMSyntroleum Corp",
		"SYNTSyntel Inc",
		"SYPRSypris Solutions",
		"SYUTSynutra International",
		"SZMKSizmek Inc.",
		"SZYMSolazyme Inc",
		"TACTTransact Technologies Inc",
		"TAITTaitron Components Inc",
		"TASRTaser International",
		"TASTCarrols Restaurant Group",
		"TATTTat Technologies Ltd",
		"TAXJth Holding Inc",
		"TAXIMedallion Financial",
		"TAYCTaylor Capital Group",
		"TAYCOTaylor Cap Group Inc",
		"TAYCPTaylor Capital Group",
		"TAYDTaylor Devices",
		"TBBKThe Bancorp",
		"TBNKTerritorial Bancorp Inc",
		"TBOWTrunkbow International Holdings Ltd",
		"TCBITexas Capital Bancshares",
		"TCBILTexas Capital Bancshares Inc",
		"TCBIPTexas Capital",
		"TCBIWTexas Capital Bancshares",
		"TCBKTrico Bancshares",
		"TCCOTechnical Communications Corp",
		"TCFCTri-County Financial Corp",
		"TCPCTCP Capital Corp",
		"TCRDTHL Credit",
		"TCXTucows Inc",
		"TDIVFirst Trust Nasdaq Technol ETF",
		"TEARTearlab Corp",
		"TECDTech Data Corp",
		"TECHTechne Corp",
		"TECUATecumseh Products Company",
		"TECUBTecumseh Products Company",
		"TELKTelik Inc",
		"TESOTesco Corp",
		"TESSTessco Technologies Inc",
		"TFMThe Fresh Market",
		"TFSLTfs Financial Corp",
		"TGATransglobe Energy Corp",
		"TGETgc Industries",
		"TGLSTecnoglass Inc.",
		"TGTXTg Therapeutics",
		"THFFFirst Financial Corporation Indiana",
		"THLDThreshold Pharmaceuticals",
		"THORThoratec Corp",
		"THRDTF Financial Corp",
		"THRMGentherm Inc",
		"THRXTheravance",
		"THSTTruett-Hurst Inc",
		"THTITht Heat Transfer Technology",
		"TIBXTibco Software",
		"TICCTicc Capital",
		"TIGRTigerlogic Corp",
		"TILEInterface",
		"TINYHarris & Harris Group",
		"TIPTTiptree Financial Inc",
		"TISATop Image Systems",
		"TITNTitan Machinery Inc",
		"TIVOTivo Inc",
		"TKMRTekmira Pharmaceuticals Corp",
		"TLFTandy Leather Factory",
		"TLMRTalmer Bancorp Inc.",
		"TLOGTetralogic Pharmaceuticals Corp",
		"TMNGThe Management Network Group",
		"TNAVTelenav Inc",
		"TNDMTandem Diabetes Care Inc",
		"TNGOTangoe Inc",
		"TNXPTonix Pharm Hldg Cor",
		"TOFCTower Financial Corp",
		"TOPSTop Ships Inc",
		"TORMTor Minerals International Inc",
		"TOWNTowne Bank",
		"TQNTTriquint Semiconductor",
		"TQQQUltrapro QQQ Proshares",
		"TRAKDealertrack Holdings",
		"TRCBTwo River Bancorp",
		"TRCHTorchlight Energy Resources Inc",
		"TREETree.Com",
		"TRGTTargacept",
		"TRIBTrinity Biotech Plc",
		"TRIPTripadvisor Inc",
		"TRMBTrimble Navigation Limited",
		"TRMKTrustmark Corp",
		"TRNSTranscat Inc",
		"TRNXTornier N.V.",
		"TROVTrovagene Inc",
		"TROVUTrovagene Inc",
		"TROVWTrovagene Inc",
		"TROWT. Rowe Price Group",
		"TRSTrimas Corp",
		"TRSTTrustco Bank Corp NY",
		"TRVNTrevena Inc.",
		"TSBKTimberland Bancorp",
		"TSCTristate Capital Holdings Inc",
		"TSCOTractor Supply Company",
		"TSEMTower Semiconductor Ltd",
		"TSLATesla Motors",
		"TSPTTranscept Pharmaceuticals",
		"TSRATessera Technologies",
		"TSRETrade Street Residential Inc",
		"TSRITSR Inc",
		"TSROTesaro Inc",
		"TSTThestreet.Com",
		"TSYSTelecommunication Systems",
		"TTECTeletech Holdings",
		"TTEKTetra Tech",
		"TTGTTechtarget",
		"TTHITransition Therapeutics",
		"TTMITTM Technologies",
		"TTPHTetraphase Pharmaceuticals Inc",
		"TTSTile Shop Holdings Inc",
		"TTWOTake-Two Interactive Software",
		"TUESTuesday Morning",
		"TVIXDaily 2X VIX ST ETN Velocityshares",
		"TVIZDaily 2X VIX Med-Term ETN Velocityshares",
		"TWERTowerstream Corp",
		"TWGPTower Group",
		"TWINTwin Disc Inc",
		"TWMCTrans World Entertainment",
		"TWOU2U Inc.",
		"TWTCTW Telecom Inc",
		"TXNTexas Instruments Inc",
		"TXRHTexas Roadhouse",
		"TYPEMonotype Imaging Holdings Inc",
		"TZOOTravelzoo Inc",
		"UACLUniversal Truckload Services",
		"UBCPUnited Bancorp",
		"UBFOUnited Security Bancshares",
		"UBICUbic Inc",
		"UBNKUnited Financial Bancorp",
		"UBNTUbiquiti Networks Inc",
		"UBOHUnited Bancshares",
		"UBSHUnion First Market Bankshares Corp",
		"UBSIUnited Bankshares",
		"UCBAUnited Community Bancorp",
		"UCBIUnited Community Banks",
		"UCFCUnited Community Financial",
		"UCTTUltra Clean Holdings",
		"UEICUniversal Electronics Inc",
		"UEPSNet 1 Ueps Technologies",
		"UFCSUnited Fire Group Inc",
		"UFPIUniversal Forest Products",
		"UFPTUfp Technologies",
		"UGUnited-Guardian",
		"UGLD3X Long Gold ETN Velocityshares",
		"UHALAmerco",
		"UIHCUnited Insurance Hld",
		"ULBIUltralife Corp",
		"ULTAUlta Salon Cosmetics & Fragrance",
		"ULTIThe Ultimate Software Group",
		"ULTRUltrapetrol [Bahamas] Limited",
		"UMBFUMB Financial Corp",
		"UMPQUmpqua Holdings Corp",
		"UNAMUnico American Corp",
		"UNBUnion Bankshares",
		"UNFIUnited Natural Foods",
		"UNISUnilife Corp",
		"UNTDUnited Online",
		"UNTKUnitek Global Services",
		"UNTYUnity Bancorp",
		"UNXLUni-Pixel",
		"UPIUroplasty",
		"UPIPUnwired Planet Inc",
		"URBNUrban Outfitters",
		"URREUranium Resources",
		"USAKUSA Truck",
		"USAPUniversal Stainless & Alloy Products",
		"USATUSA Technologies",
		"USATPUSA Technologies",
		"USBIUnited Security Bancshares",
		"USCRUS Concrete",
		"USEGUS Energy",
		"USLMUnited States Lime & Minerals",
		"USLV3X Long Silver ETN Velocityshares",
		"USMDUsmd Holdings Inc",
		"USMOUSA Mobility",
		"USTRUnited Stationers Inc",
		"UTEKUltratech Inc",
		"UTHRUnited Therapeutics Corp",
		"UTIWUti Worldwide Inc",
		"UTMDUtah Medical Products",
		"UTSIUstarcom Holdings Corp",
		"UVSPUnivest Corporation of Pennsylvania",
		"VALUValue Line",
		"VASCVascular Solutions",
		"VBFCVillage Bank and Trust Financial",
		"VCITInterm-Term Corp Bd Idx ETF Vanguard",
		"VCLTLong-Term Corp Bond Idx ETF Vanguard",
		"VCSHShort-Term Corp Bd Idx ETF Vanguard",
		"VCYTVeracyte Inc",
		"VDSIVasco Data Security International",
		"VECOVeeco Instruments Inc",
		"VGITInterm-Term Govt Bd Idx ETF Vanguard",
		"VGLTLong-Term Govt Bond Idx ETF Vanguard",
		"VGSHShort-Term Govt Bd Idx ETF Vanguard",
		"VIAViacom Inc Class A",
		"VIABViacom Inc Cl B",
		"VIASViasystems Group",
		"VICLVical Inc",
		"VICRVicor Corp",
		"VIDEVideo Display Corp",
		"VIDIVident International Equity Fun",
		"VIEWViewtran Group Inc.",
		"VIIXVIX Short-Term ETN Velocityshares",
		"VIIZVIX Med-Term ETN Velocityshares",
		"VIMCVimicro International Corp",
		"VIPOpen Joint Stock Company Vimpel-Communications",
		"VIRCVirco Manufacturing Corp",
		"VISNVisionchina Media",
		"VITCVitacost.Com Inc",
		"VIVOMeridian Bioscience Inc",
		"VLCCFKnightsbridge Tankers Limited",
		"VLGEAVillage Super Market",
		"VLTCVoltari Corp",
		"VLYWWValley National Bancorp",
		"VMBSMortgage Backed Securities ETF Vanguard",
		"VNDAVanda Pharmaceuticals Inc",
		"VNET21Vianet Group Inc",
		"VNQIGlobal Ex-US Real Estate ETF Vanguard",
		"VNRVanguard Natural Resources Llc",
		"VNRAPVanguard Natural Resources Llc Pfd. Series A",
		"VNRBPVanguard Natural Resources Llc",
		"VOCSVocus Inc",
		"VODVodafone Group Plc",
		"VOLCVolcano Corp",
		"VONERussell 1000 Index ETF Vanguard",
		"VONGRussell 1000 Growth Index ETF Vanguard",
		"VONVRussell 1000 Value Index ETF Vanguard",
		"VOXXAudiovox Corp",
		"VPFGViewpoint Financial Group",
		"VPRTVistaprint N.V.",
		"VRAVera Bradley",
		"VRMLVermillion Inc",
		"VRNGVringo Inc",
		"VRNGWVringo Inc. Warrants 5 Years",
		"VRNSVaronis Systems Inc",
		"VRNTVerint Systems Inc",
		"VRSKVerisk Analytics",
		"VRSNVerisign Inc",
		"VRTAVestin Realty Mortgage I",
		"VRTBVestin Realty Mortgage II",
		"VRTSVirtus Investment Partners",
		"VRTUVirtusa Corp",
		"VRTXVertex Pharmaceuticals Inc",
		"VSARVersartis Inc.",
		"VSATViasat Inc",
		"VSCIVision-Sciences",
		"VSCPVirtualscopics",
		"VSECVSE Corp",
		"VSTMVerastem Inc",
		"VTHRRussell 3000 Index ETF Vanguard",
		"VTIPVanguard Short-Term Inflation-P",
		"VTNCVitran Corp",
		"VTNRVertex Energy Inc",
		"VTSSVitesse Semicond",
		"VTUSVentrus Biosciences",
		"VTWGRussell 2000 Growth Index ETF Vanguard",
		"VTWORussell 2000 Index ETF Vanguard",
		"VTWVRussell 2000 Value Index ETF Vanguard",
		"VUSEVident Core U.S. Equity ETF",
		"VVTVValuevision Media",
		"VVUSVivus Inc",
		"VWOBVanguard Emerging Markets Gover",
		"VXUSTotal Intl Stock Idx ETF Vanguard",
		"VYFCValley Financial Corp",
		"WABCWestamerica Bancorporation",
		"WAFDWashington Federal",
		"WAFDWWashington Federal Inc. Wt",
		"WASHWashington Trust Bancorp",
		"WATTEnergous Corporation",
		"WAVXWave Systems",
		"WAYNWayne Savings Bancshares Inc",
		"WBBWestbury Bancorp Inc",
		"WBCOWashington Banking Company",
		"WBKCWolverine Bancorp",
		"WBMDWebmd Health Corp",
		"WDCWestern Digital Corp",
		"WDFCWd-40 Company",
		"WEBKWellesley Bancorp Inc",
		"WENThe Wendy's Company",
		"WERNWerner Enterprises",
		"WETFWisdomtree Invstmnts",
		"WEYSWeyco Group",
		"WFBIWashingtonfirst Bk",
		"WFDWestfield Financial",
		"WFMWhole Foods Market",
		"WHFWhitehorse Finance Inc",
		"WHFBLWhitehorse Finance Inc",
		"WHLRWheeler Real Estate Investment",
		"WIBCWilshire Bancorp",
		"WIFIBoingo Wireless Inc",
		"WILCG. Willi-Food International Ltd",
		"WILNWi-Lan Inc",
		"WINWindstream Holdings Inc",
		"WINAWinmark Corp",
		"WIREEncore Wire Corp",
		"WIXWix.Com Ltd",
		"WLBWestmoreland Coal Company",
		"WLBPZWestmoreland Coal Company",
		"WLDNWilldan Group",
		"WLFCWillis Lease Finance Corp",
		"WMARWest Marine",
		"WMGIWright Medical Group",
		"WMGIZWright Medical Group Inc",
		"WOODS&P Global Timber & Forestry Idx Ishares",
		"WOOFVca Antech",
		"WPCSWpcs International Inc",
		"WPPGYWpp Plc",
		"WPRTWestport Innovations Inc",
		"WRESWarren Resources",
		"WRLDWorld Acceptance Corp",
		"WSBCWesbanco Inc",
		"WSBFWaterstone Financial",
		"WSCIWsi Industries Inc",
		"WSFSWSFS Financial Corp",
		"WSFSLWSFS Financial Corp",
		"WSTCWest Corp",
		"WSTGWayside Technology Group",
		"WSTLWestell Technologies",
		"WTBAWest Bancorporation",
		"WTFCWintrust Financial Corp",
		"WTFCWWintrust Financial Corp",
		"WTSLWet Seal Inc. Cl A",
		"WVFCWvs Financial",
		"WVVIWillamette Valley Vineyards",
		"WWDWoodward Inc",
		"WWWWWeb.Com Group Inc",
		"WYNNWynn Resorts Limited",
		"XBKSXenith Bankshares",
		"XGTIXG Technology Inc",
		"XGTIWXG Technology Inc",
		"XIVDaily Inverse VIX ST ETN Velocityshares",
		"XLNXXilinx Inc",
		"XLRNAcceleron Pharma Inc",
		"XNCRXencor Inc.",
		"XNPTXenoport Inc",
		"XOMAXoma Ltd",
		"XONEThe Exone Company",
		"XOOMXoom Corp",
		"XPLRXplore Tech Corp De",
		"XRAYDentsply International Inc",
		"XRSCXrs Corp",
		"XRTXXyratex Ltd",
		"XTEXCrosstex Energy L.P.",
		"XTLBXtl Biopharma Ads",
		"XTXICrosstex Energy",
		"XWESWorld Energy Solutions Inc",
		"XXIAIXIA",
		"YDIVInternational Multi-Asset Diver",
		"YDKNYadkin Valley Financial Corp",
		"YHOOYahoo! Inc",
		"YNDXYandex N.V.",
		"YODYou On Demand Holdings Inc",
		"YONGYongye International Inc",
		"YORWThe York Water Company",
		"YPROAdvisorshares Trust",
		"YRCWYRC Worldwide",
		"YYYY Inc",
		"ZZillow Inc. Cl A",
		"ZAGGZagg Inc",
		"ZAZAZaza Energy Corp",
		"ZBRAZebra Technologies Corp",
		"ZEUSOlympic Steel",
		"ZGNXZogenix Inc",
		"ZHNEZhone Technologies",
		"ZIGOZygo Corp",
		"ZINCHorsehead Holding",
		"ZIONZions Bancorporation",
		"ZIONWZions Bancorporation",
		"ZIOPZiopharm Oncology Inc",
		"ZIPRZiprealty Inc",
		"ZIVDaily Inverse VIX Mt ETN Velocityshares",
		"ZIXIZix Corp",
		"ZLCSZalicus Inc",
		"ZLTQZeltiq Aesthetics Inc",
		"ZNZion Oil & Gas Inc",
		"ZNGAZynga Inc",
		"ZOOMZoom Technologies",
		"ZUZulily Inc",
		"ZUMZZumiez Inc"
 ];
