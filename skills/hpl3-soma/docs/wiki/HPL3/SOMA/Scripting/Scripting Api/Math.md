{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Math_CatmullRom|Math_CatmullRom]]([[../../cVector3f|cVector3f]] &out avResult, const [[../../cVector3f|cVector3f]] &in avP0, const [[../../cVector3f|cVector3f]] &in avP1, const [[../../cVector3f|cVector3f]] &in avP2, const [[../../cVector3f|cVector3f]] &in avP3, float afFract)|A function that gives you a point along a spline made up of four points}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Math_CatmullRom}}
<syntaxhighlight lang="c++">void Math_CatmullRom(cVector3f &out avResult,
                     const cVector3f &in avP0,
                     const cVector3f &in avP1,
                     const cVector3f &in avP2,
                     const cVector3f &in avP3,
                     float afFract)</syntaxhighlight>
{{CodeDocDetailBody|A function that gives you a point along a spline made up of four points. The spline is guaranteed to hit the second and third points.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avResult|[[../../cVector3f|cVector3f]]|the resulting point on the spline.}}
{{CodeDocDetailParam|avP0|[[../../cVector3f|cVector3f]]|the first point.}}
{{CodeDocDetailParam|avP1|[[../../cVector3f|cVector3f]]|the second point.}}
{{CodeDocDetailParam|avP2|[[../../cVector3f|cVector3f]]|the third point.}}
{{CodeDocDetailParam|avP3|[[../../cVector3f|cVector3f]]|the fourth point.}}
{{CodeDocDetailParam|afFract|float|the normalized distance along the spline to check. 0 is at the second point, 1 is at the third point. Should not go out of the range 0-1.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}