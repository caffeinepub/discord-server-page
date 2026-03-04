import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Principal "mo:core/Principal";

actor {
  type FeatureHighlight = {
    title : Text;
    description : Text;
  };

  module FeatureHighlight {
    public func compare(feature1 : FeatureHighlight, feature2 : FeatureHighlight) : Order.Order {
      switch (Text.compare(feature1.title, feature2.title)) {
        case (#equal) { Text.compare(feature1.description, feature2.description) };
        case (order) { order };
      };
    };
  };

  type ServerInfo = {
    serverName : Text;
    tagline : Text;
    description : Text;
    inviteURL : Text;
    memberCount : Nat;
  };

  module ServerInfo {
    public func compare(serverInfo1 : ServerInfo, serverInfo2 : ServerInfo) : Order.Order {
      Text.compare(serverInfo1.serverName, serverInfo2.serverName);
    };
  };

  let serverInfoMap = Map.empty<Principal, ServerInfo>();
  var features : [FeatureHighlight] = [];
  var rules : [Text] = [];

  public shared ({ caller }) func isAdmin() : async Bool {
    true;
  };

  public query ({ caller }) func getServerInfo(admin : Principal) : async ServerInfo {
    switch (serverInfoMap.get(admin)) {
      case (?info) { info };
      case (null) { Runtime.trap("Server info not found") };
    };
  };

  public shared ({ caller }) func updateServerInfo(serverName : Text, tagline : Text, description : Text, inviteURL : Text, memberCount : Nat) : async () {
    if (not (await isAdmin())) { Runtime.trap("Unauthorized") };

    let serverInfo : ServerInfo = {
      serverName;
      tagline;
      description;
      inviteURL;
      memberCount;
    };
    serverInfoMap.add(caller, serverInfo);
  };

  public query ({ caller }) func getFeatureHighlights() : async [FeatureHighlight] {
    features;
  };

  public shared ({ caller }) func updateFeatureHighlights(newFeatures : [FeatureHighlight]) : async () {
    if (not (await isAdmin())) { Runtime.trap("Unauthorized") };
    features := newFeatures.sort();
  };

  public query ({ caller }) func getRules() : async [Text] {
    rules;
  };

  public shared ({ caller }) func updateRules(newRules : [Text]) : async () {
    if (not (await isAdmin())) { Runtime.trap("Unauthorized") };
    rules := newRules.sort();
  };
};
