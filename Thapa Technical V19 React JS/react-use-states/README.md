# Note : Keep this thing in your mind , kabhi bhi agar parent ka state change hua , then wo re render ho jaye ga , magar keep this thing in your mind k wo apnay sath sath apnay child component ko bhi render kar day ga 

# Note : Also keep this thing in your mind k parent k affect honay say child pay sirf affect hota hay, magar sibling pay koi faraq nhi padta hay agar state update karain gay means : 

*** <ParentComponent>
    <ChildComponent><ChildComponent/>
    <AnotherChildComponent><AnotherChildComponent/>
</ParentComponent> *** // Both (children) will re render , if the parent will re-render 

But, 

<SiblingComponent>
</SiblingComponent>

will not get affected ....
