function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
    let hasUnsafeCondition = !isDoorLocked || !isWindowClosed || !isAlarmOn || !isOwnerInside;

    console.log(isSecure && !hasUnsafeCondition ? "Secure" : "Unsafe");
}

checkSecurity(true, true, true, true);
checkSecurity(true, false, true, true);
checkSecurity(true, true, false, true);
