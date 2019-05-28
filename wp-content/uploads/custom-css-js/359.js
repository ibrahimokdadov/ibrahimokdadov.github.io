<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Add your JavaScript code here.
                     
If you are using the jQuery library, then don't forget to wrap your code inside jQuery.ready() as follows:

jQuery(document).ready(function( $ ){
    // Your code in here 
});

End of comment */ 

    Bokeh.$(function() {
    Bokeh.safely(function() {
        var docs_json = {"a026ce9f-740c-443d-aa79-1c3269f531dc":{"roots":{"references":[{"attributes":{"callback":null,"factors":["Russia","China","Barbados","South Africa","Macau","Algeria","Australia","Indonesia","Azerbaijan","Malaysia","Norway","United Arab Emirates","Kazakhstan","Uzbekistan","Iran","Kuwait","Canada","Egypt","Tanzania","Libya","Netherlands","Ukraine","India","Oman","Pakistan","Qatar","Lebanon","Romania","Yemen","Trinidad and Tobago","Argentina","Brunei","Brazil","Mexico","Thailand","Colombia","Turkmenistan","Peru","United Kingdom","Burma","Bolivia","Angola","Syria","Papua New Guinea","Timor-Leste","Israel","Bangladesh","United States","Germany","Ghana","Poland","Cameroon","Mozambique","Philippines","Chile","Bahrain","Congo, Republic of the","Sudan","Saudi Arabia","Cuba","Italy","Tunisia","Rwanda","Namibia","Denmark","Korea-South","Afghanistan","Serbia","Equatorial Guinea","Iraq","New Zealand","Croatia","Cote d'Ivoire","Mauritania","Ethiopia","Gabon","Austria","Japan","Slovakia","Georgia","Venezuela","Ireland","Ecuador","Hungary","France","Taiwan","Turkey","Jordan","Bulgaria","Tajikistan","Somalia","Nigeria","Kyrgyzstan","Czech Republic","Guatemala","Belarus","Spain","Morocco","Benin","Congo-Democratic Republic of the","Greece","Albania"]},"id":"df062f27-3c6a-411e-88a2-d6212acb4cc9","type":"FactorRange"},{"attributes":{"plot":{"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"}},"id":"0a59955f-c319-491a-9142-ef40292e9186","type":"PanTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"74215dd5-f1d1-4dff-994e-71f663f1b7df","type":"HBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e6a5fddf-b5ae-45de-9619-a1c7e335deed","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"},"ticker":{"id":"91bdb38c-aa4e-4308-a5a3-753f8e548ebe","type":"CategoricalTicker"}},"id":"ff9389af-f9f5-46af-a282-31a6b1c3414f","type":"Grid"},{"attributes":{"plot":{"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"},"ticker":{"id":"458bd9ff-1e80-4b82-b561-a4be01fabfe9","type":"BasicTicker"}},"id":"b3cd098f-e19f-4838-a9dc-f405aa7c7328","type":"Grid"},{"attributes":{"plot":{"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"}},"id":"886be75e-72be-4aee-b63f-3d5ba89b19e0","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"e6a5fddf-b5ae-45de-9619-a1c7e335deed","type":"BoxAnnotation"},"plot":{"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"}},"id":"3ddfd0ea-f621-4b71-baf4-a023ca54e4f5","type":"BoxZoomTool"},{"attributes":{},"id":"72c71d7d-8b26-45d4-9fc4-3277d9eb98d7","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[48700000000000,4643000000000,113300000,27160000,300000,4502000000000,4300000000000,3001000000000,2600000000000,2350000000000,2313000000000,2250000000000,1900000000000,1841000000000,33600000000000,1798000000000,1754000000000,1656000000000,1614060000000,1539000000000,1416000000000,1104000000000,4232000000000,849500000000,754000000000,24700000000000,750400000000,726000000000,478500000000,436100000000,430000000000,390800000000,364200000000,359700000000,342000000000,377000000000,17500000000000,334100000000,292000000000,283200000000,281000000000,271800000000,240700000000,226500000000,200000000000,199000000000,195400000000,9860000000000,175600000000,165000000000,164800000000,135100000000,127400000000,108700000000,97970000000,92030000000,90610000000,84950000000,8600000000000,70790000000,69830000000,65130000000,62290000000,61300000000,56630000000,50000000000,49550000000,48140000000,36810000000,6400000000000,33980000000,30580000000,28320000000,28320000000,28320000000,24920000000,24800000000,20900000000,14160000000,9911000000,5724500000000,8495000000,8098000000,7985000000,7079000000,6229000000,6088000000,6031000000,5663000000,5663000000,5663000000,5100000000000,5663000000,3072000000,2960000000,2832000000,2548000000,1501000000,1133000000,991100000,991100000,849500000],"y":["Russia","China","Barbados","South Africa","Macau","Algeria","Australia","Indonesia","Azerbaijan","Malaysia","Norway","United Arab Emirates","Kazakhstan","Uzbekistan","Iran","Kuwait","Canada","Egypt","Tanzania","Libya","Netherlands","Ukraine","India","Oman","Pakistan","Qatar","Lebanon","Romania","Yemen","Trinidad and Tobago","Argentina","Brunei","Brazil","Mexico","Thailand","Colombia","Turkmenistan","Peru","United Kingdom","Burma","Bolivia","Angola","Syria","Papua New Guinea","Timor-Leste","Israel","Bangladesh","United States","Germany","Ghana","Poland","Cameroon","Mozambique","Philippines","Chile","Bahrain","Congo, Republic of the","Sudan","Saudi Arabia","Cuba","Italy","Tunisia","Rwanda","Namibia","Denmark","Korea-South","Afghanistan","Serbia","Equatorial Guinea","Iraq","New Zealand","Croatia","Cote d'Ivoire","Mauritania","Ethiopia","Gabon","Austria","Japan","Slovakia","Georgia","Venezuela","Ireland","Ecuador","Hungary","France","Taiwan","Turkey","Jordan","Bulgaria","Tajikistan","Somalia","Nigeria","Kyrgyzstan","Czech Republic","Guatemala","Belarus","Spain","Morocco","Benin","Congo-Democratic Republic of the","Greece","Albania"]}},"id":"7114e521-c4d5-4766-ae15-eff4b5fe8fcb","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"green"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"633bfca3-732b-43a8-ac5e-785bdb5a272b","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[48700000000000,4643000000000,113300000,27160000,300000,4502000000000,4300000000000,3001000000000,2600000000000,2350000000000,2313000000000,2250000000000,1900000000000,1841000000000,33600000000000,1798000000000,1754000000000,1656000000000,1614060000000,1539000000000,1416000000000,1104000000000,4232000000000,849500000000,754000000000,24700000000000,750400000000,726000000000,478500000000,436100000000,430000000000,390800000000,364200000000,359700000000,342000000000,377000000000,17500000000000,334100000000,292000000000,283200000000,281000000000,271800000000,240700000000,226500000000,200000000000,199000000000,195400000000,9860000000000,175600000000,165000000000,164800000000,135100000000,127400000000,108700000000,97970000000,92030000000,90610000000,84950000000,8600000000000,70790000000,69830000000,65130000000,62290000000,61300000000,56630000000,50000000000,49550000000,48140000000,36810000000,6400000000000,33980000000,30580000000,28320000000,28320000000,28320000000,24920000000,24800000000,20900000000,14160000000,9911000000,5724500000000,8495000000,8098000000,7985000000,7079000000,6229000000,6088000000,6031000000,5663000000,5663000000,5663000000,5100000000000,5663000000,3072000000,2960000000,2832000000,2548000000,1501000000,1133000000,991100000,991100000,849500000],"y":["Russia","China","Barbados","South Africa","Macau","Algeria","Australia","Indonesia","Azerbaijan","Malaysia","Norway","United Arab Emirates","Kazakhstan","Uzbekistan","Iran","Kuwait","Canada","Egypt","Tanzania","Libya","Netherlands","Ukraine","India","Oman","Pakistan","Qatar","Lebanon","Romania","Yemen","Trinidad and Tobago","Argentina","Brunei","Brazil","Mexico","Thailand","Colombia","Turkmenistan","Peru","United Kingdom","Burma","Bolivia","Angola","Syria","Papua New Guinea","Timor-Leste","Israel","Bangladesh","United States","Germany","Ghana","Poland","Cameroon","Mozambique","Philippines","Chile","Bahrain","Congo, Republic of the","Sudan","Saudi Arabia","Cuba","Italy","Tunisia","Rwanda","Namibia","Denmark","Korea-South","Afghanistan","Serbia","Equatorial Guinea","Iraq","New Zealand","Croatia","Cote d'Ivoire","Mauritania","Ethiopia","Gabon","Austria","Japan","Slovakia","Georgia","Venezuela","Ireland","Ecuador","Hungary","France","Taiwan","Turkey","Jordan","Bulgaria","Tajikistan","Somalia","Nigeria","Kyrgyzstan","Czech Republic","Guatemala","Belarus","Spain","Morocco","Benin","Congo-Democratic Republic of the","Greece","Albania"]}},"id":"16322592-a11a-497e-bd42-da95601ae86d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"}},"id":"102eef37-d467-4137-90fa-b015ac66a970","type":"ResetTool"},{"attributes":{"axis_label":"reserve (m3)","formatter":{"id":"72c71d7d-8b26-45d4-9fc4-3277d9eb98d7","type":"BasicTickFormatter"},"plot":{"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"},"ticker":{"id":"458bd9ff-1e80-4b82-b561-a4be01fabfe9","type":"BasicTicker"}},"id":"2029983d-aac3-4d4f-bb0f-0d9dba039749","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0a59955f-c319-491a-9142-ef40292e9186","type":"PanTool"},{"id":"886be75e-72be-4aee-b63f-3d5ba89b19e0","type":"WheelZoomTool"},{"id":"3ddfd0ea-f621-4b71-baf4-a023ca54e4f5","type":"BoxZoomTool"},{"id":"6138b053-b140-4572-8d74-5c231eb97f3e","type":"SaveTool"},{"id":"102eef37-d467-4137-90fa-b015ac66a970","type":"ResetTool"},{"id":"3009b7a2-8eb9-4b7a-8eb4-0f620662eb96","type":"HelpTool"}]},"id":"3325866a-a840-4024-ac83-27f2e4bae31b","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"970b4574-7015-439d-b71d-10cbdf8881d9","type":"HBar"},{"attributes":{"below":[{"id":"2029983d-aac3-4d4f-bb0f-0d9dba039749","type":"LinearAxis"}],"left":[{"id":"235f9555-12a1-472c-9286-87db773c3708","type":"CategoricalAxis"}],"plot_height":1224,"renderers":[{"id":"2029983d-aac3-4d4f-bb0f-0d9dba039749","type":"LinearAxis"},{"id":"b3cd098f-e19f-4838-a9dc-f405aa7c7328","type":"Grid"},{"id":"235f9555-12a1-472c-9286-87db773c3708","type":"CategoricalAxis"},{"id":"ff9389af-f9f5-46af-a282-31a6b1c3414f","type":"Grid"},{"id":"e6a5fddf-b5ae-45de-9619-a1c7e335deed","type":"BoxAnnotation"},{"id":"eb653354-af43-4638-a336-beb96cf591fe","type":"GlyphRenderer"},{"id":"4662a408-3420-4297-baae-24fde6626fb9","type":"GlyphRenderer"}],"title":{"id":"821de272-5d67-4989-b1b5-fb7f9c974293","type":"Title"},"tool_events":{"id":"385c6c0c-d582-4432-be48-4d1f4f6476cb","type":"ToolEvents"},"toolbar":{"id":"3325866a-a840-4024-ac83-27f2e4bae31b","type":"Toolbar"},"x_range":{"id":"720abe56-5fd5-4c7d-b2c8-d5b50feb9a5f","type":"DataRange1d"},"y_range":{"id":"df062f27-3c6a-411e-88a2-d6212acb4cc9","type":"FactorRange"}},"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"458bd9ff-1e80-4b82-b561-a4be01fabfe9","type":"BasicTicker"},{"attributes":{"data_source":{"id":"16322592-a11a-497e-bd42-da95601ae86d","type":"ColumnDataSource"},"glyph":{"id":"74215dd5-f1d1-4dff-994e-71f663f1b7df","type":"HBar"},"hover_glyph":null,"nonselection_glyph":{"id":"970b4574-7015-439d-b71d-10cbdf8881d9","type":"HBar"},"selection_glyph":null},"id":"eb653354-af43-4638-a336-beb96cf591fe","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"}},"id":"3009b7a2-8eb9-4b7a-8eb4-0f620662eb96","type":"HelpTool"},{"attributes":{"plot":{"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"}},"id":"6138b053-b140-4572-8d74-5c231eb97f3e","type":"SaveTool"},{"attributes":{},"id":"385c6c0c-d582-4432-be48-4d1f4f6476cb","type":"ToolEvents"},{"attributes":{},"id":"91bdb38c-aa4e-4308-a5a3-753f8e548ebe","type":"CategoricalTicker"},{"attributes":{},"id":"abb333c7-87aa-45fe-850d-c7f431ef9190","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"country","formatter":{"id":"abb333c7-87aa-45fe-850d-c7f431ef9190","type":"CategoricalTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0","subtype":"Figure","type":"Plot"},"ticker":{"id":"91bdb38c-aa4e-4308-a5a3-753f8e548ebe","type":"CategoricalTicker"}},"id":"235f9555-12a1-472c-9286-87db773c3708","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"7114e521-c4d5-4766-ae15-eff4b5fe8fcb","type":"ColumnDataSource"},"glyph":{"id":"633bfca3-732b-43a8-ac5e-785bdb5a272b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"1a1535e1-d2d6-4fa5-be57-4d38a99d7bd2","type":"Circle"},"selection_glyph":null},"id":"4662a408-3420-4297-baae-24fde6626fb9","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"821de272-5d67-4989-b1b5-fb7f9c974293","type":"Title"},{"attributes":{"callback":null},"id":"720abe56-5fd5-4c7d-b2c8-d5b50feb9a5f","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a1535e1-d2d6-4fa5-be57-4d38a99d7bd2","type":"Circle"}],"root_ids":["e063aa5d-b93b-48d9-bc29-0bad5773cbc0"]},"title":"Bokeh Application","version":"0.12.3"}};
        var render_items = [{"docid":"a026ce9f-740c-443d-aa79-1c3269f531dc","elementid":"3b4eb181-e1c9-47a6-892b-93ef862a8af0","modelid":"e063aa5d-b93b-48d9-bc29-0bad5773cbc0"}];
        
        Bokeh.embed.embed_items(docs_json, render_items);
    });
});
</script></script>
<!-- end Simple Custom CSS and JS -->
