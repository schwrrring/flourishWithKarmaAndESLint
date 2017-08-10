export function buildFakeGeoJson(nrOfPoint, nrOfDays){
let FeatureCollectionTemplate =   {
       "type": "FeatureCollection",
       "features": [{
           "type": "Feature",
           "geometry": {
               "type": "Point",
               "coordinates": [102.0, 0.5]
           },
           "properties": {
							 "id": 123,		 
               "data": [
											 {
															 'valueXs': 1,
															 'valueS': 2, 
															 'time': 3
											 }
							 ]
           }
       }]
	}
				return FeatureCollectionTemplate
}
